var express = require('express');
var router = express.Router();
const pool = require("../db/db");
const argon2 = require("argon2");
const crypto = require("crypto");

const validation= require('../validation/registerAndLoginValidation.js')

//inscription --> post (pseudo, mail, mdp, statut<etu/form_att>) --> statut possible (etu/form_val/form_att/admin)
router.post("/register",validation.registerAndLoginValidation, async(req,res) => {
  try {
        var name = req.body
        var password= req.body
        var mail= req.body
        var role= req.body
      const newFormation = await pool.query(
          'INSERT INTO users (name,password,mail,role) VALUES ($1,$2,$3,$4)',
          [name,password,mail,role]
          );

          res.json(newFormation.rows);
  } catch (err) {
      console.error(err.message);
   }
});


router.get('/authentification', validation.registerAndLoginValidation,function(request, response) {

	// Capture the input fields
	let username = "Armand";
	let password = "pwd1";

  //Express Validator
    // Execute SQL query that'll select the account from the database based on the specified username and password
   const ans= pool.query('SELECT name, password,role FROM users WHERE name = ?', [username], async function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error){console.log(error);}
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

//Check if session into table session and return the pseudo if there is a session
const whoIsConnected = async (cookie) => {
  if (Object.keys(cookie).length === 0){
    return false
  }
  const result = await pool.query("SELECT name FROM session WHERE sessionUUID = $1", [cookie.sessionId])
  if (result.rows.pseudo === null){
    return false
  }

  return result.rows.pseudo 
}

//Get tous les users sauf l'admin
router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users WHERE role != 'Admin';");
    res.json(allUsers.rows);
  } catch (err) {
      console.error(err.message);
   }
})


//Get users with "waiting" role
router.get("/formerValidation", async (req, res) => {
  try {
      const users = await pool.query("SELECT user_id, name, mail FROM users WHERE role = 'Waiting' ORDER BY name;");
      res.json(users.rows);
  } catch (err) {
      console.error(err.message);
   }
})


/*router.get('/authentification',validation.registerAndLoginValidation, function(request, response) {
  // Capture the input fields
  let username = "Armand";
  let password = "psw1";

  // Execute SQL query that'll select the account from the database based on the specified username and password
 const ans= pool.query('SELECT * FROM users WHERE name = $1 AND password = $2', [username, password], function(error, results, fields) {
      // If there is an issue with the query, output the error
      if (error) {console.log(error.message)};
      // If the account exists
      if (response.rows.length > 0) {
          // Redirect to home page
          response.send('gg');
          response.json(response.rows);
      } else {
          response.send('Incorrect Username and/or Password!');
      }
      response.end();
      });

});*/
      

//inscription --> post (pseudo, mail, mdp, statut<etu/form_att>) --> statut possible (etu/form_val/form_att/admin)
router.post("/register", async(req,res) => {
    try {
          var name = req.body.name
          var password= await argon2.hash(req.body.password)
          var mail= req.body.mail
          var role= req.body.role

          const newFormation = await pool.query(
            'INSERT INTO users (name,password,mail,role) VALUES ($1,$2,$3,$4)',
            [name,password,mail,role]
            );
            console.log(newFormation)
            if(newFormation)
              res.send([{status: "success", message: "Account created"}]);
            else
              res.send([{status: "error", message: "Account not created"}]);
    } catch (err) {
        console.error(err.message);
     }
  });


  //update le role en former
  router.put("/update", async (req, res) => {
    try {
        const id = req.body;
        const updateUser = await pool.query("UPDATE users SET role = 'Former' WHERE user_id = $1 AND role != 'Admin'",
        [id]
        );
        res.json("Users was updated");
    } catch (err) {
        console.error(err.message);
     }
})


  //update le role en student ( waiting/former devient student)
  router.put("/update", async (req, res) => {
    try {
        const id = req.body;
        const updateUser = await pool.query("UPDATE users SET role = 'Student' WHERE user_id = $1 AND role != 'Admin'",
        [id]
        );
        res.json("Users was updated");
    } catch (err) {
        console.error(err.message);
     }
})

router.post('/authentification', async function(request, response) {


  //Express Validator

    // Execute SQL query that'll select the account from the database based on the specified username and password
   pool.query('SELECT name, password FROM users WHERE name = $1', [request.body.pseudo], async function(error, results, fields) {
      // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results) {
          // Create session into table session and save UUID
          if (await argon2.verify(results.rows[0].password, request.body.password)){
            const sessionId = crypto.randomUUID();
            pool.query('INSERT INTO sessions (name, sessionUUID) VALUES ($1, $2)', [request.body.pseudo, sessionId], async (error, results, fields) => {
              if (results) {
                response.status(200).cookie("sessionId", sessionId, {
                  secure: true,
                  httpOnly: true,
                  SameSite: 'none',
                  maxAge: 1*60*60*3*1000, //3 hours GMT+1
                  signed: true
                }).send([{status: "success", message: "You are connected"}, {pseudo: request.body.pseudo}])
              }
              else {
                response.status(500).send([{status: "error", message: "Internal server error"}])
              }
            })
          }else {
            response.send('Incorrect Username and/or Password!');
          }

        } else {
            response.send('Incorrect Username and/or Password!');
        }			
		});

});



module.exports = router;
