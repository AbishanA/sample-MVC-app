const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.use(express.static("public"));
app.enigne(`handlebars`, exphbs());
app.set(`view engine`, `handlebars`);

app.get("/", (req, res)=>
{
    res.render("home", 
    {
        title: "Home Page"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>
{
    console.log(`Website is running`);
});