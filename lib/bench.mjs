// GovBench: does an AI model know when AI-governance rules apply and where they are written?
// Questions are generated from high-confidence Atlas obligations (scripts/build.mjs -> govbench/questions.jsonl).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT } from './atlas.mjs';

export const QUESTIONS = path.join(ROOT, 'govbench', 'questions.jsonl');
const LETTERS = ['A', 'B', 'C', 'D'];

function rng(seed) { let h = crypto.createHash('sha256').update(seed).digest(); let i = 0; return () => { if (i >= h.length - 4) { h = crypto.createHash('sha256').update(h).digest(); i = 0; } const v = h.readUInt32BE(i); i += 4; return v / 2 ** 32; }; }
function pick(arr, n, r, exclude) { const pool = [...new Set(arr.filter(x => x && !exclude.includes(x)))]; const out = []; while (out.length < n && pool.length) out.push(pool.splice(Math.floor(r() * pool.length), 1)[0]); return out; }
function shuffle(arr, r) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

export function generateQuestions(atlas) {
  const qs = [];
  const obs = atlas.obligations.filter(o => o.confidence === 'high');
  const allDates = [...new Set(atlas.obligations.map(o => o.applies_from).filter(Boolean).map(String))];
  for (const o of obs) {
    const r = rng(o.id);
    const same = atlas.obligations.filter(x => x.jurisdiction === o.jurisdiction && x.id !== o.id);
    if (o.applies_from && o.status !== 'proposed') {
      const correct = String(o.applies_from);
      const near = allDates.filter(d => Math.abs(Date.parse(d) - Date.parse(correct)) < 4 * 365 * 86400000);
      const distract = pick(near.length >= 3 ? near : allDates, 3, r, [correct]);
      if (distract.length === 3) {
        const choices = shuffle([correct, ...distract], r);
        qs.push({ id: `${o.id}#date`, type: 'date', jurisdiction: o.jurisdiction, question: `${o.instrument_short} (${o.jurisdiction}), ${o.article}: "${o.title}". From which date does this obligation apply?`, choices: Object.fromEntries(choices.map((c, i) => [LETTERS[i], c])), answer: LETTERS[choices.indexOf(correct)], source_url: o.source_url, as_of: o.as_of });
      }
    }
    const arts = same.filter(x => x.instrument === o.instrument && x.article !== o.article).map(x => x.article);
    const artPool = arts.length >= 3 ? arts : same.map(x => `${x.instrument_short} ${x.article}`);
    const correctArt = arts.length >= 3 ? o.article : `${o.instrument_short} ${o.article}`;
    const dArts = pick(artPool, 3, r, [correctArt]);
    if (dArts.length === 3) {
      const choices = shuffle([correctArt, ...dArts], r);
      qs.push({ id: `${o.id}#citation`, type: 'citation', jurisdiction: o.jurisdiction, question: `In ${o.instrument_short} (${o.jurisdiction}), which provision contains this obligation: "${o.title}"?`, choices: Object.fromEntries(choices.map((c, i) => [LETTERS[i], c])), answer: LETTERS[choices.indexOf(correctArt)], source_url: o.source_url, as_of: o.as_of });
    }
    const statuses = ['applicable', 'not-yet-applicable', 'proposed', 'voluntary'];
    if (statuses.includes(o.status)) {
      const choices = statuses;
      qs.push({ id: `${o.id}#status`, type: 'status', jurisdiction: o.jurisdiction, question: `As of ${o.as_of}, what is the status of this obligation: ${o.instrument_short} (${o.jurisdiction}) ${o.article}, "${o.title}"?`, choices: Object.fromEntries(choices.map((c, i) => [LETTERS[i], c])), answer: LETTERS[choices.indexOf(o.status)], source_url: o.source_url, as_of: o.as_of });
    }
  }
  return qs;
}

export function loadQuestions(file = QUESTIONS) {
  return fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(Boolean).map(l => JSON.parse(l));
}

// answers: [{ id, answer }] where answer is a letter or the exact choice text
export function scoreAnswers(qs, answers) {
  const byId = new Map(answers.map(a => [a.id, a.answer]));
  const byType = {};
  let correct = 0, unanswered = 0;
  for (const q of qs) {
    const t = (byType[q.type] ||= { correct: 0, total: 0 });
    t.total++;
    let a = byId.get(q.id);
    if (a === undefined || a === null || a === '') { unanswered++; continue; }
    a = String(a).trim();
    const letter = LETTERS.includes(a.toUpperCase()) ? a.toUpperCase() : Object.entries(q.choices).find(([, v]) => v === a)?.[0];
    if (letter === q.answer) { correct++; t.correct++; }
  }
  return { dataset: qs[0]?.as_of || 'n/a', total: qs.length, correct, unanswered, accuracy: qs.length ? correct / qs.length : 0, byType };
}
