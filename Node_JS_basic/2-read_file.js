const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split the file content by lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the header line
    const headers = lines.shift().split(',');

    if (headers.length < 4) {
      throw new Error('Invalid CSV format');
    }

    const students = {
      CS: [],
      SWE: []
    };

    // Process each line in the CSV file
    for (const line of lines) {
      const [firstname, lastname, age, field] = line.split(',');

      // Only add valid entries
      if (firstname && lastname && age && field) {
        if (field === 'CS') {
          students.CS.push(firstname);
        } else if (field === 'SWE') {
          students.SWE.push(firstname);
        }
      }
    }

    // Log the number of students
    const totalStudents = students.CS.length + students.SWE.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

// Export the function for use in other files or for testing
module.exports = countStudents;
