import conexao from "../config/conexao.js";

const Chave = conexao.Schema({
  chave: {
    type: String,
    required: true,
  },
});

export default conexao.model("Chave", Chave);
