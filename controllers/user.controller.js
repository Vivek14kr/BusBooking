const express = require ('express');

const User = require ('../models/user.model');

const router = express.Router();



router.post('', async (req, res) =>{

    try {



        const user = await User.create(req.body)

        return res.status(201).send({
            "data":user,
            "message": "User Created Successfully",
            "status": 1
        })
    } catch (error) {
        return res.status(400).send({
            "message": error.message,
            "status": 0
        })
    }

})

router.get("", async(req,res)=>{
   try {
    const data = await User.find().lean().exec()

    return res.status(200).send(data)
    
   } catch (error) {
    return res.status(400).send({"message": error.message})
   }


})

router.get("/firstname/:firstname/lastname/:lastname", async(req, res)=>{
    try {
        const data = await User.find({
            "first_name" : req.params.firstname,
            "last_name" : req.params.lastname
        }).lean().exec()
        

        if (data){

            return res.status(200).send(data[0])
           
        }else {
            return res.status(400).send(false)
        }
    
       
        
       } catch (error) {
        return res.status(400).send({"message": error.message})
       }
    
})




module.exports = router;