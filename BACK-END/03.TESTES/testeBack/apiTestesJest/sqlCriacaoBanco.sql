CREATE DATABASE IF NOT EXISTS api_gatos;
USE api_gatos;

CREATE TABLE gatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    primeiroNome VARCHAR(255) NOT NULL,
    sobreNome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);
-- senha123
INSERT INTO gatos (primeiroNome, sobreNome, email, senha, createdAt, updatedAt) VALUES ('Mia', 'Felina', 'mia@example.com', '$2b$10$4ApeDx6sGafnQ8njsTWaEe58MOtBUUp4uS4.fORQ2/zUrJAJL25v6', NOW(), NOW());
INSERT INTO gatos (primeiroNome, sobreNome, email, senha, createdAt, updatedAt) VALUES ('Luna', 'Felina', 'luna@example.com', '$2b$10$4ApeDx6sGafnQ8njsTWaEe58MOtBUUp4uS4.fORQ2/zUrJAJL25v6', NOW(), NOW());
INSERT INTO gatos (primeiroNome, sobreNome, email, senha, createdAt, updatedAt) VALUES ('Tom', 'Felino', 'tom@example.com', '$2b$10$4ApeDx6sGafnQ8njsTWaEe58MOtBUUp4uS4.fORQ2/zUrJAJL25v6', NOW(), NOW());
INSERT INTO gatos (primeiroNome, sobreNome, email, senha, createdAt, updatedAt) VALUES ('Simba', 'Felino', 'simba@example.com', '$2b$10$4ApeDx6sGafnQ8njsTWaEe58MOtBUUp4uS4.fORQ2/zUrJAJL25v6', NOW(), NOW());
INSERT INTO gatos (primeiroNome, sobreNome, email, senha, createdAt, updatedAt) VALUES ('Nina', 'Felina', 'nina@example.com', '$2b$10$4ApeDx6sGafnQ8njsTWaEe58MOtBUUp4uS4.fORQ2/zUrJAJL25v6', NOW(), NOW());

