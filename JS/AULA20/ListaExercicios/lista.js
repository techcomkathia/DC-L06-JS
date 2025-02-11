/*Atividade 1 -  Cleitinho está fazendo uma consultoria com a Naty Finanças. Ela disse que ele tem que saber o quanto ele gasta por mês. Para isso, ela tem um array de gastos do mês. Faça um programa que receba o array e reduza esse array para soma de todos os gastos do mês. (reduce)*/

let contasCleitinho = [100, 87, 200, 60, 300, 120, 400, 65, 500, 600, 700, 800,10, 900, 1000, 150, 300, 1500, 40, 78, 800, 2500]


/* Atividade 2 - Cleitinho além dos gastos do mês, tem uma dívida do mês anterior. Refaça a questão, considerando que existe um valor inicial de dívida de 5000. (reduce)
*/
let dividaCleitinho = 5000

/* Atividade 5 - Crie um array com os números elevados ao quadrado. Ao final mostre os dois arrays. (map)  */

let numeros = [ 20 , 5 , 4 , 2 , 12 , 30 , 8 , 10 , 22 , 15 ]


/* Atividade 4 - A Cleitinho Eletro comprou produtos para adicionar no seu estoque e ficar abastecido para novas vendas. Cada item do estoque receberá mais 100 unidades. Faça um programa que incremente as 100 unidades para todos os produtos do array. (forEach) */ 

let estoqueCleitinho2025 = [
    {nome:'teclado', preco: 150, quantidade: 15, cor: 'preto', marca: 'logitech'},
    {nome:'mouse', preco: 50, quantidade: 20, cor: 'preto', marca: 'logitech'},
    {nome:'monitor', preco: 500, quantidade: 10, cor: 'branco', marca: 'lg'},
    {nome:'celular', preco: 1500, quantidade: 5, cor: 'prata', marca: 'samsung'},
    {nome:'tablet', preco: 1000, quantidade: 10, cor: 'preto', marca: 'apple'},
    {nome:'notebook', preco: 3000, quantidade: 5, cor: 'prata', marca: 'dell'},
    {nome:'computador', preco: 5000, quantidade: 5, cor: 'prata', marca: 'lenovo'},
    {nome:'teclado', preco: 150, quantidade: 15, cor: 'preto', marca: 'logitech'},
    {nome:'mouse pad', preco: 50, quantidade: 20, cor: 'preto', marca: 'Xing Ling'},
    {nome: 'cadeira', preco: 500, quantidade: 10, cor: 'branco', marca: 'Cleitinho Móveis'},
    {nome:'mesa', preco: 1500, quantidade: 5, cor: 'prata', marca: 'Cleitinho Móveis'},
    {nome: 'câmera', preco: 3000, quantidade: 5, cor: 'prata', marca: 'TecPix'},
    {nome:'microfone', preco: 5000, quantidade: 5, cor: 'prata', marca: 'TecPix'},
    {nome:'tablet', preco: 1000, quantidade: 10, cor: 'preto', marca: 'apple'},
    {nome:'notebook', preco: 3000, quantidade: 5, cor: 'prata', marca: 'dell'},
    {nome:'computador', preco: 5000, quantidade: 5, cor: 'prata', marca: 'lenovo'},
    {nome:'teclado', preco: 150, quantidade: 15, cor: 'preto', marca: 'logitech'},
    {nome: 'smartwatch', preco: 50, quantidade: 20, cor: 'preto', marca: 'Xing Ling'},
    {nome: 'cadeira', preco: 500, quantidade: 10, cor: 'branco', marca: 'Cleitinho Móveis'},
    {nome:'mesa', preco: 1500, quantidade: 5, cor: 'prata', marca: 'Cleitinho Móveis'},
    {nome: 'câmera', preco: 3000, quantidade: 5, cor: 'preta', marca: 'TecPix'},
    {nome:'microfone', preco: 5000, quantidade: 5, cor: 'rosa', marca: 'TecPix'},
    {nome:'tablet', preco: 1000, quantidade: 10, cor: 'rosa', marca: 'apple'},
    {nome:'notebook', preco: 3000, quantidade: 5, cor: 'prata', marca: 'dell'},
    {nome:'computador', preco: 5000, quantidade: 5, cor: 'branco', marca: 'lenovo'}
]


/* Atividade 5 - A Cleitinho Eletro cresceu. Irá lançar um site do Magazine Cleitinho. No site, os produtos serão separados por categorias. Cada categoria terá um array de produtos. Faça a construção do array de produtos da categoria: Eletrônicos, vestuário, beleza e móveis  (filter)*/

const produtosMagazineCleitinho = [
    // Eletrônicos
    { nome: "Smartphone Galaxy", qtd: 10, preco: 2500, cor: "preto", marca: "Samsung", departamento: "Eletrônicos" },
    { nome: "Notebook Dell", qtd: 5, preco: 4500, cor: "cinza", marca: "Dell", departamento: "Eletrônicos" },
    { nome: "Fone Bluetooth", qtd: 15, preco: 300, cor: "branco", marca: "JBL", departamento: "Eletrônicos" },
    { nome: "TV LED 50''", qtd: 8, preco: 3200, cor: "preto", marca: "LG", departamento: "Eletrônicos" },
    { nome: "Carregador Portátil", qtd: 20, preco: 150, cor: "azul", marca: "Xiaomi", departamento: "Eletrônicos" },
    { nome: "Câmera Fotográfica", qtd: 7, preco: 1800, cor: "prata", marca: "Canon", departamento: "Eletrônicos" },
    { nome: "Console de Video Game", qtd: 4, preco: 3500, cor: "branco", marca: "Sony", departamento: "Eletrônicos" },
    { nome: "Smartwatch", qtd: 12, preco: 900, cor: "preto", marca: "Apple", departamento: "Eletrônicos" },
    { nome: "Headset Gamer", qtd: 10, preco: 400, cor: "vermelho", marca: "HyperX", departamento: "Eletrônicos" },
    { nome: "Monitor 24''", qtd: 6, preco: 1100, cor: "preto", marca: "Acer", departamento: "Eletrônicos" },
  
    // Vestuário
    { nome: "Camisa Social", qtd: 20, preco: 120, cor: "branca", marca: "Zara", departamento: "Vestuário" },
    { nome: "Calça Jeans", qtd: 15, preco: 200, cor: "azul", marca: "Levi's", departamento: "Vestuário" },
    { nome: "Jaqueta de Couro", qtd: 5, preco: 350, cor: "preto", marca: "Colcci", departamento: "Vestuário" },
    { nome: "Tênis Esportivo", qtd: 18, preco: 300, cor: "cinza", marca: "Nike", departamento: "Vestuário" },
    { nome: "Blusa de Moletom", qtd: 12, preco: 150, cor: "vermelha", marca: "Adidas", departamento: "Vestuário" },
    { nome: "Vestido Longo", qtd: 7, preco: 280, cor: "verde", marca: "Farm", departamento: "Vestuário" },
    { nome: "Shorts de Tecido", qtd: 10, preco: 90, cor: "amarelo", marca: "Hering", departamento: "Vestuário" },
    { nome: "Casaco de Lã", qtd: 8, preco: 400, cor: "bege", marca: "Riachuelo", departamento: "Vestuário" },
    { nome: "Chapéu Panamá", qtd: 5, preco: 100, cor: "marrom", marca: "Renner", departamento: "Vestuário" },
    { nome: "Cinto de Couro", qtd: 20, preco: 70, cor: "preto", marca: "Calvin Klein", departamento: "Vestuário" },
  
    // Beleza
    { nome: "Perfume Importado", qtd: 15, preco: 450, cor: "transparente", marca: "Chanel", departamento: "Beleza" },
    { nome: "Batom Vermelho", qtd: 30, preco: 50, cor: "vermelho", marca: "MAC", departamento: "Beleza" },
    { nome: "Creme Hidratante", qtd: 25, preco: 80, cor: "branco", marca: "Nivea", departamento: "Beleza" },
    { nome: "Shampoo Anticaspa", qtd: 40, preco: 30, cor: "azul", marca: "Head & Shoulders", departamento: "Beleza" },
    { nome: "Protetor Solar", qtd: 35, preco: 70, cor: "branco", marca: "La Roche-Posay", departamento: "Beleza" },
    { nome: "Base Facial", qtd: 20, preco: 90, cor: "bege", marca: "Maybelline", departamento: "Beleza" },
    { nome: "Esmalte", qtd: 50, preco: 10, cor: "rosa", marca: "Risqué", departamento: "Beleza" },
    { nome: "Kit de Maquiagem", qtd: 10, preco: 250, cor: "diversas", marca: "Sephora", departamento: "Beleza" },
    { nome: "Máscara de Cílios", qtd: 30, preco: 60, cor: "preto", marca: "L'Oreal", departamento: "Beleza" },
    { nome: "Água Micelar", qtd: 25, preco: 50, cor: "transparente", marca: "Bioderma", departamento: "Beleza" },
  
    // Móveis
    { nome: "Sofá 3 Lugares", qtd: 5, preco: 1500, cor: "cinza", marca: "Tok&Stok", departamento: "Móveis" },
    { nome: "Mesa de Jantar", qtd: 8, preco: 1200, cor: "marrom", marca: "Etna", departamento: "Móveis" },
    { nome: "Cadeira de Escritório", qtd: 10, preco: 500, cor: "preto", marca: "Flexform", departamento: "Móveis" },
    { nome: "Cama Box Queen", qtd: 3, preco: 2500, cor: "branco", marca: "Ortobom", departamento: "Móveis" },
    { nome: "Estante de Livros", qtd: 7, preco: 800, cor: "carvalho", marca: "Mobly", departamento: "Móveis" },
    { nome: "Guarda-Roupa", qtd: 5, preco: 1800, cor: "branco", marca: "Casah", departamento: "Móveis" },
    { nome: "Rack para TV", qtd: 6, preco: 700, cor: "preto", marca: "Politorno", departamento: "Móveis" },
    { nome: "Cômoda", qtd: 4, preco: 900, cor: "bege", marca: "MadeiraMadeira", departamento: "Móveis" },
    { nome: "Poltrona de Descanso", qtd: 5, preco: 1300, cor: "vermelha", marca: "Tok&Stok", departamento: "Móveis" },
    { nome: "Mesa de Centro", qtd: 10, preco: 400, cor: "branco", marca: "Móveis Simonetti", departamento: "Móveis" }
];

// 4.1) Crie um array com todos os produtos da categoria "Eletrônico"
// 4.2) Crie um array com todos os produtos da categoria "Vestuário"
// 4.3) Crie um array com todos os produtos da categoria "Beleza"
// 4.4) Crie um array com todos os produtos da categoria "Móveis"


/* DESAFIO FINAL :)

O Cleitinho quer saber o quanto os  10 primeiros clientes gastaram na loja. Crie um array com o gasto total de cada um desses 10 clientes (map). Depois mostre o gasto total de todos eles (reduce).
*/ 

const comprasClientes = [
    { nome: "João", itens: [100, 200, 300, 580] },
    { nome: "Maria", itens: [50, 100] },
    { nome: "Pedro", itens: [400, 500, 60, 120, 50] },
    { nome: "Ana", itens: [200, 300, 400, 500] },
    { nome: "João", itens: [100, 200, 300, 80, 30, 180] },
    { nome: "Maria", itens: [50, 100] },
    { nome: "Pedro", itens: [400, 500, 60] },
    { nome: "Ana", itens: [200, 300, 400, 500, 90, 120] },
    { nome: "João", itens: [100, 200, 300, 20, 80] },
    { nome: "Maria", itens: [50, 100] }
]

/* ex.: 
comprasTotalporCliente= [1080, 150, ... , 700, 150]
comprasTotalGeral = 7130
*/


