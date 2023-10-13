const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data
          .split('\n')
          .filter((row) => row.trim() !== '')
          .map((row) => {
            const [firstName, , , field] = row.split(',');
            return { field, firstName };
          });

        if (students.length === 0) {
          reject(new Error('Cannot load the database'));
        } else {
          const studentCount = students.length;
          console.log(`Number of students: ${studentCount}`);

          const fields = {};

          students.forEach((student) => {
            const { field, firstName } = student;
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstName);
          });

          for (const field in fields) {
            if (fields.hasOwnProperty.call(fields, field)) {
              console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
            }
          }

          resolve(studentCount);
        }
      }
    });
  });
}
