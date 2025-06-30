-- Criação do banco
CREATE DATABASE IF NOT EXISTS aulaFinalNode;
USE aulaFinalNode;

-- Tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('adm', 'cliente') NOT NULL
);

-- Tabela produtos
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco FLOAT NOT NULL,
    quantidade INT NOT NULL
);

-- Inserir usuários
INSERT INTO usuarios (nome, email, senha, tipo) VALUES 
('Carminha', 'nazare@example.com', '$2b$10$jCdC43yCvfCgM7h.wxU8qO9KcS5Db8CSWu8eEobRBH4VSAIMcin7G', 'adm'),
('Nina', 'nina@example.com', '$2b$10$jCdC43yCvfCgM7h.wxU8qO9KcS5Db8CSWu8eEobRBH4VSAIMcin7G', 'cliente'),
('Lucinda', 'lucinda@example.com', '$2b$10$jCdC43yCvfCgM7h.wxU8qO9KcS5Db8CSWu8eEobRBH4VSAIMcin7G', 'cliente');
--senha123
-- Inserir produtos
INSERT INTO produtos (nome, preco, quantidade) VALUES
('Teclado Mecânico', 250.00, 10),
('Mouse Gamer', 150.00, 25),
('Monitor 24 Polegadas', 900.00, 5),
('Notebook i5', 3500.00, 7);

