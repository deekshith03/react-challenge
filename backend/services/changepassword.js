const db = require("./db");

const changePassFunc = async (email,newpass) => {
  db.connection.connect();
   let sql= 'SELECT * from users where email= ?'
  db.connection.query(sql,email,
    function (err, rows, fields) {
      if (err)
      { 
      throw err;
      }
      else
      {
          if(rows.length===0)
          {
              console.log("user does not exist");
          }
          else
          {
              db.connection.query();
              console.log("your password has been changed")
          }
      }
    }
  );

  db.connection.end();
};


module.exports={
    changePassFunc
}
