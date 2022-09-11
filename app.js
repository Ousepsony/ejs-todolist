//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const date = require(`${__dirname}/date.js`);

const app = express();

let items = []
let workItems =[]
let day = date()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', "ejs");

app.get("/", function (req, res) {
        
    res.render("list", { EJSday: day,EJSitems:items, EJSlistTitle: "genericList"})
})

app.get("/work",function(req,res){
    res.render("list",{EJSday:day,EJSitems:workItems,EJSlistTitle:"workList"})
})

app.get("/about",function(req,res){
    res.render("about")
})

app.post("/",function(req,res){

    if(req.body.Reset == "genericList"){
        items =[]

        res.redirect("/")

    }else if(req.body.Reset == "workList"){
        workItems = [];

        res.redirect("/work")
    }

    let newItem = req.body.inputText;

    if(req.body.listType == "workList" && newItem !=""){
        workItems.push(newItem)

        res.redirect("/work")
    }else if (req.body.listType=="genericList" && newItem !=""){
        items.push(newItem);

        res.redirect("/")
    }

    
    console.log(items,workItems);
})


app.listen(3000, function () {
    console.log("App started on port 3000")
})