const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');

  lines.shift();

  const fields = {};

  for (const line of lines) {
    const [firstName, , , field] = line.split(',');

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstName);
  }

  console.log(`Number of students: ${lines.length}`);
  if (fields.CS) {
    console.log(`Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}`);
  }
  if (fields.SWE) {
    console.log(`Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`);
  }
}

module.exports = countStudents;
