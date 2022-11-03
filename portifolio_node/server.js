import  express  from "express";
import bodyParser from 'body-parser'
import con from "./conection.js";
import cors from 'cors';
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express';




const app = express()
app.use(cors())
const options = {
  definition: {
    info: {
      title: 'API Node JS', // (obrigatório)
      version: '1.0.0', // (obrigatório)
    },
  },
  // Path da aplicação principal (onde estão as rotas documentadas)
  apis: ['server.js'],
};
// Adicionamos o gerador de documentação em uma const
const swaggerSpec = swaggerJSDoc(options);

// Middleware para arquivos estáticos (CSS, IMG, JS, etc)
// passamos por nome do diretório que será público
app.use(express.static('public') )

// Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// CURSOS Página Home XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


/**
 * @swagger
 *
 * /cursos:
 *   get:
 *     description: Lista todos os cursos realizados
 *     produces:
 *       - text/html
 *     responses:
 *       200:
 *         description: Exibe todos cursos em um vetor
 */
app.get('/cursos', (req,res)=>{
  con.query('SELECT * FROM CURSOS', (err, result)=>{
    res.send(result)
  })
})




/**
 * @swagger
 *
 * /cursos:
 *   post:
 *     description: Insere curso
 *     produces:
 *       - text/json
  *     parameters:
 *       - nome: 
 *         description: nome do curso
 *         required: true
 *         type: string
 *       - descricao: 
 *         description: descricao do curso
 *         required: true
 *         type: string
 *       - entidade: 
 *         description: entidade realizadora do curso
 *         required: true
 *         type: string
 *       - conclusao: 
 *         description: mes e ano da conclusao do curso
 *         required: true
 *         type: string
 *       - imagem:
 *         description: logotipo do curso
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Insere um curso no banco
 */
app.post('/cursos',(req, res)=>{
  console.log(req.body);
  const {nome, descricao, entidade, conclusao, imagem} = req.body
  if (nome != undefined && descricao != undefined && entidade != undefined && conclusao != undefined && imagem != undefined){ 
    con.query(`INSERT CURSOS (nome, descricao, entidade, conclusao, imagem) VALUES ('${nome}', '${descricao}', '${entidade}', '${conclusao}', '${imagem}');`, (err, result)=>{
      res.send(result)
    })
  } else {
    res.send('Não foi possivel cadastrar!')
  }
})

/**
 * @swagger
 *
 * /cursos/idCurso:
 *   put:
 *     description: Altera os atributos existentes
 *     produces:
 *       - text/json
  *     parameters:
 *       - name: nome
 *         description: nome do curso
 *         required: true
 *         type: string
 *       - name: descricao
 *         description: descricao do curso
 *         required: true
 *         type: string
 *       - name: entidade
 *         description: entidade realizadora do curso
 *         required: true
 *         type: string
 *       - name: conclusao
 *         description: mes e ano da conclusao do curso
 *         required: true
 *         type: string
 *       - name: imagem
 *         description: logotipo do curso
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Alterado curso
 */
app.put('/cursos/:idCurso', (req,res)=>{
  console.log(req.body);
  console.log(req.params);
  const {nome, descricao, entidade, conclusao, imagem} = req.body
  const {idCurso} = req.params
  if (nome != undefined && descricao != undefined && entidade != undefined && conclusao != undefined && imagem != undefined){ 
    con.query(`UPDATE CURSOS 
    SET nome= '${nome}', descricao= '${descricao}', entidade= '${entidade}', conclusao= '${conclusao}', imagem= '${imagem}'
    WHERE id_curso = ${idCurso};`, (err, result)=>{
      res.send(result)
    })
  } else {
    res.send('Não foi possivel atualizar!')
  }
})

app.delete('/cursos/:idCurso', (req, res)=>{
  console.log(req.params);
  const {idCurso} = req.params

  con.query(`DELETE FROM CURSOS
  WHERE id_curso = ${idCurso};`, (err, result)=>{
    
    res.send(result)
  })
})
    
// INTERESSES Página Formulario XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/**
 * @swagger
 *
 * /cursos:
 *   get:
 *     description: Lista todos os interesses adicionados
 *     produces:
 *       - text/html
 *     responses:
 *       200:
 *         description: Exibe todos Interesses em um vetor
 */
 app.get('/interesses', (req,res)=>{
  con.query('SELECT * FROM INTERESSES  order by id_interesse desc', (err, result)=>{
    res.send(result)
  })
})


/**
 * @swagger
 *
 * /interesses:
 *   post:
 *     description: Insere curso
 *     produces:
 *       - text/json
  *     parameters:
 *       - name: nick_name
 *         description: apelido do usuario
 *         required: true
 *         type: string
 *       - name: nome
 *         description: nome do interesse
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Insere um interesse no banco
 */
app.post('/interesses',(req, res)=>{
  console.log(req.body);
  const {nick_name, nome} = req.body

  if (nick_name != undefined && nome != undefined){ 
    con.query(`INSERT INTERESSES (nick_name, nome) VALUES ('${nick_name}', '${nome}');`, (err, result)=>{
      res.send(result)
    })
  } else {
    res.send('Não foi possivel cadastrar!')
  }
})


/**
 * @swagger
 *
 * /interesses/idInteresse:
 *   put:
 *     description: Altera os atributos existentes
 *     produces:
 *       - text/json
  *     parameters:
 *       - name: nick_name
 *         description: apelido do usuario
 *         required: true
 *         type: string
 *       - name: nome
 *         description: nome do interesse
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Alterado interesse
 */
app.put('/interesses/:idInteresse', (req,res)=>{
  console.log(req.body);
  console.log(req.params);
  const {nick_name, nome} = req.body
  const {idInteresse} = req.params
  if (nick_name != undefined && nome != undefined){ 
    con.query(`UPDATE INTERESSES 
    SET nick_name= '${nick_name}', nome= '${nome}'
    WHERE id_interesse = ${idInteresse};`, (err, result)=>{
      res.send(result)
    })
  } else {
    res.send('Não foi possivel atualizar!')
  }
})

app.delete('/interesses/:idInteresse', (req, res)=>{
  console.log(req.params);
  const {idInteresse} = req.params

  con.query(`DELETE FROM INTERESSES
  WHERE id_interesse = ${idInteresse};`, (err, result)=>{
    
    res.send(result)
  })
})

// ESTATISTICAS Página Formulario XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

app.get('/estatisticas', (req,res)=>{
  con.query('SELECT count(nome) as soma FROM INTERESSES group by nome order by nome;', (err, result)=>{
    res.send(result)
  })
})

app.post('/estatisticas',(req, res)=>{
  console.log(req.body);
  const {nome} = req.body
  const date = new Date()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()+1
  const currentDay = date.getDate()
  const acesso = `${currentYear}-${currentMonth}-${currentDay}`
  if (nome != undefined){ 
    con.query(`INSERT ESTATISTICAS (nome, acesso) VALUES('${nome}','${acesso}');`, (err, result)=>{
      res.send(result)
    })
  } else {
    res.send('Não foi possivel cadastrar!')
  }
})

app.put('/estatisticas/:idEstatistica', (req,res)=>{
  console.log(req.body);
  console.log(req.params);
  const {nome} = req.body
  const date = new Date()
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth()+1
  const currentDay = date.getDate()
  const acesso = `${currentYear}-${currentMonth}-${currentDay}`  
  const {idEstatistica} = req.params
  if (nome != undefined){ 
    con.query(`UPDATE ESTATISTICAS 
    SET nome= '${nome}', acesso= '${acesso}'
    WHERE id_estatistica = ${idEstatistica};`, (err, result)=>{
      res.send(result)
    })
  } else {
    res.send('Não foi possivel atualizar!')
  }
})

// CONTATOS Página Contato XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

app.post('/contatos',(req, res)=>{
  console.log(req.body);
  const {nome, email, descricao} = req.body
  if (nome != undefined && email != undefined && descricao != undefined) {
    con.query(`INSERT CONTATOS (nome, email, descricao) VALUES('${nome}','${email}','${descricao}')`, (err, result)=>{
      res.send(result)
    })
  } else {
    res.send('Não foi possivel enviar a mensagem!')
  }
})

app.listen(3030, ()=> console.log('Running Server'))