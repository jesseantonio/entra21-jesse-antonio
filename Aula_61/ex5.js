// 5) Crie uma função insereEditoras(editoras) que recebe um vetor de editoras:
// editora = {
//     nome_gerente,
//     telefone
// }
// e insere essas editoras no banco de dados.

// Utilize essa função para criar 5 editoras.

const format = require("pg-format");
const db = require("./db");

async function insereEditoras(editoras) {
    // Separando clientes
    const clientesEditoras = [];

    editoras.forEach(editoras => {
        clientesEditoras.push([
            editoras.nome_gerente,
            editoras.telefone
        ]);
    });

    try {
        await db.query("BEGIN;");

        const { rows } = await db.query(format(`            
            INSERT INTO 
                editoras (nome_gerente, telefone)
            VALUES 
                %L
            RETURNING id;`, clientesEditoras));

        await db.query(" COMMIT;");
        console.log("Editoras foram cadastradas com sucesso!");
    } catch (error) {
        await db.query("ROLLBACK;")
        console.log(error.message);
    } finally {
        db.end();
    }
}

const editoras = [
    {
        nome_gerente: "Raul",
        telefone: "(47) 9 8344-3320",
    },
    {
        nome_gerente: "Carlos",
        telefone: "(47) 9 8844-3320",
    },
    {
        nome_gerente: "Maria",
        telefone: "(47) 9 8345-3320",
    },
    {
        nome_gerente: "Ana",
        telefone: "(47) 9 8342-3320",
    },
    {
        nome_gerente: "João",
        telefone: "(47) 9 8341-3320",
    }

];

insereEditoras(editoras);