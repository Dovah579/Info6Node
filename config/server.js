import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Resolver __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Se sua pasta img está dentro de "public/img", o caminho ficará disponível como /img/logo.png

// Rotas, etc...

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
