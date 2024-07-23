const fs = require ('fs')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/login", (req,res)=>{
  const login = req.body.login
  const senha = req.body.senha
  const banco = JSON.parse(fs.readFileSync('banco.json'))
  let usuariologou = false
  const usuarioEncontrado = banco.find((item) =>item.login.localeCompare(login)==0)
  console.log(usuarioEncontrado)

  if (usuariologou)
    res.redirect('/dashboard')
  else
  res.render("index",{erroDeLogin:true})
});

router.get("/cadastro", (req,res)=>{
res.render("cadastro")
})


router.post("/cadastro", (res,req)=>{
const login = req.body.login
const senha = req.body.senha
const email = req.body.email
  
  const banco = fs.readFileSync('banco.json')
  console.log(banco)
  const legivel = JSON.parse(banco)
  console.log(legivel)
  

})





module.exports = router;
