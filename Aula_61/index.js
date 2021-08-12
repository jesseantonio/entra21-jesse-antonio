const db = require("./db");
const format = require("pg-format");
require("dotenv").config();


console.log(process.env);

(async () => {
    try {
        const res = await db.query("SELECT NOW()");
        console.log(res.rows[0]);
    } catch (err) {
        console.log(err.message);
    } finally {
        db.end();
    }
    try {
        await pool.query(`
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";
        
        CREATE TABLE IF NOT EXISTS clientes (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome text NOT NULL,
            email text NOT NULL UNIQUE,
            telefone text NOT NULL UNIQUE,
            numero_documento integer NOT NULL, 
            tipo_pessoa char(3) NOT NULL
                CHECK (tipo_pessoa IN ('FIS', 'JUR')), 
            pontos integer NOT NULL
        );
        CREATE TABLE IF NOT EXISTS enderecos (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rua text,
            numero integer,
            cidade text NOT NULL,
            estado text NOT NULL, 
            cep text NOT NULL,
            id_cliente text NOT NULL UNIQUE
        );
        CREATE TABLE IF NOT EXISTS livros (
            isbn UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome_autor text NOT NULL,
            assunto text NOT NULL,
            quantidade_estoque integer NOT NULL,
            preco integer NOT NULL,
            id_editora text NOT NULL UNIQUE
        );
        CREATE TABLE IF NOT EXISTS compras (
            id_editora text NOT NULL,
            id_cliente text NOT NULL,
            data timestamp NOT NULL,
            valor numeric NOT NULL
        );
        CREATE TABLE IF NOT EXISTS editoras (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            nome_gerente text NOT NULL,
            telefone integer NOT NULL
        );
        `);
        console.log(rows)
    } catch (error) {
        console.log(error.message);
    } finally {
        pool.end();
    }
})();