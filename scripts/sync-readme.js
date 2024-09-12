const fs = require('fs');
const path = require('path');
const process = require('process');
const childProcess = require('child_process');

function findMarkerRange(lines, markerName, filePath) {
  const trimmedLines = lines.map((x) => x.trim());
  const beginMarker = `<!-- start-${markerName} -->`;
  const beginIndex = trimmedLines.indexOf(beginMarker);
  if (beginIndex < 0) {
    throw new Error(`Unable to find marker ${beginMarker} in file:\n${filePath}`);
  }
  const endMarker = `<!-- end-${markerName} -->`;
  const endIndex = trimmedLines.indexOf(endMarker);
  if (endIndex < 0) {
    throw new Error(`Unable to find marker ${endMarker} in file:\n${filePath}`);
  }
  if (endIndex < beginIndex) {
    throw new Error(`Incorrect marker ${endMarker} in file:\n${filePath}`);
  }

  return [beginIndex, endIndex];
}

function normalizeForCompare(text) {
  // Ignore trailing newlines
  text = text.trimEnd();
  // Ignore trailing spaces
  text = text
    .split('\n')
    .map((x) => x.trimEnd())
    .join('\n');
  // Discard windows CR
  text = text.split('\r').join('');
  return text;
}

function runCommand(command, args) {
  console.log(`> ${command} ${args.join(' ')}`);
  const result = childProcess.spawnSync(command, args, {
    stdio: 'inherit',
    shell: true
  });
  if (result.error) {
    console.log(result.error.message);
    process.exitCode = 1;
    return false;
  }
  process.exitCode = result.status;
  return result.status ? false : true;
}

/**
 * @param markerName - the name of the marker, for example `sample`
 *   indicates to look for the markers `<!-- begin-sample -->` and `<!-- end-sample -->`.
 * @param inputPath - the path to the input file, relative to the folder of this script.
 * @param updatePath - the path to the output file that will get updated, relative to the folder of this script.
 */
function syncReadme(markerName, inputPath, updatePath) {
  // Read the marker-delimited snippet from the inputPath file
  const inputText = fs.readFileSync(path.join(__dirname, inputPath)).toString();
  const inputLines = inputText.split('\n');
  const [inputStartIndex, inputEndIndex] = findMarkerRange(inputLines, markerName, inputPath);
  const inputSnippetLines = inputLines.slice(inputStartIndex + 1, inputEndIndex);

  // Find the corresponding marker-delimited snippet in the updatePath file, and replace it
  const updateFullPath = path.resolve(__dirname, updatePath);
  const updateOldText = fs.readFileSync(updateFullPath).toString();
  const updateOldLines = updateOldText.split('\n');
  const [updateStartIndex, updateEndIndex] = findMarkerRange(updateOldLines, markerName, inputPath);
  const updateNewText = [
    ...updateOldLines.slice(0, updateStartIndex + 1),
    ...inputSnippetLines,
    ...updateOldLines.slice(updateEndIndex)
  ].join('\n');

  // Are they equivalent?
  if (normalizeForCompare(updateOldText) === normalizeForCompare(updateNewText)) {
    console.log(`Marker "${markerName}" is already up to date`);
    return false;
  }

  console.log(`Updating block for marker "${markerName}"`);
  fs.writeFileSync(updateFullPath, updateNewText);
  return true;
}

let modified = false;

modified ||= syncReadme(
  'petace-overview',
  '../../PETAce/README.md',
  '../content/en/docs/petace/Overview/_index.md'
);
modified ||= syncReadme(
  'petace-getting-started',
  '../../PETAce/README.md',
  '../content/en/docs/petace/Getting started/_index.md'
);
modified ||= syncReadme(
  'shadowgraphy-overview',
  '../../shadowgraphy/README.md',
  '../content/en/docs/shadowgraphy/overview/_index.md'
);

if (modified) {
  if (process.argv.indexOf('--commit') >= 0) {
    console.log('Committing changes to Git');

    const repositoryRootFolder = path.resolve(__dirname, '..');
    console.log('Using repository root folder ' + repositoryRootFolder);
    process.chdir(repositoryRootFolder);

    runCommand(`git`, [`config`, `--global`, `user.name`, `"github-actions[bot]"`]);
    runCommand(`git`, [`config`, `--global`, `user.email`, `"github-actions[bot]@users.noreply.github.com"`]);
    runCommand(`git`, [`add`, `.`]);
    runCommand(`git`, [`commit`, `-m`, `"Automated sync of README sections from multiple repositories"`]);
    runCommand(`git`, [`push`]);

    console.log('Changes pushed successfully');
  } else {
    console.log('(Skipping Git commit because "--commit" was not specified.)');
  }
}
