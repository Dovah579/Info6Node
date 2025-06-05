import mongoose from "mongoose";

const JogoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  datadelancamento: { type: Date, required: true },
  desenvolvedora: { type: String, required: true },
  categoria: { type: String, required: true },
  preco: { type: Number, required: true },
});

export default mongoose.model("Jogo", JogoSchema);