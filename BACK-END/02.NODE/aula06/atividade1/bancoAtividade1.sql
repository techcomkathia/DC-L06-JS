-- Criar o banco de dados
CREATE DATABASE biblioteca;
USE biblioteca;

-- Tabela autores
CREATE TABLE autores (
  id_autor INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  nacionalidade VARCHAR(50)
);

-- Tabela categorias
CREATE TABLE categorias (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50)
);

-- Tabela livros
CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  ano_publicacao INT,
  preco DECIMAL(10,2),
  autor_id INT,
  categoria_id INT,

  -- Chaves estrangeiras
  FOREIGN KEY (autor_id) REFERENCES autores(id_autor),
  FOREIGN KEY (categoria_id) REFERENCES categorias(id_categoria)
);