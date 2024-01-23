const express = require("express");

const app = express();

const PORT = 5050;

// http://localhost:5050
app.get("/", (req,res) => {
  res.send("Salve");
});             

// http://localhost:5050/Marcos
app.get("/:name", (req, res) => {
  res.send(`Olá ${req.params.name}!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});