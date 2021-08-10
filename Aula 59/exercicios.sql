CREATE TABLE IF NOT EXISTS produtos(	
	id_nf integer,
	id_item integer,
	cod_prod integer,
	valor_unit numeric NOT NULL,
	quantidade integer NOT NULL,
	desconto numeric,
	PRIMARY KEY (id_nf, id_item, cod_prod)
);

-- INSERT INTO produtos (id_nf, id_item, cod_prod, valor_unit, quantidade, desconto) VALUES 
-- (1, 1, 1, 25.00, 10, 5),
-- (1, 2, 2, 13.00, 3, NULL),
-- (1, 3, 3, 15.00, 2, NULL),
-- (1, 4, 4, 10.00, 1, NULL),
-- (1, 5, 5, 30.00, 1, NULL),
-- (2, 1, 3, 15.00, 4, NULL),
-- (2, 2, 4, 10.00, 5, NULL),
-- (2, 3, 5, 30.00, 7, NULL),
-- (3, 1, 1, 25.00, 5, NULL),
-- (3, 2, 4, 10.00, 4, NULL),
-- (3, 3, 5, 30.00, 5, NULL),
-- (3, 4, 2, 13.50, 7, NULL),
-- (4, 1, 5, 30.00, 10, 15),
-- (4, 2, 4, 10.00, 12, 5),
-- (4, 3, 1, 25.00, 13, 5),
-- (4, 4, 2, 13.00, 15, 5),
-- (5, 1, 3, 15.00, 3, NULL),
-- (5, 2, 5, 30.00, 6, NULL),
-- (6, 1, 1, 25.00, 22, 15),
-- (6, 2, 3, 15.00, 25, 20),
-- (7, 1, 1, 25.00, 10, 3),
-- (7, 2, 2, 13.50, 10, 4),
-- (7, 3, 3, 15.00, 10, 4),
-- (7, 4, 5, 30.00, 10, 1);

-- SELECT id_nf, id_item, cod_prod, valor_unit FROM produtos WHERE produtos IS NT;

-- SELECT 
-- 	id_nf,
-- 	id_item,
-- 	cod_prod,
-- 	valor_unit,
-- 	ROUND((valor_unit - (valor_unit * (desconto / 100))), 2) valor_vendido
-- FROM produtos
-- WHERE desconto IS NOT NULL;

-- -- UPDATE produtos 
-- -- SET desconto = 0 
-- -- WHERE desconto IS NULL;
-- -- SELECT * FROM PRODUTOS

-- SELECT 
-- 	id_nf,
-- 	id_item,
-- 	cod_prod,
-- 	valor_unit,
-- 	quantidade,
-- 	ROUND(quantidade * valor_unit) valor_total,
-- 	ROUND((valor_unit - (valor_unit * (desconto / 100))), 2) valor_vendido
-- FROM produtos
-- WHERE desconto IS NOT NULL;


-- SELECT
-- 	id_nf,
-- sum(ROUND(quantidade * valor_unit)) valor_total
-- FROM produtos
-- GROUP BY id_nf
-- ORDER BY valor_total DESC;

-- SELECT 
-- 	id_nf,
-- 	id_item,
-- 	cod_prod,
-- 	valor_unit,
-- 	quantidade,
-- 	ROUND((valor_unit - (valor_unit * (desconto / 100))), 2) valor_vendido
-- FROM produtos
-- WHERE desconto IS NOT NULL
-- ORDER BY valor_vendido DESC;

-- SELECT 
-- 	cod_prod,
-- 	quantidade
-- FROM produtos
-- WHERE desconto IS NOT NULL
-- ORDER BY quantidade DESC;

-- SELECT 
-- 	id_nf,
-- 	cod_prod,
-- 	quantidade
-- FROM produtos
-- WHERE quantidade BETWEEN 1 AND 10;

-- SELECT 
-- id_nf,
-- ROUND(quantidade * valor_unit) valor_total
-- FROM produtos
-- WHERE valor_total < 500
-- ORDER BY valor_total DESC;




