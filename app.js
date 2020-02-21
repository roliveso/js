//Variables & constants
'use strict';

const express=require('express');
const bodyParser=require('body-parser');
const data = require("./data.json");
const cors=require('cors');

let app=express();
app.use(cors());
let urlencodedParser=bodyParser.urlencoded({extended:false});

app.get("/produtos", function(req, res) {
    res.json(data);
  });

app.get("/produtos/:id", function(req, res) {
    const { id } = req.params;
    const produto = data.find(produtos => produtos.id == id);
  
    if (!produto) return res.status(204).json();
  
    res.json(produto);
});

let port=3000 || process.env.PORT;
app.listen(port);