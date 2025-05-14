use banco_vendasl06;

select * from venda;

select 
venda.idVenda, venda.quantidade, venda.desconto,
nf.numeroNF, 
produtor.nomeProdutor,
item.nomeItem, item.valorUnit,
-- coluna calculada para o total da venda SEM desconto
item.valorUnit * venda.quantidade as 'valor Total (sem desconto)'
from venda -- tabela1
	-- nome tabela2 on tabela1.chaveEstrangeira = tabela2.chavePrimaria
	inner join nf on venda.fkNf = nf.idNf
    inner join produtor on venda.fkProd = produtor.codProd
    inner join item on venda.fkItem = item.idItem;
    
update item set valorUnit = 18.80
where idItem = 1;

-- mostrando a soma de todos os produtos vendidos
-- agregador SUM

select sum(quantidade)
from venda;
-- contagem (linhas)
select count(*)
from venda;

-- média de quantidade vendida
select avg(quantidade) as 'média quantidade'
from venda;

-- mínimo da quantidade vendida
select 
	min(quantidade)
from venda;

-- máximo de quantidade vendida
select max(quantidade)
from venda;

-- mais de uma operação agregadora por select
select 
	min(quantidade),
	max(quantidade),
	avg(quantidade),
	sum(quantidade)
from venda;
