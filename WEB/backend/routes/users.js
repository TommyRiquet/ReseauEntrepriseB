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


// // GET login et pwd  vérif
// router.get("/login", async (req, res) => {
//     const pseudoTry="Armand";
//     const pwd= "psw1";
//     try {
//         const  pseudo =  await pool.query("SELECT name FROM users WHERE password= 'psw'", 
//         [pwd],
//         );
//         //(res.json(pseudo)==pseudoTry)? res.send("gg"):res.send("raté");
//         res.json(pseudo.rows)
//     } catch (err) {
//         console.error(err.message);
//      }
//   })


//inscription --> post (pseudo, mail, mdp, statut<etu/form_att>) --> statut possible (etu/form_val/form_att/admin)
router.post("/register", async(req,res) => {
    try {
          var name ='Manon';
          var password='psw4'
          var mail='manon@hotmail.com'
          var role='Former'
        const newFormation = await pool.query(
            'INSERT INTO users (name,password,mail,role) VALUES ($1,$2,$3,$4)',
            [name,password,mail,role]
            );
  
            res.json(newFormation.rows);
    } catch (err) {
        console.error(err.message);
     }
  });


  //update le role en former
  router.put("/update", async (req, res) => {
    try {
        id = 2;
        const updateUser = await pool.query("UPDATE users SET role = 'Former' WHERE user_id = $1",
        [id]
        );
        res.json("Users was updated");
    } catch (err) {
        console.error(err.message);
     }
})


  //update le role en student (enleve les perm)
  router.put("/update", async (req, res) => {
    try {
        id = 2;
        const updateUser = await pool.query("UPDATE users SET role = 'Student' WHERE user_id = $1",
        [id]
        );
        res.json("Users was updated");
    } catch (err) {
        console.error(err.message);
     }
})


module.exports = router;
