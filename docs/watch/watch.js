/* AI Governance Chain watch pages.
   Until an episode has a YouTube link in videos.json and its publishAt time has passed,
   the page shows our own poster and loads nothing from third parties.
   After that, it shows the YouTube player (privacy-enhanced mode) and adds VideoObject markup for search engines. */
(() => {
  const cfgEl = document.getElementById('ep');
  if (!cfgEl) return;
  const ep = JSON.parse(cfgEl.textContent);
  const player = document.getElementById('player');
  const sec = t => String(t).trim().split(':').map(Number).reduce((a, b) => a * 60 + b, 0);
  const clock = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const iso = s => `PT${Math.floor(s / 3600) ? Math.floor(s / 3600) + 'H' : ''}${Math.floor((s % 3600) / 60)}M${s % 60}S`;
  const ytId = v => {
    const s = String(v || '').trim();
    const m = s.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/) || s.match(/^([A-Za-z0-9_-]{11})$/);
    return m ? m[1] : null;
  };
  const embed = (id, start, autoplay) => `https://www.youtube-nocookie.com/embed/${id}?rel=0${start ? '&start=' + start : ''}${autoplay ? '&autoplay=1' : ''}`;

  fetch('/watch/videos.json', { cache: 'no-cache' })
    .then(r => (r.ok ? r.json() : {}))
    .then(all => {
      const v = all[ep.code] || {};
      const id = ytId(v.youtube) || ep.baked;
      const when = Date.parse(v.publishAt || ep.publishAt || '');
      if (!id || (!ep.baked && when && Date.now() < when)) return;
      goLive(id, v);
    })
    .catch(() => {});

  function goLive(id, v) {
    const t = Math.max(0, parseInt(new URLSearchParams(location.search).get('t'), 10) || 0);
    let frame = player.querySelector('iframe');
    if (!frame) {
      frame = document.createElement('iframe');
      frame.title = ep.name;
      frame.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allowFullscreen = true;
      frame.src = embed(id, t, false);
      player.replaceChildren(frame);
    } else if (t) {
      frame.src = embed(id, t, false);
    }
    player.classList.add('is-live');

    const status = document.getElementById('status');
    if (status) {
      const published = new Date(Date.parse(v.publishAt || ep.publishAt)).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Zurich' });
      status.innerHTML = '';
      const a = document.createElement('strong');
      a.textContent = `${ep.liveLabel || 'Premiered on YouTube'}, ${published}`;
      const link = document.createElement('a');
      link.href = `https://www.youtube.com/watch?v=${id}`;
      link.rel = 'noopener';
      link.textContent = 'Watch on YouTube';
      const note = document.createElement('span');
      note.textContent = 'The player loads from YouTube in privacy-enhanced mode (youtube-nocookie.com). The transcript below loads nothing from third parties.';
      status.append(a, link, note);
    }

    // Real chapter times from the final YouTube description, if supplied.
    const real = Array.isArray(v.chapters) && v.chapters.length >= 3 ? v.chapters.map(([c, n]) => [sec(c), String(n)]) : null;
    if (real) {
      const list = document.getElementById('chapters');
      if (list) {
        list.innerHTML = '';
        real.forEach(([s, n], i) => {
          const li = document.createElement('li');
          const tc = document.createElement('a');
          tc.className = 'tc'; tc.dataset.t = s; tc.textContent = clock(s);
          const nm = document.createElement('a');
          nm.dataset.t = s; nm.textContent = n;
          li.append(tc, nm);
          list.append(li);
        });
      }
      const heads = document.querySelectorAll('.tx h3 .tc');
      if (heads.length === real.length) heads.forEach((h, i) => { h.dataset.t = real[i][0]; h.textContent = clock(real[i][0]); });
      else heads.forEach(h => { h.removeAttribute('data-t'); h.textContent = ''; });
      document.querySelectorAll('.approx').forEach(n => n.remove());
    }

    document.querySelectorAll('[data-t]').forEach(a => {
      a.href = `?t=${a.dataset.t}`;
      a.addEventListener('click', e => {
        e.preventDefault();
        const s = +a.dataset.t;
        frame.src = embed(id, s, true);
        history.replaceState(null, '', s ? `?t=${s}` : location.pathname);
        player.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      });
    });

    if (document.getElementById('ld-video')) return;
    const transcript = [...document.querySelectorAll('.tx p')].map(p => p.textContent.trim()).join('\n\n');
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      '@id': ep.url + '#video',
      name: ep.name,
      description: ep.description,
      thumbnailUrl: [ep.poster, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
      uploadDate: v.uploadDate || v.publishAt || ep.publishAt,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
      url: ep.url,
      inLanguage: 'en-GB',
      isFamilyFriendly: true,
      author: { '@type': 'Person', name: 'Mathieu K. Gouanou', url: 'https://github.com/mathieugouanou' },
      isPartOf: { '@id': ep.url + '#episode' },
      transcript
    };
    if (v.duration) ld.duration = /^P/.test(v.duration) ? v.duration : iso(sec(v.duration));
    if (real) {
      const end = v.duration ? sec(/^P/.test(v.duration) ? '0' : v.duration) : 0;
      ld.hasPart = real.map(([s, n], i) => {
        const clip = { '@type': 'Clip', name: n, startOffset: s, url: `${ep.url}?t=${s}` };
        const next = real[i + 1] ? real[i + 1][0] : end;
        if (next > s) clip.endOffset = next;
        return clip;
      });
    }
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'ld-video';
    tag.textContent = JSON.stringify(ld);
    document.head.append(tag);
  }
})();
