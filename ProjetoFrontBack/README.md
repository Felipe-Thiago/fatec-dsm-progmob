# Projeto "Server" (aula 5)
Instalar todas as dependências:
``` bash
    npm install
```
Iniciar aplicação:
```
    npm run start
    ou
    npm run nodemon
```
## Dependências utilizadas:
- [ExpressJS](https://expressjs.com/pt-br/) -> fornece métodos HTTP e middlewares:
    - express method override -> reconhece outros verbos como GET, PUT, POST, DELETE 
    - express body-parser 
    - express cors -> habilita o cors
    - express routing -> fornece rotas (caminhos) da aplicação
- [Mongoose](https://mongoosejs.com/) -> fornece modelos para aplicação do banco de dados
- [Nodemon](https://www.npmjs.com/package/nodemon) (se quiser) -> faz a atualização automática da tela

``` bash
    npm install express body-parser method-override mongoose nodemon
    npm install cors --save
```