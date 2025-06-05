// config/conexao.js
import mongoose from "mongoose";

const url =
  "mongodb+srv://aluno1:aluno1@cluster0.9fgzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB", err);
  }
}

connect(); // Estabelece a conexão

export default mongoose; // Exporta o mongoose para uso nos modelos
