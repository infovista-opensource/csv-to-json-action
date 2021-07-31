const core = require('@actions/core');

function run() {
  try {
    const stringValue = core.getInput('string');
    const splitBy = core.getInput('split-by');
    const value = stringValue.split(splitBy);
    core.setOutput('array', JSON.stringify(value));
    value.forEach((el, index) => {
      core.setOutput(`_${index}`, el);
    });
  } catch (err) {
    core.setFailed(err.message);
  }

}

run()
