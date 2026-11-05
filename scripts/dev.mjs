import { spawn } from 'node:child_process';

const rawArgs = process.argv.slice(2);
const nextArgs = [];

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];

  if (arg === '--strictPort') {
    continue;
  }

  nextArgs.push(arg === '--host' ? '--hostname' : arg);
}

if (!nextArgs.includes('--hostname')) {
  nextArgs.push('--hostname', '0.0.0.0');
}

const child = spawn(
  process.execPath,
  ['node_modules/next/dist/bin/next', 'dev', ...nextArgs],
  { stdio: 'inherit' }
);

child.on('exit', (code) => {
  process.exit(code ?? 0);
});