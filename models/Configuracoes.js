// models/Configuracao.js

import mongoose from "mongoose";

// Definindo o schema para Configuração
const configuracaoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true, // O nome da configuração é obrigatório
    unique: true, // Garantir que o nome da configuração seja único
    trim: true, // Remover espaços extras no nome
  },
  Usuario: {
    type: String,
    required: true, // O valor da configuração é obrigatório
    trim: true, // Remover espaços extras no valor
  },
  tipoConfiguracao: {
    type: String,
    required: false, // A descrição é opcional
    trim: true,
  },
  descricao: {
    type: String,
    required: false, // A descrição é opcional
    trim: true,
  },
  criadoEm: {
    type: Date,
    default: Date.now, // Data de criação da configuração (automática)
  },
  atualizadoEm: {
    type: Date,
    default: Date.now, // Data de atualização da configuração (automática)
  },
});

// Atualiza o campo 'atualizadoEm' sempre que o documento for alterado
configuracaoSchema.pre("save", function (next) {
  this.atualizadoEm = Date.now();
  next();
});

// Criando o modelo Configuracao
const Configuracao = mongoose.model("Configuracao", configuracaoSchema);

// Exportando o modelo
export default Configuracao;
