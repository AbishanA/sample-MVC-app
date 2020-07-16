const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// MIDDLEWARE
const app = express();
app.use(express.static("public"));
app.engine(`handlebars`, exphbs());
app.set(`view engine`, `handlebars`);
app.use(bodyParser.urlencoded({ extended: false }));

// LOAD PRODUCT MODEL
const productModel = require("./models/product.js")

// ROUTES
app.get("/", (req, res)=>
{
    res.render("general/home", 
    {
        title: "Home Page"
    });
});

// CONTACT ROUTES
app.get("/contact", (req, res)=>
{
    res.render("general/contact", 
    {
        title: "Contact Us"
    });
});

app.post("/contact", (req, res)=>
{
    //res.render();
});

// LIST PRODUCTS ROUTES
app.get("/product/list", (req, res)=>
{
    res.render("products/productList", 
    {
        title: "Product List",
        products: productModel.getAllProducts()
    });
});

// ADD PRODUCTS ROUTES
app.get("/product/add", (req, res)=>
{
    res.render("products/productAdd", 
        {
            title: "Home Page"
        });
});

app.post("/product/add", (req, res)=>
{
    res.render("products/productAdd", 
        {
            title: "Home Page"
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>
{
    console.log(`Website is running`);
});