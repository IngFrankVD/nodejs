const express = require("express");
const bodyParse = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3977;

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.get("/", (req,res)=>{
  res.status(200).send({msg: "Hola siuuu"});
});

app.get("/books", (req,res)=>{
  res.status(200).send({msg: "pagina books"});
});

app.post("/books", (req,res)=>{
  const {username} = req.body;
  res.status(200).send({msg: `Hola, ${username}`});
});

app.listen(PORT, () =>{
  console.log(`Tu servidor esta listo en el puerto ${PORT}`);
});