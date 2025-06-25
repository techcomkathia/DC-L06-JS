CREATE DATABASE IF NOT EXISTS DESAFIO_LIVRARIA_LIVE06;
USE DESAFIO_LIVRARIA_LIVE06;

-- Tabela de usuários (clientes)
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de categorias
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de autores
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de livros
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    preco DECIMAL(10,2) NOT NULL,
    publicado_em DATE NOT NULL,
    estoque INT NOT NULL,
    categoria_id INT NOT NULL,
    autor_id INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);

-- Tabela de nota fiscal (NF)
CREATE TABLE nf (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabela de compras (itens da NF)
CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nf_id INT NOT NULL,
    livro_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (nf_id) REFERENCES nf(id),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);


-- Inserindo usuários
-- hash de senha usando o bcrypt. Texto original: 'senha123'
INSERT INTO usuarios (nome, email, senha) VALUES 
('Alice Andrade', 'alice@exemplo.com', '$2b$12$M2JAsgmkiwgG9fnxnC.SEeIaxsAbpxzig5/8.Uyfl9p4nccQXhXgq'),
('Bruno Barros', 'bruno@exemplo.com', '$2b$12$M2JAsgmkiwgG9fnxnC.SEeIaxsAbpxzig5/8.Uyfl9p4nccQXhXgq'),
('Carla Castro', 'carla@exemplo.com', '$2b$12$M2JAsgmkiwgG9fnxnC.SEeIaxsAbpxzig5/8.Uyfl9p4nccQXhXgq'),
('Diego Dias', 'diego@exemplo.com', '$2b$12$M2JAsgmkiwgG9fnxnC.SEeIaxsAbpxzig5/8.Uyfl9p4nccQXhXgq'),
('Elaine Esteves', 'elaine@exemplo.com', '$2b$12$M2JAsgmkiwgG9fnxnC.SEeIaxsAbpxzig5/8.Uyfl9p4nccQXhXgq');


-- Inserindo categorias
INSERT INTO categorias (nome, descricao) VALUES
('Ficção', 'Livros de ficção e aventura'),
('Tecnologia', 'Livros sobre ciência da computação e TI'),
('Autoajuda', 'Livros de desenvolvimento pessoal'),
('Negócios', 'Livros sobre gestão, marketing e empreendedorismo'),
('Educação', 'Livros didáticos e pedagógicos');

-- Inserindo autores
INSERT INTO autores (nome, nacionalidade) VALUES
('J. K. Rowling', 'Britânica'),
('George R. R. Martin', 'Americano'),
('Yuval Noah Harari', 'Israelense'),
('Robert C. Martin', 'Americano'),
('Machado de Assis', 'Brasileiro');

-- Inserindo livros
INSERT INTO livros (titulo, isbn, preco, publicado_em, estoque, categoria_id, autor_id) VALUES
('Harry Potter e a Pedra Filosofal', '9788532511010', 39.90, '2000-01-01', 50, 1, 1),
('O Código Limpo', '9788576082675', 59.90, '2009-01-01', 30, 2, 4),
('Sapiens: Uma Breve História da Humanidade', '9788535920420', 45.00, '2015-01-01', 20, 3, 3),
('As Crônicas de Gelo e Fogo', '9780553103540', 69.90, '1996-08-06', 40, 1, 2),
('Dom Casmurro', '9788582850352', 19.90, '1899-01-01', 100, 5, 5);

-- Inserindo notas fiscais
INSERT INTO nf (usuario_id, total) VALUES
(1, 79.80),
(2, 45.00),
(3, 39.90),
(4, 59.90),
(5, 19.90);

-- Inserindo compras
INSERT INTO compras (nf_id, livro_id, quantidade, preco_unitario) VALUES
(1, 1, 2, 39.90),
(2, 3, 1, 45.00),
(3, 1, 1, 39.90),
(4, 2, 1, 59.90),
(5, 5, 1, 19.90);
