-- Criação do Banco de Dados
CREATE DATABASE livrariaAtividade06;
USE livrariaAtividade06;

-- Tabela de Autores
CREATE TABLE autores (
id_autor INT AUTO_INCREMENT PRIMARY KEY,
nome_autor VARCHAR(100) NOT NULL,
nacionalidade VARCHAR(50)
);

-- Tabela de Livros
CREATE TABLE livros (
id_livro INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(150) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
id_autor INT,
FOREIGN KEY (id_autor) REFERENCES autores(id_autor)
);

-- Tabela de Clientes
CREATE TABLE clientes (
id_cliente INT AUTO_INCREMENT PRIMARY KEY,
nome_cliente VARCHAR(100) NOT NULL,
cidade VARCHAR(100),
estado CHAR(2)
);

-- Tabela de Vendas
CREATE TABLE vendas (
id_venda INT AUTO_INCREMENT PRIMARY KEY,
data_venda DATE NOT NULL,
id_cliente INT,
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- Tabela de Itens de Venda
CREATE TABLE itens_venda (
id_item INT AUTO_INCREMENT PRIMARY KEY,
id_venda INT,
id_livro INT,
quantidade INT NOT NULL,
desconto DECIMAL(10,2) DEFAULT 0.00,
FOREIGN KEY (id_venda) REFERENCES vendas(id_venda),
FOREIGN KEY (id_livro) REFERENCES livros(id_livro)
);

-- Inserts de autores
INSERT INTO autores (nome_autor, nacionalidade) VALUES
('Machado de Assis', 'Brasileira'),
('Clarice Lispector', 'Brasileira'),
('George Orwell', 'Britânica'),
('J.K. Rowling', 'Britânica'),
('J.R.R. Tolkien', 'Britânica'),
('Stephen King', 'Estadunidense'),
('Paulo Coelho', 'Brasileira'),
('Agatha Christie', 'Britânica'),
('Dan Brown', 'Estadunidense'),
('Jane Austen', 'Britânica'),
('Mark Twain', 'Estadunidense'),
('Virginia Woolf', 'Britânica'),
('Ernest Hemingway', 'Estadunidense'),
('Franz Kafka', 'Alemã'),
('José Saramago', 'Portuguesa'),
('Gabriel García Márquez', 'Colombiana'),
('Graciliano Ramos', 'Brasileira'),
('Lima Barreto', 'Brasileira'),
('Cecília Meireles', 'Brasileira'),
('Rubem Fonseca', 'Brasileira'),
('Lygia Fagundes Telles', 'Brasileira'),
('Carlos Drummond de Andrade', 'Brasileira'),
('Mario Quintana', 'Brasileira'),
('Monteiro Lobato', 'Brasileira'),
('Luís Fernando Veríssimo', 'Brasileira'),
('Edgar Allan Poe', 'Estadunidense'),
('Nelson Rodrigues', 'Brasileira'),
('Érico Veríssimo', 'Brasileira'),
('Albert Camus', 'Francesa'),
('Simone de Beauvoir', 'Francesa');

-- Inserts de livros
INSERT INTO livros (titulo, preco, id_autor) VALUES
('Dom Casmurro', 35.90, 1),
('A Hora da Estrela', 29.90, 2),
('1984', 42.00, 3),
('Harry Potter e a Pedra Filosofal', 55.00, 4),
('O Senhor dos Anéis', 68.00, 5),
('O Iluminado', 39.50, 6),
('O Alquimista', 28.90, 7),
('Assassinato no Expresso Oriente', 33.90, 8),
('O Código Da Vinci', 45.00, 9),
('Orgulho e Preconceito', 30.00, 10),
('As Aventuras de Tom Sawyer', 27.50, 11),
('Mrs. Dalloway', 29.90, 12),
('O Velho e o Mar', 31.00, 13),
('A Metamorfose', 25.00, 14),
('Ensaio sobre a Cegueira', 38.00, 15),
('Cem Anos de Solidão', 44.90, 16),
('Vidas Secas', 29.00, 17),
('Triste Fim de Policarpo Quaresma', 27.90, 18),
('Romanceiro da Inconfidência', 23.90, 19),
('Agosto', 36.00, 20),
('Ciranda de Pedra', 32.90, 21),
('Alguma Poesia', 19.90, 22),
('A Rua dos Cataventos', 21.90, 23),
('Reinações de Narizinho', 24.00, 24),
('Comédias da Vida Privada', 29.50, 25),
('Histórias Extraordinárias', 26.90, 26),
('A Vida Como Ela É', 35.00, 27),
('O Tempo e o Vento', 40.00, 28),
('O Estrangeiro', 33.90, 29),
('O Segundo Sexo', 48.00, 30);

-- Inserts de clientes
INSERT INTO clientes (nome_cliente, cidade, estado) VALUES
('João Silva', 'São Paulo', 'SP'),
('Maria Oliveira', 'Rio de Janeiro', 'RJ'),
('Pedro Souza', 'Belo Horizonte', 'MG'),
('Ana Lima', 'Salvador', 'BA'),
('Lucas Martins', 'Fortaleza', 'CE'),
('Clara Rodrigues', 'Brasília', 'DF'),
('Carlos Mendes', 'Curitiba', 'PR'),
('Fernanda Ribeiro', 'Porto Alegre', 'RS'),
('Aline Souza', 'Recife', 'PE'),
('Ricardo Dias', 'Campinas', 'SP'),
('Tatiane Nunes', 'Natal', 'RN'),
('Marcos Ferreira', 'João Pessoa', 'PB'),
('Patrícia Almeida', 'Teresina', 'PI'),
('Fábio Costa', 'Manaus', 'AM'),
('Juliana Castro', 'Belém', 'PA'),
('Sérgio Moraes', 'Cuiabá', 'MT'),
('Vanessa Lima', 'Florianópolis', 'SC'),
('Igor Rocha', 'Goiânia', 'GO'),
('Larissa Vieira', 'Aracaju', 'SE'),
('Vinícius Azevedo', 'Campo Grande', 'MS'),
('Bianca Santos', 'Maceió', 'AL'),
('Daniel Tavares', 'Vitória', 'ES'),
('Helena Duarte', 'Uberlândia', 'MG'),
('Diego Carvalho', 'Ribeirão Preto', 'SP'),
('Letícia Barros', 'São Luís', 'MA'),
('Thiago Pinto', 'Osasco', 'SP'),
('Gustavo Neves', 'Santos', 'SP'),
('Camila Monteiro', 'Niterói', 'RJ'),
('Adriana Lopes', 'Guarulhos', 'SP'),
('Rafael Cardoso', 'Londrina', 'PR');

-- Inserts de vendas
INSERT INTO vendas (data_venda, id_cliente) VALUES
('2024-01-10', 1), ('2024-01-12', 2), ('2024-01-13', 3), ('2024-01-14', 4),
('2024-01-15', 5), ('2024-01-16', 6), ('2024-01-17', 7), ('2024-01-18', 8),
('2024-01-19', 9), ('2024-01-20', 10), ('2024-01-21', 11), ('2024-01-22', 12),
('2024-01-23', 13), ('2024-01-24', 14), ('2024-01-25', 15), ('2024-01-26', 16),
('2024-01-27', 17), ('2024-01-28', 18), ('2024-01-29', 19), ('2024-01-30', 20),
('2024-02-01', 21), ('2024-02-02', 22), ('2024-02-03', 23), ('2024-02-04', 24),
('2024-02-05', 25), ('2024-02-06', 26), ('2024-02-07', 27), ('2024-02-08', 28),
('2024-02-09', 29), ('2024-02-10', 30), ('2024-02-11', 1), ('2024-02-12', 2),
('2024-02-13', 3), ('2024-02-14', 4), ('2024-02-15', 5), ('2024-02-16', 6),
('2024-02-17', 7), ('2024-02-18', 8), ('2024-02-19', 9), ('2024-02-20', 10),
('2024-02-21', 11), ('2024-02-22', 12), ('2024-02-23', 13), ('2024-02-24', 14),
('2024-02-25', 15), ('2024-02-26', 16), ('2024-02-27', 17), ('2024-02-28', 18),
('2024-03-01', 19), ('2024-03-02', 20), ('2024-03-03', 21), ('2024-03-04', 22),
('2024-03-05', 23), ('2024-03-06', 24), ('2024-03-07', 25), ('2024-03-08', 26),
('2024-03-09', 27), ('2024-03-10', 28), ('2024-03-11', 29), ('2024-03-12', 30);

-- Inserts de itens de venda (60 linhas com dados diversos)
INSERT INTO itens_venda (id_venda, id_livro, quantidade, desconto) VALUES
(1, 1, 2, 0), (1, 2, 1, 5), (2, 3, 1, 0), (2, 4, 1, 0), (3, 5, 1, 0),
(4, 6, 2, 10), (5, 7, 1, 0), (5, 8, 1, 5), (6, 9, 2, 0), (6, 10, 1, 0),
(7, 11, 1, 2), (8, 12, 1, 0), (9, 13, 1, 0), (10, 14, 1, 0), (11, 15, 1, 0),
(12, 16, 2, 5), (13, 17, 1, 0), (14, 18, 1, 0), (15, 19, 1, 3), (16, 20, 1, 0),
(17, 21, 2, 0), (18, 22, 1, 0), (19, 23, 2, 0), (20, 24, 1, 0), (21, 25, 1, 0),
(22, 26, 2, 0), (23, 27, 1, 0), (24, 28, 1, 0), (25, 29, 1, 0), (26, 30, 1, 0),
(27, 1, 2, 0), (28, 2, 2, 0), (29, 3, 1, 0), (30, 4, 1, 0), (31, 5, 1, 5),
(32, 6, 1, 0), (33, 7, 1, 2), (34, 8, 1, 0), (35, 9, 1, 0), (36, 10, 1, 0),
(37, 11, 1, 0), (38, 12, 2, 0), (39, 13, 1, 0), (40, 14, 2, 0), (41, 15, 1, 0),
(42, 16, 1, 0), (43, 17, 2, 0), (44, 18, 1, 0), (45, 19, 1, 0), (46, 20, 2, 0),
(47, 21, 1, 0), (48, 22, 1, 0), (49, 23, 1, 0), (50, 24, 1, 0), (51, 25, 1, 0),
(52, 26, 1, 0), (53, 27, 1, 0), (54, 28, 1, 0), (55, 29, 1, 0), (56, 30, 1, 0);


-- ATIVIDADES :) para exercitar os conceitos

-- 1. Liste valor total de todos os livros que estão disponíveis para venda.
	select sum(preco) as totalLivros
		from livros;
    
-- 2. Qual o preço médio de todos os livros da livraria? 
	select avg(preco) as precoMedio
		from livros;
    
-- 3. Quantos livros foram registrados na livraria? 
	select count(titulo) as registroLivros
		from livros;
-- 4. Qual é o menor valor e maior valor para um livro?
	select 
	min(preco) as valorMinimo,
	max(preco) as valorMaximo
		from livros;




-- 5. Quantos autores têm livros que têm o preço superior a R$ 50,00. (SELECT, DISTINCT, WHERE, COUNT)

SELECT COUNT(DISTINCT id_autor) AS total_autores
FROM livros
WHERE preco > 50.00;

-- 6. Encontre os 3 livros mais baratos da livraria. (SELECT, ORDER BY, LIMIT)
select titulo, preco 
from livros 
order by preco asc limit 3;

-- 7. Encontre os 3 livros mais caros da livraria. (SELECT, ORDER BY, LIMIT)
select titulo, preco 
from livros 
order by preco desc limit 3;

-- 8. Qual a quantidade total de livros vendidos por cada cliente? (SELECT, SUM, GROUP BY)
select 
	clientes.nome_cliente,
	sum(itens_venda.quantidade) as total_itens_venda,
	sum(livros.preco) as total_valor_venda,
	avg(livros.preco) as valor_medio_itens
from clientes
	inner join vendas on clientes.id_cliente = vendas.id_cliente
	inner join itens_venda on itens_venda.id_venda = vendas.id_venda
    inner join livros on livros. id_livro = itens_venda.id_livro
group by clientes.nome_cliente
order by total_itens_venda desc;


-- 9. Qual o valor total vendido de cada livro (preço x quantidade) e mostre o nome do livro e o valor total vendido. (SELECT, SUM, JOIN, GROUP BY)
SELECT 
    livros.titulo,
    SUM(livros.preco * itens_venda.quantidade) AS total_vendido
	FROM itens_venda
	JOIN livros ON itens_venda.id_livro = livros.id_livro
	GROUP BY livros.titulo;
-- 10. Qual o valor total vendido de cada autor (preço x quantidade) e mostre o nome do autor e o valor total vendido. (SELECT, SUM, JOIN, GROUP BY)

-- 11. Qual o valor gasto de cada cliente e mostre o nome do cliente e o valor total gasto. (SELECT, SUM, JOIN, GROUP BY)
select 
	clientes.nome_cliente,
	SUM(livros.preco * itens_venda.quantidade) AS total_vendido
from vendas 
	join clientes on vendas.id_cliente = clientes.id_cliente
    join itens_venda on itens_venda.id_venda = vendas.id_venda
    join livros on itens_venda.id_livro = livros.id_livro
group by (clientes.nome_cliente);
    

-- 12. Mostre o nome e a quantidade de livros vendidos para cada título cujo total de vendas seja maior que 10 unidades. (SELECT, SUM, JOIN, GROUP BY, WHERE)
SELECT livros.titulo AS nome_livro, SUM(itens_venda.quantidade) AS total_vendido
FROM itens_venda
inner join vendas on vendas.id_venda = itens_venda.id_venda
inner join livros on  livros.id_livro = itens_venda.id_livro
GROUP BY 
    livros.titulo;

