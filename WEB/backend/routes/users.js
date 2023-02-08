var express = require('express');
var router = express.Router();
const pool = require("../db/db");
const argon = require("argon2");
const crypto = require("crypto");


//Check if session into table session and return the pseudo if there is a session
const whoIsConnected = async (cookie) => {
  if (Object.keys(cookie).length === 0){
    return false
  }
  const result = await pool.query("SELECT name FROM session WHERE sessionUUID = ?", [cookie.sessionId])
  if (result.rows.pseudo === null){
    return false
  }

  return result.rows.pseudo 
}

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
          var password=await argon.hash(req.body.password);
          var mail='manon@hotmail.com'
          var role='Former'

        const newUser = await pool.query('INSERT INTO users (name,password,mail,role) VALUES ($1,$2,$3,$4)', [name,password,mail,role]);
  
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

router.post('/authentification', function(request, response) {

	// Capture the input fields
	let username = "Armand";
	let password = "pwd1";

  //Express Validator


    // Execute SQL query that'll select the account from the database based on the specified username and password
   const ans= pool.query('SELECT name, password FROM users WHERE name = ?', [username], async function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Create session into table session and save UUID
          if (await argon.verify(results.password, password)){
            const sessionId = crypto.randomUUID;
            pool.query('INSERT into session (name, sessionUUID) VALUES (?, ?)', [username, sessionId], async (error, results, fields) => {
              if (results) [
                response.status(200).cookie("sessionId", sessionId, {
                  secure: true,
                  httpOnly: true,
                  sameSite: 'none',
                  maxAge: 1*60*60*2*1000, //2 hours
                  signed: true
                }).send()
              ]
            })
          }
        } else {
            response.send('Incorrect Username and/or Password!');
        }			
		});

});



module.exports = router;
