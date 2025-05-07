-- Criação do Banco de Dados " 
CREATE DATABASE banco_vendasL06;

-- Seleção do Banco
USE banco_vendasL06;

-- 1) CRIAÇÃO DAS TABELAS 
-- Criação da Tabela "produtor"
CREATE TABLE produtor (
codProd int auto_increment primary key,
nomeProdutor varchar(100) NOT NULL
);

-- Criação da Tabela "item"
CREATE TABLE item (
idItem  int auto_increment primary key,
nomeItem varchar(100) NOT NULL,
valorUnit decimal(10,2) NOT NULL
);

-- Criação da Tabela "nf"
CREATE TABLE nf (
idNf int auto_increment primary key,
numeroNF varchar(20) NOT NULL,
dataNf date NOT NULL
);

-- Criação da Tabela "venda"
CREATE TABLE venda (
idVenda int auto_increment primary key,
fkNf int,
fkItem int,
fkProd int,
quantidade int NOT NULL,
desconto decimal(10,2) DEFAULT 0.00,
foreign key(fkNf) references nf(idNf),
foreign key(fkItem) references item(idItem),
foreign key(fkProd) references produtor(codProd)
);

-- Inserindo 5 produtos a Tabela "item"
INSERT INTO item (idItem, nomeItem, valorUnit) VALUES
(1, 'Feijão', 8.80),
(2, 'Arroz', 6.50),
(3, 'Café', 12.00),
(4, 'Ovo', 21.00),
(5, 'Òleo', 9.50);

-- Visualizando a Tabela "item"
SELECT * FROM item; 

-- Inserindo 5 produtores a Tabela "produtor"
INSERT INTO produtor (codProd, nomeProdutor) VALUES
(1, 'Osvaldo Silva'),
(2, 'Maria Souza'),
(3, 'Carlos Lima'),
(4, 'Ana Costa'),
(5, 'Pedro Rocha');

SELECT * FROM produtor;

-- Inserindo 7 notas fiscais a Tabale "nf"
INSERT INTO nf (idNf, numeroNF, dataNf) VALUES
(1, 'NF001', '2024-01-10'),
(2, 'NF002', '2024-01-15'),
(3, 'NF003', '2024-01-20'),
(4, 'NF004', '2024-02-01'),
(5, 'NF005', '2024-02-10'),
(6, 'NF006', '2024-03-01'),
(7, 'NF007', '2024-03-10');

-- Visualizando a Tabela produtor
SELECT * FROM nf;


-- 3) REPRODUZIR INFORMAÇÕES NA TABELA DE VENDAS (FIGURA)
INSERT INTO venda (fkNf, fkItem, fkProd, quantidade, desconto) VALUES
(1, 1, 1, 10, 5),
(1, 2, 2, 3, 0),
(1, 3, 3, 2, 0),
(1, 4, 4, 1, 0),
(1, 5, 5, 1, 0),
(2, 1, 3, 4, 0),
(2, 2, 4, 5, 0),
(2, 3, 5, 7, 0),
(3, 1, 1, 5, 0),
(3, 2, 4, 4, 0),
(3, 3, 5, 5, 0),
(3, 4, 2, 7, 0),
(4, 1, 5, 10, 15),
(4, 2, 4, 12, 5),
(4, 3, 1, 13, 5),
(4, 4, 2, 15, 5),
(5, 1, 3, 3, 0),
(5, 2, 5, 6, 0),
(6, 1, 1, 22, 15),
(6, 2, 3, 20, 0),
(7, 1, 1, 10, 3),
(7, 2, 2, 10, 4),
(7, 4, 5, 10, 1);


 
