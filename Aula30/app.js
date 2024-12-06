const db = require('./config/database');
const Filme = require('./models/filme.model');

async function testarConexao(){
    try {
        await db.authenticate();
        console.log('Conexão com o banco estabelecida com sucesso.');

    } catch (e){
        console.log(`Erro ao conectar: ${e.message}`);
    }
}

async function sincronizarDb(){
    try {
        await db.sync();
        console.log('Sincronização realizada com sucesso.');

    } catch (e){
        console.log(`Erro ao sincronizar: ${e.message}`);
    }
}

async function operacoesCRUDInserir(){
    const filme = await Filme.create({
        titulo: 'Filme 2',
        sinopse: 'Sinopse do filme 2',
    });

    imprimirFilme(filme);
}

function imprimirFilme(filme){
    console.log(`ID: ${filme.id}`);
    console.log(`Título: ${filme.titulo}`);
    console.log(`Sinopse: ${filme.sinopse}`);
    console.log(`Data de criação: ${filme.createdAt}`);
    console.log(`Data de atualização: ${filme.updatedAt}`);
    console.log(' ');
}

async function retornarTodosFilmes(){
    const filmes = await Filme.findAll();

    filmes.forEach( filme => { imprimirFilme(filme)})
}

async function retornarFilmePorId(id){
    const filme = await Filme.findByPk(id);

    if(filme)
        imprimirFilme(filme)
    else
        console.log('Filme não encontrado.')
}

async function operacoesCRUDAtualizar(){
    const filme = await Filme.findByPk(2);

    filme.titulo = 'Filme 3';
    filme.sinopse = 'Sinopse do filme 3';

    await filme.save();
}

async function operacoesCRUDExcluir(id){
    const filme = await Filme.findByPk(id);

    filme.destroy();
}

// testarConexao();

sincronizarDb();

// operacoesCRUDInserir();

// retornarTodosFilmes();

// retornarFilmePorId(5);

// retornarFilmePorId(2);
// operacoesCRUDAtualizar();
// retornarFilmePorId(2);

operacoesCRUDExcluir(3);