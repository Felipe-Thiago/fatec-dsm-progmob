import * as SQLite from 'expo-sqlite';

async function Banco(){

    try{
        const db = await SQLite.openDatabaseAsync('fatecVotorantim')
        console.log('Banco de dados aberto/criado')
        return db;
    } catch (error) {
        console.error('Erro ao abrir/criar o banco de dados:', error);
    }
}

//---------------------------------------------

async function createTable(db: SQLite.SQLiteDatabase){
    try{
        await db.execAsync(
            `
                PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS USUARIO(
                    ID_US INTEGER PRIMARY KEY AUTOINCREMENT,
                    NOME_US VARCHAR(100),
                    EMAIL_US VARCHAR(100)
                );
            `
        );
        console.log("Tabela Criada");
    } catch(error){
        console.error('Erro ao criar tabela: ', error);
    }
}

//-----------------------------------------------

async function insertUser(db: SQLite.SQLiteDatabase, nome: string, email: string) {
    try{
        await db.runAsync( //assíncrono pra executar apenas uma execução sql
            `
                INSERT INTO USUARIO(NOME_US, EMAIL_US) VALUES(?, ?)
            `, [nome, email]
        );
        console.log("Usuário criado com sucesso")
    } catch(error) {
        console.error("Erro ao inserir usuário: ", error);
    }
}

//------------------------------------------

async function selectUser(db: SQLite.SQLiteDatabase) {
    try{
        const resultado = await db.getAllAsync("SELECT * FROM USUARIO");
        console.log("USUÁRIOS CADASTRADOS:");
        return resultado;
    } catch(error){
        console.error("Erro ao exibir usuário: ", error)
    }
}

//-------------------------------------------

export { Banco, createTable, insertUser, selectUser };