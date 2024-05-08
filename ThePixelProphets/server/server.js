const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // Importe o pacote cors

const app = express();

app.use(cors()); // Adicione o middleware cors

app.use(bodyParser.json());

app.post("/atualizar", (req, res) => {
  const newData = req.body;
  const jsonData = JSON.stringify(newData, null, 2);

  fs.writeFile("data.json", jsonData, (err) => {
    if (err) {
      console.error("Erro ao atualizar o arquivo JSON:", err);
      res.status(500).send("Erro ao atualizar o arquivo JSON");
      return;
    }
    console.log("Arquivo JSON atualizado com sucesso");
    res.send("Arquivo JSON atualizado com sucesso");
  });
});

app.get("/dados", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
      res.status(500).send("Erro ao ler o arquivo JSON");
      return;
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
