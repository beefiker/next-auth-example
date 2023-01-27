/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const execSyncWrapper = (command) => {
  let stdout = null;
  try {
    stdout = execSync(command).toString().trim();
  } catch (error) {
    console.error(error);
  }
  return stdout;
};

const main = () => {
  const gitBranch = execSyncWrapper('git rev-parse --abbrev-ref HEAD');
  const gitCommitHash = execSyncWrapper('git rev-parse --short=7 HEAD');
  const buildTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

  const obj = {
    gitBranch,
    gitCommitHash,
    buildTime,
  };

  const filePath = path.resolve('src/lib', 'generatedGitInfo.json');
  const fileContents = JSON.stringify(obj, null, 2);

  fs.writeFileSync(filePath, fileContents);
  console.log(`Wrote the following contents to ${filePath}\n${fileContents}`);
};

main();
