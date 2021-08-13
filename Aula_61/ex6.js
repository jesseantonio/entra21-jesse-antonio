// 6) Crie uma função insereLivros(livros) que recebe um vetor de livros:
// livro = {
//     isbn,
//     nome_autor,
//     assunto,
//     preco,
//     quantidade_estoque,
//     id_editora
// }
// e insere esses livros no banco de dados.

const { randomUUID } = require("crypto");
const format = require("pg-format");
const db = require("./db");

async function insereLivros(livros) {
    // Separando clientes
    const clientesLivros = [];

    livros.forEach(livros => {
        clientesLivros.push([
            livros.isbn,
            livros.nome_autor,
            livros.assunto,
            livros.preco,
            livros.quantidade_estoque,
            livros.id_editora
        ]);
    });

    try {
        await db.query("BEGIN;");

        console.log(format(`            
        INSERT INTO 
            livros (isbn, nome_autor, assunto, preco, quantidade_estoque, id_editora)
        VALUES 
            %L;`, clientesLivros))
        const { rows } = await db.query(format(`            
            INSERT INTO 
                livros (isbn, nome_autor, assunto, preco, quantidade_estoque, id_editora)
            VALUES 
                %L;`, clientesLivros));

        await db.query(" COMMIT;");
        console.log("Livros foram cadastradas com sucesso!");
    } catch (error) {
        await db.query("ROLLBACK;")
        console.log(error.message);
    } finally {
        db.end();
    }
}

const livros = [
    {
        isbn: randomUUID(),
        nome_autor: "Oliver Twist",
        assunto: "Árvores",
        preco: 20.00,
        quantidade_estoque: 5,
        id_editora: "2bd0ebda-4032-4b33-b4fc-34ca8e2d4cec"
    },
    {
        isbn: randomUUID(),
        nome_autor: "Jane Awsten",
        assunto: "Amor",
        preco: 50.00,
        quantidade_estoque: 10,
        id_editora: "2bd0ebda-4032-4b33-b4fc-34ca8e2d4cec"
    },
    {
        isbn: randomUUID(),
        nome_autor: "Stephen Hawking",
        assunto: "Espaço-Tempo",
        preco: 10.00,
        quantidade_estoque: 15,
        id_editora: "2bd0ebda-4032-4b33-b4fc-34ca8e2d4cec"
    },
    {
        isbn: randomUUID(),
        nome_autor: "André Dumas",
        assunto: "França no século XV",
        preco: 30.00,
        quantidade_estoque: 5,
        id_editora: "2bd0ebda-4032-4b33-b4fc-34ca8e2d4cec"
    },
    {
        isbn: randomUUID(),
        nome_autor: "Victor Hugo",
        assunto: "Vingança",
        preco: 100.00,
        quantidade_estoque: 9,
        id_editora: "2bd0ebda-4032-4b33-b4fc-34ca8e2d4cec"
    }

];

insereLivros(livros);