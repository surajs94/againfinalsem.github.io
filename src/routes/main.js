const { request, response } = require("express");
const express = require("express");
const { route } = require('express/lib/application');
const Contact = require("../models/Contact");
const routes = express.Router();

const Detail = require("../models/Detail");
const Pastry = require("../models/Pastry");
const Slider = require("../models/Slider");

routes.get("/", async (req, res) => {
    // res.send("this is message from route")
    const details = await Detail.findOne({"_id":"6389ec2cf7c77c67934b8e01"})
    // console.log(details);
    const slides = await Slider.find()
    // console.log(slides);
    const pastries = await Pastry.find();
    
    res.render("index",{
        Detail:details, 
        slides:slides,
        pastries:pastries 
    });
 
 


});




routes.get('/gallery', async (req, res) => {
    const details = await Detail.findOne({"_id":"638679589ee5a383491998f9"});
    res.render("gallery",{
        Detail:details,
    });
});


routes.post("/process-contact-form", async (request, response) =>{
    console.log("form is submitted");
    console.log(request.body);

    // save the data to db
    try{
        const data = await Contact.create(request.body)
        console.log(data);
        response.redirect("/")
        
    }catch(e)
    {
        console.log(e);
        response.redirect("/")
    }
})

module.exports=routes;
 