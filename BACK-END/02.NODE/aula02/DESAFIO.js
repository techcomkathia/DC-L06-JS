// você possui um array de objetos. Os objetos representam produtos de 3 categorias diferentes. Crie um programa que percorre o array e adicione o objeto em um arquivo de json, que deverá ser criado na pasta chamada dados. O nome do arquivo deverá ser a categoria do produto. 

let produtos = [
    
    { id:1,
        categoria: 'Eletrônico',
        nome: 'Notebook',
        preco: 5000
    },
    { id:2,
        categoria: 'Eletrônico',
        nome: 'Smartphone',
        preco: 3000
    },
    {
        id:3,
        nome: 'Mesa',
        categoria: 'Móveis',
        preco: 1000
    },
    {
        id:4,
        nome: 'Cadeira',
        categoria: 'Móveis',
        preco: 500
    },
    {
        id:5,
        nome: 'poltrona',
        categoria: 'Móveis',
        preco: 2000
    },
    {
        id:6,
        nome: 'livro',
        categoria: 'Livros',
        preco: 50
    }

]

// arquivo eletrônico.json - a representação em json do array de produtos eletrônico

// arquivo móveis.json - a representação em json do array de produtos móveis

// arquivo livros.json - a representação em json do array de produtos livros