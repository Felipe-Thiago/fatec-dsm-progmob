let express = require("express");
let bodyParse = require("body-parser");
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
let User = mongoose.model("Usuario", new mongoose.Schema({name: String}))


// pasta raiz/rota padrão
app.get("/", (req, res) => {
    res.send({status: 'ok'});
});

app.post("/add", async (req, res) => {
    // pegar os dados
    let vnome = req.body.name;
    
    let item = await new User({name: vnome});
    // comando do mongodb
    item.save();
    res.send({status: "adicionado"})
})

//criar o servidor
app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})