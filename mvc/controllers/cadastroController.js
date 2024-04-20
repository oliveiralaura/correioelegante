const CadastroDAO = require('../../DAO/cadastroDAO');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs').promises;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'views', 'public', 'images', 'upload'));
  },
  filename: function (req, file, cb) {
    const extensao = path.extname(file.originalname);

    const nomeArquivo = crypto.createHash('md5').update(file.originalname + Date.now().toString()).digest('hex') + extensao;
    cb(null, nomeArquivo);
  },
});

const cadastroDAO = new CadastroDAO();
const upload = multer({ storage: storage });

module.exports = (app) => {
  app.post('/cadastro', upload.single('foto'), async (req, res) => {

    try {
        const extensao = path.extname(req.file.filename);
        const nomeArquivo = crypto.createHash('md5').update(req.file.filename + Date.now().toString()).digest('hex') + extensao;
        
      const caminhoDestino = path.join(__dirname, '..', 'views', 'public', 'images', 'upload', nomeArquivo);

      await fs.rename(req.file.path, caminhoDestino);

      console.log('Upload bem-sucedido');

      const {
        txtid: id,
        nome: nome,
        email: email

      } = req.body;


      let status;

      if (!id) {
        status = await cadastroDAO.cadastrar( nome,email, nomeArquivo);
      } else {
        status = await cadastroDAO.atualizar(email,nome, nomeArquivo, id);
      
      }
      res.sendFile(path.resolve('./mvc/views/opcao.html'))
    } catch (error) {
      console.error(error);
      
      res.status(500).send('Erro ao realizar o upload. É necessário selecionar uma imagem');
    }
  });

  app.get("/cadastro", async (req, res) => {
    const cadastroDAO = new CadastroDAO()

   
    res.setHeader("Access-Control-Allow-Origin", "*")
    
    res.json(await cadastroDAO.consultarCadastro())
  });

  app.get("/pagina/cadastro", (req, res) => {
    res.sendFile(path.resolve('mvc/views/cadastro.html'))
  })

}
