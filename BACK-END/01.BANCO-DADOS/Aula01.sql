create database cleitinhoTelecon;

use cleitinhoTelecon;

create table PessoaFisica (
	pfid int primary key auto_increment,
    Nome varchar(255),
    Sobrenome varchar(255),
    CPF int(12),
    RG int(20),
    DataDeNascimento date
);

alter table exemplo 
modify idExemplo int auto_increment primary key;


create table cliente (
	id int primary key auto_increment
);

create table TipoContatos (
	tcid int primary key auto_increment,
    nome varchar(255) not null
);

create table Contatos (
	cid int primary key auto_increment,
    nome varchar(255) not null,
    campo varchar(255) not null,
    obs text,
    tipoContato_tcid int,
    cliente_id int,
    foreign key (tipoContato_tcid) references TipoContatos(tcid),
    foreign key (cliente_id) references Cliente(id)
);

-- AULA 02 ALTERAÇÕES EM TABELAS


-- alteração da tabela para adicionar uma nova coluna
alter table PessoaFisica add column cliente_id int;
-- alterar para inserir a chave estrangeira
alter table PessoaFisica 
add constraint fk_clienteId
foreign key (cliente_id) references cliente(id);


create table exemplo (
	idExemplo int,
    nome varchar(50)
);














