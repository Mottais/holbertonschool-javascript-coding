const fs = require('fs').promises;

function parseDataToObject(data) {
  const lines = data.split('\n');
  const result = {};
  for (let i = 1; i < (lines.length - 1); i += 1) {
    const [firstname, , , field] = lines[i].split(',');
    if (field) {
      if (!result[field]) { result[field] = []; }
      result[field].push(firstname);
    }
  }
  return result;
}
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => parseDataToObject(data))
    .catch(() => { throw new Error('Cannot load the database'); });
}

module.exports = countStudents;
