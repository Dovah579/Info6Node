import express from "express";
const router = express.Router();

import {
  home,

  // Usuários
  abreaddusuario,
  addusuario,
  listarusuario,
  filtrarusuario,
  deletausuario,
  abreedtusuario,
  edtusuario,

  // Jogos
  abreaddjogo,
  addjogo,
  listarjogo,
  filtrarjogo,
  deletajogo,
  abreedtjogo,
  edtjogo,

  // Chaves
  abreaddchave,
  addchave,
  listarchave,
  filtrarchave,
  deletachave,
  abreedtchave,
  edtchave,

  // Configurações
  abreaddconfig,
  addconfig,
  listarconfig,
  deletaconfig,
} from "../controllers/controller.js";

// ================== ROTA PRINCIPAL ==================
router.get("/", home);

// ================== ROTAS USUÁRIO ==================
router.get("/admin/usuario/addusuario", abreaddusuario);
router.post("/admin/usuario/addusuario", addusuario);

router.get("/admin/usuario/lstusuario", listarusuario);
router.post("/admin/usuario/lstusuario", filtrarusuario);

router.post("/admin/usuario/delusuario/:id", deletausuario);

router.get("/admin/usuario/edtusuario/:id", abreedtusuario);
router.post("/admin/usuario/edtusuario/:id", edtusuario);

// ================== ROTAS JOGOS ==================
router.get("/admin/jogos/addjogo", abreaddjogo);
router.post("/admin/jogos/addjogo", addjogo);

router.get("/admin/jogos/lstjogo", listarjogo);
router.post("/admin/jogos/lstjogo", filtrarjogo);

router.post("/admin/jogos/deljogo/:id", deletajogo);

router.get("/admin/jogos/edtjogo/:id", abreedtjogo);
router.post("/admin/jogos/edtjogo/:id", edtjogo);

// ================== ROTAS CHAVES ==================
router.get("/admin/chave/addchave", abreaddchave);
router.post("/admin/chave/addchave", addchave);

router.get("/admin/chave/lstchave", listarchave);
router.post("/admin/chave/lstchave", filtrarchave);

router.post("/admin/chave/delchave/:id", deletachave);

router.get("/admin/chave/edtchave/:id", abreedtchave);
router.post("/admin/chave/edtchave/:id", edtchave);

// ================== ROTAS CONFIGURAÇÕES ==================
router.get("/admin/configuracoes", listarconfig);
router.get("/admin/configuracoes/addconfig", abreaddconfig);
router.post("/admin/configuracoes/addconfig", addconfig);

router.post("/admin/configuracoes/delconfig/:id", deletaconfig);

// ================== EXPORTANDO ==================
export default router;
