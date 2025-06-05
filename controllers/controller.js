import Chave from "../models/Chave.js";
import Jogo from "../models/Jogo.js";
import Configuracoes from "../models/Configuracoes.js";
import Usuario from "../models/Usuario.js";

// ---------------------- ADMIN HOME ----------------------
export async function home(req, res) {
  try {
    const totalusuarios = await Usuario.countDocuments();
    const totaljogos = await Jogo.countDocuments();
    res.render("admin/index", { totalusuarios, totaljogos });
  } catch (err) {
    console.error("Erro ao carregar a home:", err);
    res.status(500).send("Erro ao carregar a home");
  }
}

// ---------------------- USUÁRIO ----------------------
export async function abreaddusuario(req, res) {
  res.render("admin/usuario/addusuario");
}

export async function addusuario(req, res) {
  try {
    await Usuario.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
    });
    res.redirect("/admin/usuario/lstusuario");
  } catch (err) {
    console.error("Erro ao adicionar usuário:", err);
    res.status(500).send("Erro ao adicionar usuário");
  }
}

export async function filtrarusuario(req, res) {
  res.render("admin/usuario/lstusuario");
}

export async function listarusuario(req, res) {
  try {
    const resultado = await Usuario.find({});
    res.render("admin/usuario/lstusuario", { Usuarios: resultado });
  } catch (err) {
    console.error("Erro ao listar usuários:", err);
    res.status(500).send("Erro ao listar usuários");
  }
}

export async function contarUsuarios(req, res) {
  try {
    const contagem = await Usuario.countDocuments();
    res.json({ total: contagem });
  } catch (err) {
    console.error("Erro ao contar usuários:", err);
    res.status(500).send("Erro interno no servidor");
  }
}

export async function deletausuario(req, res) {
  try {
    const { id } = req.params;
    await Usuario.findByIdAndDelete(id);
    res.redirect("/admin/usuario/lstusuario");
  } catch (err) {
    console.error("Erro ao deletar usuário:", err);
    res.status(500).send("Erro ao deletar usuário");
  }
}

export async function abreedtusuario(req, res) {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.render("admin/usuario/edtusuario", { usuario });
  } catch (err) {
    console.error("Erro ao abrir editar usuário:", err);
    res.status(500).send("Erro ao abrir editar usuário");
  }
}

export async function edtusuario(req, res) {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    await Usuario.findByIdAndUpdate(id, { nome, email, senha });
    res.redirect("/admin/usuario/lstusuario");
  } catch (err) {
    console.error("Erro ao editar usuário:", err);
    res.status(500).send("Erro ao editar usuário");
  }
}

// ---------------------- JOGOS ----------------------
export async function abreaddjogo(req, res) {
  res.render("admin/Jogos/addjogo");
}

export async function addjogo(req, res) {
  try {
    await Jogo.create({
      nome: req.body.nome,
      genero: req.body.genero,
      datadelancamento: req.body.datadelancamento,
      desenvolvedora: req.body.desenvolvedora,
      categoria: req.body.categoria,
      preco: req.body.preco,
    });
    res.redirect("/admin/Jogos/lstjogo");
  } catch (err) {
    console.error("Erro ao adicionar jogo:", err);
    res.status(500).send("Erro ao adicionar jogo");
  }
}

export async function abreedtjogo(req, res) {
  try {
    const jogo = await Jogo.findById(req.params.id);
    res.render("admin/Jogos/edtjogo", { jogo });
  } catch (err) {
    console.error("Erro ao abrir editar jogo:", err);
    res.status(500).send("Erro ao abrir editar jogo");
  }
}

export async function edtjogo(req, res) {
  try {
    const { id } = req.params;
    const { nome, genero, datadelancamento, desenvolvedora, categoria, preco } =
      req.body;

    await Jogo.findByIdAndUpdate(id, {
      nome,
      genero,
      datadelancamento,
      desenvolvedora,
      categoria,
      preco,
    });
    res.redirect("/admin/Jogos/lstjogo");
  } catch (err) {
    console.error("Erro ao editar jogo:", err);
    res.status(500).send("Erro ao editar jogo");
  }
}

export async function listarjogo(req, res) {
  try {
    const resultado = await Jogo.find({});
    res.render("admin/Jogos/lstjogo", { Jogos: resultado }); // <-- aqui está passando "Jogos"
  } catch (err) {
    console.error("Erro ao listar jogos:", err);
    res.status(500).send("Erro ao listar jogos");
  }
}

export async function filtrarjogo(req, res) {
  res.redirect("/admin/Jogos/lstjogo");
}

export async function deletajogo(req, res) {
  try {
    const { id } = req.params;
    await Jogo.findByIdAndDelete(id);
    res.redirect("/admin/Jogos/lstjogo");
  } catch (err) {
    console.error("Erro ao deletar jogo:", err);
    res.status(500).send("Erro ao deletar jogo");
  }
}

// ---------------------- CHAVES ----------------------
export async function abreaddchave(req, res) {
  try {
    const jogos = await Jogo.find({});
    res.render("admin/chave/addchave", { jogos });
  } catch (err) {
    console.error("Erro ao abrir formulário de chave:", err);
    res.status(500).send("Erro ao carregar formulário de chave");
  }
}

export async function addchave(req, res) {
  try {
    const { chave, jogoId } = req.body;

    const chaveCriada = await Chave.create({ chave });
    await Jogo.findByIdAndUpdate(jogoId, { chave: chaveCriada._id });

    res.redirect("/admin/Jogos/lstjogo");
  } catch (err) {
    console.error("Erro ao adicionar chave:", err);
    res.status(500).send("Erro ao adicionar chave");
  }
}

export async function abreedtchave(req, res) {
  res.render("admin/chave/edtchave");
}

export async function edtchave(req, res) {
  res.redirect("/admin/chave/edtchave");
}

export async function listarchave(req, res) {
  try {
    const chaves = await Chave.find({});
    res.render("admin/chave/lstchave", { Chaves: chaves });
  } catch (err) {
    console.error("Erro ao listar chaves:", err);
    res.status(500).send("Erro ao listar chaves");
  }
}

export async function filtrarchave(req, res) {
  res.redirect("/admin/chave/lstchave");
}

export async function deletachave(req, res) {
  try {
    const { id } = req.params;
    await Chave.findByIdAndDelete(id);
    res.redirect("/admin/chave/lstchave");
  } catch (err) {
    console.error("Erro ao deletar chave:", err);
    res.status(500).send("Erro ao deletar chave");
  }
}

// ---------------------- CONFIGURAÇÕES ----------------------
export async function abreaddconfig(req, res) {
  res.render("admin/configuracoes/addconfig");
}

export async function addconfig(req, res) {
  try {
    await Configuracoes.create({
      nome: req.body.nome,
      valor: req.body.valor,
      descricao: req.body.descricao,
    });

    res.redirect("/admin/configuracoes");
  } catch (err) {
    console.error("Erro ao adicionar configuração:", err);
    res.status(500).send("Erro ao adicionar configuração");
  }
}

export async function listarconfig(req, res) {
  try {
    const configuracoes = await Configuracoes.find({});
    res.render("admin/configuracoes/lstconfig", {
      Configuracoes: configuracoes,
    });
  } catch (err) {
    console.error("Erro ao listar configurações:", err);
    res.status(500).send("Erro ao listar configurações");
  }
}

export async function deletaconfig(req, res) {
  try {
    const { id } = req.params;
    await Configuracoes.findByIdAndDelete(id);
    res.redirect("/admin/configuracoes");
  } catch (err) {
    console.error("Erro ao deletar configuração:", err);
    res.status(500).send("Erro ao deletar configuração");
  }
}
