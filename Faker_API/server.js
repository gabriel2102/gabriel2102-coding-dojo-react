const express = require("express");
const Empresa = require("./classes/Empresa");
const app = express();
const port = 8080;
const Usuario = require("./classes/Usuario");

app.get("/api/users/new",(req, res) => {
    res.json(new Usuario());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Empresa())
})

app.get("/api/user/company/", (req, res) => {
    
    res.json({user: new Usuario(), company: new Empresa()});
})

app.listen(port, () => console.log(`Escuchando puerto: ${port}`));