const express = require ('express');

const Seat = require ('../models/seats.model');
const User = require("../models/user.model")

const router = express.Router();


router.patch ('/bookseat/:id/:userid', async (req, res) => {
    try {
       console.log("hello")
        const seat = await Seat.findById(req.params.id)
       const user = await User.findById(req.params.userid)
      
       var updatedSeat
       if (user && seat && seat.status == false){
          updatedSeat = await Seat.findByIdAndUpdate(req.params.id, {
            seatNumber: seat.seatNumber,
            status: !seat.status,
            user: user
          }, {
            new:true
          }).populate("user").lean ().exec ();


       }
  
      return res.status (201).send (updatedSeat);
    } catch (e) {
      return res.status (500).json ({message: e.message, status: 'Failed'});
    }
  });

  router.patch ('/cancelseat/:id/:userid', async (req, res) => {
    try {
       console.log("hello")
        const seat = await Seat.findById(req.params.id)
       const user = await User.findById(req.params.userid)
      
       var updatedSeat
       if (user && seat && seat.status == true){
          updatedSeat = await Seat.findByIdAndUpdate(req.params.id, {
            seatNumber: seat.seatNumber,
            status: !seat.status,
            user: null
          }, {
            new:true
          }).lean ().exec ();


       }
  
      return res.status (201).send ({"data" :updatedSeat,"messaged":"Seat Cancelled"});
    } catch (e) {
      return res.status (500).json ({message: e.message, status: 'Failed'});
    }
  });  
router.post('', async (req, res) =>{

    try {

        const seatnum = await Seat.find().lean().exec();


        const seat = await Seat.create({
           seatNumber : seatnum.length + 1
        })

        return res.status(201).send({
            "data":seat,
            "message": "Seat Created Successfully",
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
    const data = await Seat.find().lean().exec()

    return res.status(200).send(data)
    
   } catch (error) {
    return res.status(400).send({"message": error.message})
   }


})

module.exports = router;