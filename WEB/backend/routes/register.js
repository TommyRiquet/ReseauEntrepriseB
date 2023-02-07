// var express = require('express');
// var router = express.Router();

// //Fonction register
// router.post("/user", async(req,res) => {
//     try {    
//         const { name } = req.body;
//         const newUser = await pool.query(
//             "INSERT INTO users (name) VALUES($1) RETURNING *",
//             [name]
//             );

//             res.json(newUser.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//      }
// });

// module.exports = router