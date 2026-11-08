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
