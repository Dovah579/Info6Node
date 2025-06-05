const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

// Pasta onde os arquivos serão salvos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "..", "public", "img"));
    // pasta pública onde 'logo.png' será salva: public/img/logo.png
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "logo") {
      cb(null, "logo.png"); // força que a imagem enviada seja salva como 'logo.png'
    } else {
      const uniqueSuffix = crypto.randomBytes(6).toString("hex");
      const ext = path.extname(file.originalname);
      cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    }
  },
});

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Tipo de arquivo não suportado"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB
  },
});

module.exports = upload;
