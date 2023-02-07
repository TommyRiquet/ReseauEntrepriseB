var express = require('express');
var router = express.Router();
const pool = require("../db/db");


//Get users
router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users;");
    res.json(allUsers.rows);
  } catch (err) {
      console.error(err.message);
   }
})




//Get user par role (waiting/student/admin/teacher)
router.get("/:role", async (req, res) => {
  try {
      const roleUser = req.params.role
      const users = await pool.query('SELECT user_id, name, mail FROM users WHERE role = $1;',
      [roleUser]);
      res.json(users.rows);
  } catch (err) {
      console.error(err.message);
   }
})



// GET login et pwd  vérif
router.get("/:pseudo/:pwd", async (req, res) => {
  const pseudoTry=req.params.pseudo;
  const pwd= req.params.pwd;
  try {
      const  pseudo =  await pool.query("SELECT pseudo FROM users WHERE password= $1", 
      [pwd],
      );
      (res.json(pseudo)==pseudoTry)? console.log("gg"):console.log("raté");
  } catch (err) {
      console.error(err.message);
   }
})

module.exports = router;
