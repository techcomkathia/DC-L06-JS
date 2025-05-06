-- Criação do banco de dados
CREATE DATABASE projetosLive06;
USE projetosLive06;

-- Tabela users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    userName VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL
);

-- Tabela projects
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    description VARCHAR(45),
    date VARCHAR(45)
);

-- Tabela de associação users_has_projects
CREATE TABLE users_has_projects (
    users_id INT NOT NULL,
    projects_id INT NOT NULL,
    PRIMARY KEY (users_id, projects_id),
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (projects_id) REFERENCES projects(id)
);

-- DDL 
-- Mude o tipo de dado da tabela projects na coluna date (do banco de dados da ATIVIDADE 3) para DATE
alter table projects
modify column date date;

-- Mude o valor padrão para as senhas da tabela users para 123mudar
alter table users
alter column password set default '123mudar';

-- outra opção considerando a mudança de tipo de dado
alter table users
modify column password varchar(20) not null default '123mudar';

-- inserir informações na tabela usuarios 
INSERT INTO users (name, userName,email) VALUES
('Maria', 'rh_maria', 'maria@empresa.com');

INSERT INTO users (name, userName, password, email) VALUES
('Paulo', 'Ti_paulo', '123@456', 'paulo@empresa.com'),
('Ana', 'rh_ana', '123mudar', 'clara@empresa.com');

-- inserir um registro com o id informado, passando por cima da instrução de auto-incremento
INSERT INTO users (id, name, userName,email) VALUES
(100, 'Clara', 'clara_rh', 'clara@empresa.com');

-- auto incremento com o valor de 101 ( contagem a partir do maior id)
INSERT INTO users ( name, userName,email) VALUES
('Aparecido', 'rh_apareci', 'aparecido@empresa.com');

-- inserindo em um id já existente
INSERT INTO users (id, name, userName,email) VALUES
(1, 'NÃO', 'NÃO', 'NÃO@empresa.com');

-- Inserindo com um userName diferente
INSERT INTO users (name, userName,email) VALUES
('NÃO', 'NÃO!', 'NÃO@empresa.com');

-- id não numérico (cria a informação substituindo o id de char por um numero auto incremento)
INSERT INTO users (id, name, userName,email) VALUES
('k','NÃO', 'NÃO?', 'NÃO@empresa.com');









