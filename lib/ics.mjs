// iCalendar (RFC 5545) export of the world AI-law deadline calendar.
const esc = s => String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
function fold(line) {
  const out = [];
  let s = line;
  while (Buffer.byteLength(s) > 74) {
    let cut = 74;
    while (Buffer.byteLength(s.slice(0, cut)) > 74) cut--;
    out.push(s.slice(0, cut));
    s = ' ' + s.slice(cut);
  }
  out.push(s);
  return out.join('\r\n');
}

export function toIcs(deadlines, { name = 'World AI-law deadlines (AI Governance Chain)', stamp = new Date() } = {}) {
  const dt = stamp.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//AI Governance Chain//Deadline Calendar 0.1//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', fold(`X-WR-CALNAME:${esc(name)}`), fold('X-WR-CALDESC:Dates when AI-governance obligations start to apply. Draft open data. Not legal advice.')];
  for (const d of deadlines) {
    const day = d.date.replace(/-/g, '');
    const next = new Date(Date.parse(d.date) + 86400000).toISOString().slice(0, 10).replace(/-/g, '');
    const uid = `${day}-${Buffer.from(d.title).toString('base64').replace(/[^A-Za-z0-9]/g, '').slice(0, 24)}@aigovernancechain`;
    lines.push('BEGIN:VEVENT', `UID:${uid}`, `DTSTAMP:${dt}`, `DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${next}`, fold(`SUMMARY:${esc(`[${d.jurisdiction}] ${d.title}`)}`), fold(`DESCRIPTION:${esc(`${d.obligations?.length ? `Obligations: ${d.obligations.join(', ')}. ` : ''}Source: ${d.source || 'see Atlas'}. Draft open data from AI Governance Chain. Not legal advice.`)}`));
    if (d.source) lines.push(fold(`URL:${d.source}`));
    lines.push('TRANSP:TRANSPARENT', 'END:VEVENT');
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n') + '\r\n';
}
