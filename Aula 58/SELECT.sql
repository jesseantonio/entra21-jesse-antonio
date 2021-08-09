-- DROP TABLE produtos_pedidos;
-- DROP TABLE pedidos;
-- DROP TABLE produtos;

-- CREATE TABLE IF NOT EXISTS produtos(
-- 	id SERIAL PRIMARY KEY,
-- 	nome text NOT NULL UNIQUE,
-- 	preco numeric NOT NULL CHECK (preco > 0)
-- );

-- CREATE TABLE IF NOT EXISTS pedidos(
-- 	id SERIAL PRIMARY KEY,
-- 	total_pedido numeric NOT NULL
-- );



-- CREATE TABLE IF NOT EXISTS produtos_pedidos(
-- 	id_produto integer REFERENCES produtos,
-- 	id_pedido integer REFERENCES pedidos,
-- 	quantidade integer NOT NULL,
-- 	PRIMARY KEY (id_produto, id_pedido)
-- );

-- INSERT INTO produtos (nome, preco) VALUES 
-- ('Lápis', 1),
-- ('Caneta', 2.5),
-- ('Régua', 3);

-- INSERT INTO pedidos (total_pedido) VALUES
-- (10), (10), (30), (5);

-- INSERT INTO produtos_pedidos VALUES 
-- (1, 1, 10),
-- (2, 2, 4),
-- (3, 3, 10),
-- (3, 2, 2);

-- SELECT ped.id, sum(prod.preco * pp.quantidade) total_produto
-- FROM produtos_pedidos pp
-- INNER JOIN pedidos ped ON ped.id = pp.id_pedido
-- INNER JOIN produtos prod ON prod.id = pp.id_produto
-- GROUP BY ped.id;

-- SELECT * FROM produtos WHERE nome ILIKE 'LÁ_I_';

-- SELECT COUNT(id) quantidade_pedidos FROM pedidos;

-- SELECT min(total_pedido) FROM pedidos;

-- SELECT max(total_pedido) FROM pedidos;

-- SELECT ROUND (avg(total_pedido)) FROM pedidos;

CREATE TABLE IF NOT EXISTS vendas(
	id SERIAL PRIMARY KEY,
	nome_vendedor text NOT NULL,
	quantidade integer,
	produto text NOT NULL,
	cidade text NOT NULL
);
INSERT INTO vendas (nome_vendedor, quantidade, produto, cidade) VALUES
('Jorge', 10, 'Mouse', 'São Paulo'),
('Ana', 6, 'Teclado', 'Rio de Janeiro'),
('Mario', 23, 'Mouse', 'Blumenau'),
('Felipe', 25, 'Webcam', 'Blumenau'),
('João', 2, 'Teclado', 'Recife'),
('Pedro', 3, 'Monitor', 'São Paulo'),
('João', 5, 'Monitor', 'Rio de Janeiro');

SELECT cidade, sum(quantidade)
FROM vendas
GROUP BY cidade;

SELECT produto, sum(quantidade)
FROM vendas
GROUP BY produto;

SELECT nome_vendedor, sum(quantidade) total_vendas
FROM vendas
GROUP BY nome_vendedor
ORDER BY total_vendas DESC;
;

