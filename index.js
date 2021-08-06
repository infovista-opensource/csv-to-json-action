const core = require('@actions/core');

function run() {
  try {
    const stringValue = core.getInput('string');
    const splitBy = core.getInput('split-by');
    const value = stringValue.split(splitBy).map(item => item.trim());
    core.setOutput('array1', JSON.stringify([1,2]));
    value.forEach((el, index) => {
      core.setOutput(`_${index}`, el);
    });
  } catch (err) {
    core.setFailed(err.message);
  }

}

run()
