/**
 * What it does:
 * Tests ping on different domains and logs if it works or not. Is to be run before running the software to prove that Internet is actively working.
 *
 * TODO(What it should do):
 * Continously ping different domains for an ongoing period of time and collect data. Then log whether or not that data is good/flaky/bad/not working
 */

import { pingTarget } from '../backend/src/utils/pingTarget/pingTarget.ts';

const ok = [];
const bad = [];
const links = [
  'https://google.com',
  'https://apple.com',
  'https://youtube.com',
];

console.log('Starting the test-ping...');

const runPing = async () => {
  const responses = await Promise.all(links.map(pingTarget));

  for (const [index, res] of responses.entries()) {
    if (!res.status) {
      bad.push({ link: links[index], status: res.status });
    } else {
      ok.push({ link: links[index], status: res.status });
    }
  }
};

await runPing();

if (bad.length > 0) {
  console.error('RunPing had the following issues:');
  for (const problem of bad) {
    console.error(` - ${problem.link}`);
  }
} else {
  console.log('All tests pass:');
  ok.forEach((e) => console.log(` - ${e.link}`));
}
