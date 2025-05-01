let express = require("express");
let cors = require('cors');
let mongoose = require('mongoose');
let methodOverride = require("method-override");
const bodyParser = require("body-parser");
const port = 3000;

// criar objeto
let app = express();

app.use(cors());

// permite que use o verbo HTTP
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//--------------- MONGOOSE ---------------
let url = "mongodb://localhost:27017/FatecVotorantim";

mongoose.connect(url)
.then(
    () => {console.log('Conectado ao mongodb')}
).catch(
    (e)=>{console.log(e)}
)

//criar uma estrutura no documento e coleção
let User = mongoose.model("Usuario", new mongoose.Schema({name: String, surname: String, gender: String}))


// pasta raiz/rota padrão (get find())
app.get("/", async (req, res) => {
    const users = await User.find({})
    res.json(users);
    // é assincrono para esperar a resposta do banco de dados para depois trazer
});

app.post("/add", async (req, res) => {
    // pegar os dados
    let vnome = req.body.name;
    let vsobrenome = req.body.surname;
    let vsexo = req.body.gender;
    
    let item = await new User({name: vnome, surname: vsobrenome, gender: vsexo});
    // comando do mongodb
    item.save();
    res.json({status: "adicionado"})
})

//PUT
app.put('/update/:id', async(req, res) =>{
    //pegando o parametro via url
    const id = req.params.id;
    //dado do header
    const dados = req.body;
    //objeto model
    const u = await User.findByIdAndUpdate(id, dados);
    if(u){
        res.send({status: 'alterado'})
    } else{
        res.send({status: 'erro'})
    }
})

//delete
app.delete("/delete/:id", async(req,res)=>{
    let id = req.params.id;
    let i = await User.findByIdAndDelete(id);
    if(i){
        res.send({status: 'deletado'})
    } else{
        res.send({status: 'erro'})
    }
})

//criar o servidor
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})