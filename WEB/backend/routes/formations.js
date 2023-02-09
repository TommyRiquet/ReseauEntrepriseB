var express = require('express');
var router = express.Router();
const pool = require("../db/db");



//get all formations, return name and title
router.get("/", async(req,res) => {
    try {
        const allFormations = await pool.query("SELECT name,title FROM formations ORDER BY title;");
        res.json(allFormations.rows);
    } catch (err) {
        console.error(err.message);
     }
  });



  //get formations by id
  router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const formation = await pool.query('SELECT * FROM formations WHERE formation_id = $1;',
        [id]
        );
        res.json(formation.rows);
    } catch (err) {
        console.error(err.message);
     }
})


//livre --> post (titre, pseudo, texte)
router.post("/postFormations", (req,res) => {
    var name= req.body
    var title= req.body
    var content= req.body
  try {
      const newFormation = pool.query(
          "INSERT INTO formations (name, title, content) VALUES ($1,$2,$3)",
          [name,title,content], ()=>{
            res.send('well done');

          }
          );

  } catch (err) {
      console.error(err.message);
   }
});




module.exports = router;
