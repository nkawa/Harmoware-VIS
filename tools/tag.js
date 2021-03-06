const co = require('co');
const cmd = require('node-cmd');
const pkg = require('../package.json');
/**
 * Run system command
 *
 * @param cmdString
 * @returns {Promise}
 */
const systemCmd = cmdString =>
new Promise((resolve) => {
  cmd.get(
    cmdString,
    (data, err, stderr) => {
      console.log(cmdString);
      console.log(data);
      if (err) {
        console.log(err);
      }
      if (stderr) {
        console.log(stderr);
      }
      resolve(data);
    }
  );
});

co(function* () {
  try {
    yield systemCmd(`git push origin v${pkg.version}`);
  } catch (err) {
    console.log(err);
  }
});