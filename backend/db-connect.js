var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'murugu123',
  database: 'student_management'
})

connection.connect()

connection.query('SELECT * from skills AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()