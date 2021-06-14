const express = require("express")
//require cor
const cors = require("cors")

//init
const app = express();
//middleware
app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cors())

 //object mapper db
const { Sequelize, sequelize } = require('./models/index');
const {  addFooditems, getAllFooditems, updateFooditems, deleteFooditems } = require("./controllers");

//test connection


//route create customers
app.post("/addfooditem", addFooditems)
//get all customers
app.get("/allfooditems", getAllFooditems);
//update
app.patch("/fooditemupdate/:id", updateFooditems)

//delete
app.delete("/fooditemdelete/:id", deleteFooditems)

 //port for listening
 const port = 5000;
 app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, async() => {
    await sequelize.sync()
    console.log('running properly')
    
  })
 

