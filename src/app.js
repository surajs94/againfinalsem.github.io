const { request, response } = require("express");

const hbs = require("hbs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/main");
const { handlebars } = require("hbs");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Pastry = require("./models/Pastry");
const Contact = require("./models/Contact");

app.use(bodyParser.urlencoded({
  extended:true
}))

// /static/css/style if we want to wright like this then added here static folder of express (instead of pulic write static)

app.use("/static", express.static("public"));
app.use("", routes);

// (template engine) 
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// app.set("views",  "views"+__dirname)===> gives the path of current directory
 
// response.render("index")


// db connections
mongoose.connect("mongodb://127.0.0.1:27017/website_tut", () => {
  console.log("db connected");
  
  // Detail.create({
  //   brandName: "FUN N FOOD",
  //   brandIconUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0B00mhpu2H4lPgNz2BXLUMhnZCAcuXSSvLCQJvw98A&s",
  //   links: [
  //    {
  //        label: "Home",
  //        url: "/",
  //      },
  //      {
  //        label: "About",
  //        url: "/about",
  //      },
  //      {
  //        label: "Product",
  //        url: "/product",
  //      },
  //  {
  //        label: "Gallery",
  //        url: "/gallery",
  //      },
  //      { 
  //        label: "Contact Us",
  //        url: "/contact-us",
  //      },
  //      {
  //        label: "Sign Up",
  //        url: "/sign up",
  //      },
  //    ]
  //  });

        // ============================================================
        // for slider code is here
        // Slider.create([
        //   {
        //     title:'FUN N FOOD SHOP',
        //     subTitle:'Dalicous Pastry, Bakery, Cookies, Cakes, Gifts, Kirana',
        //     imageUrl:'/static/images/g-1.jpg'
        //   },
        //   {  
        //     title:'What You For Waiting',
        //     subTitle:'Just Visit Once, Become Regular customer',
        //     imageUrl:'/static/images/g-2.jpg'
        //   },
        //   {
        //     title:'Can Be Ordered Here',
        //     subTitle:'All Payment Options Are Avaible',
        //     imageUrl:'/static/images/g-3.jpg'
        //   },
        // ])
        // ===========================================

        // for pastry code is here
      //   Pastry.create([{
      //     icon:'fab fa-accusoft',
      //     title:'Pastry Mood',
      //     description:'Change mood through these Pastry',
      //     linkText:'View',
      //     link:'https://www.aks.university.in'
      //   },
      //   {
      //     icon:'fab fa-affiliatetheme',
      //     title:'Chocolaty Mood',
      //     description:'Change mood through these Chocolates',
      //     linkText:'View',
      //     link:'https://www.aks.university.in'
      //   },
      //   {
      //     icon:'fab fa-affiliatetheme',
      //     title:'IceCream Mood',
      //     description:'Change mood through these Icecream',
      //     linkText:'View',
      //     link:'https://www.aks.university.in'
      //   },
      // ])

});

app.listen(process.env.PORT || 5556, () => {
  console.log("server started");
});
