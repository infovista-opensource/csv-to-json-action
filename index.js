const core = require('@actions/core');

function run() {
  try {
    const stringValue = core.getInput('string');
    const splitByText = core.getInput('split-by');
    const splitBy = splitByText.length ? splitByText : ','
    const arrayNameText = core.getInput('name')
    const arrayName = arrayNameText.length ? arrayNameText : 'array'
    const value = stringValue.split(splitBy).map(item => item.trim());
    const jsonValue = JSON.stringify(value)
    core.debug(`setting json array output ${arrayName}: ${jsonValue}`)
    core.setOutput(arrayName, jsonValue);
  } catch (err) {
    if (err instanceof Error) core.setFailed(err.message)
  }

}

run()
