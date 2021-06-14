

//save customer

const {FoodItems} = require("../models/index")

//const Customer = require("../models")


const addFooditems = async(req, res)=>{
    try{
        console.log(req.body)
        const {price, name, qty} =  req.body
      const user = await FoodItems.create({price, name, qty})
      res.status(200).send('created success')
    }
    catch(error){
        console.log(`The is error is ${error.message}`)
    }
}

//get all Fooditems
const getAllFooditems = async (req, res)=>{
    try{
        const findUsers = await FoodItems.findAll();
        return res.status(200).json(findUsers)

    }
    catch(error){
        console.log(`Error:${error.message}`)
    }
}

//update 
const updateFooditems = async (req, res)=>{
    try{
        const {id} = req.params
        const {name, price,qty} = req.body;
        const update = await FoodItems.findOne({where:{id}});
        name!==null?update.name=name:null;
        price!==null?update.price=price:null;
        qty!==null?update.qty=qty:null;
        await update.save();
        return res.send("updated")

      //  console.log(id)

    }
    catch(error){
        console.log(`Error:${error.message}`)

    }
}

//delete Fooditems
const deleteFooditems = async(req, res)=>{
    try{
        const {id} = req.params
        const deleteItem = await FoodItems.findOne({where:{id}});
        //delete
       await deleteItem.destroy();
        res.send("Deleted successfully");
    }
    catch(error){
        console.log(`Error:${error.message}`)

    }
}

module.exports = {
    addFooditems,
    getAllFooditems,
    updateFooditems,
    deleteFooditems
}