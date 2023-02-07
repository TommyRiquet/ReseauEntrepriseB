var express = require('express');
var router = express.Router();
const pool = require("../db/db");



//get all formations
router.get("/", async(req,res) => {
    try {
        const allFormations = await pool.query("SELECT * FROM formations;");
        res.json(allFormations.rows);
    } catch (err) {
        console.error(err.message);
     }
  });



  //get formations by id
  router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const formation = await pool.query('SELECT content FROM formations WHERE formation_id = $1;',
        [id]
        );
        res.json(formation.rows);
    } catch (err) {
        console.error(err.message);
     }
})




module.exports = router;
