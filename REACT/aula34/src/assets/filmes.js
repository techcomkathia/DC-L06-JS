const filmes = [
    {
      id: 1,
      nome: "Harry Potter e a Pedra Filosofal",
      nota: 7.6,
      ano: 2001,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/b/be/Harry_Potter_e_a_Pedra_Filosofal.png/revision/latest?cb=20220901192427&path-prefix=pt-br",
      descricao: "Harry descobre ser um bruxo e começa seus estudos em Hogwarts, onde enfrenta perigos e segredos sobre seu passado."
    },
    {
      id: 2,
      nome: "Harry Potter e a Câmara Secreta",
      nota: 7.4,
      ano: 2002,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/6/61/Harry_Potter_e_a_C%C3%A2mara_Secreta.png/revision/latest/thumbnail/width/360/height/360?cb=20220901192631&path-prefix=pt-br",
      descricao: "Estranhos ataques paralisam alunos em Hogwarts e Harry precisa descobrir o que se esconde dentro da Câmara Secreta."
    },
    {
      id: 3,
      nome: "Harry Potter e o Prisioneiro de Azkaban",
      nota: 7.9,
      ano: 2004,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/8/8b/Harry_Potter_e_o_Prisioneiro_de_Azkaban.png/revision/latest?cb=20220901192746&path-prefix=pt-br",
      descricao: "Sirius Black, um perigoso prisioneiro, escapa de Azkaban e Harry descobre verdades obscuras sobre seu passado."
    },
    {
      id: 4,
      nome: "Harry Potter e o Cálice de Fogo",
      nota: 7.7,
      ano: 2005,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/9/93/Harry_Potter_e_o_C%C3%A1lice_de_Fogo.png/revision/latest/scale-to-width-down/1200?cb=20220901192935&path-prefix=pt-br",
      descricao: "Harry é misteriosamente inscrito no Torneio Tribruxo, enfrentando desafios mortais e o retorno de Voldemort."
    },
    {
      id: 5,
      nome: "Harry Potter e a Ordem da Fênix",
      nota: 7.5,
      ano: 2007,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/e/e1/Harry_Potter_e_a_Ordem_da_F%C3%AAnix.png/revision/latest?cb=20220901193104&path-prefix=pt-br",
      descricao: "Harry lida com a negação do retorno de Voldemort e forma a Armada de Dumbledore para lutar contra as trevas."
    },
    {
      id: 6,
      nome: "Harry Potter e o Enigma do Príncipe",
      nota: 7.6,
      ano: 2009,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/9/98/Harry_Potter_e_o_Enigma_do_Pr%C3%ADncipe.png/revision/latest?cb=20220901193215&path-prefix=pt-br",
      descricao: "Dumbledore mostra a Harry memórias do passado de Voldemort enquanto eles se preparam para a batalha final."
    },
    {
      id: 7,
      nome: "Harry Potter e as Relíquias da Morte – Parte 1",
      nota: 7.7,
      ano: 2010,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/6/6b/Harry_Potter_e_as_Rel%C3%ADquias_da_Morte_-_Parte_1.png/revision/latest?cb=20220901193406&path-prefix=pt-br",
      descricao: "Harry, Rony e Hermione abandonam Hogwarts para destruir as Horcruxes e derrotar Voldemort."
    },
    {
      id: 8,
      nome: "Harry Potter e as Relíquias da Morte – Parte 2",
      nota: 8.1,
      ano: 2011,
      imagem: "https://static.wikia.nocookie.net/dublagem/images/d/da/Harry_Potter_e_as_Rel%C3%ADquias_da_Morte_-_Parte_2.png/revision/latest?cb=20220901193526&path-prefix=pt-br",
      descricao: "A batalha final em Hogwarts decide o destino do mundo bruxo, com Harry enfrentando Voldemort uma última vez."
    },
    {
        id: 9,
        nome: "Missão: Impossível",
        nota: 7.8,
        ano: 1996,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/3/3f/Mission_Impossible_P%C3%B4ster.jpg",
        descricao: "Ethan Hunt, agente secreto da IMF, precisa limpar seu nome após ser acusado injustamente pela morte de sua equipe."
      },
      {
        id: 10,
        nome: "Missão: Impossível 2",
        nota: 6.5,
        ano: 2000,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/6/62/Mission_impossible_two_ver1.jpg",
        descricao: "Hunt enfrenta um ex-agente renegado que planeja liberar um vírus mortal. A missão exige decisões extremas e ação intensa."
      },
      {
        id: 11,
        nome: "Missão: Impossível 3",
        nota: 7.2,
        ano: 2006,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/b/bf/Miss%C3%A3o_Imposs%C3%ADvel_III.jpg/revision/latest?cb=20241114044705&path-prefix=pt-br",
        descricao: "Ethan volta à ativa para salvar uma agente capturada, enquanto enfrenta um traficante de armas implacável."
      },
      {
        id: 12,
        nome: "Missão: Impossível - Protocolo Fantasma",
        nota: 7.9,
        ano: 2011,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/b/b6/Miss%C3%A3o_Imposs%C3%ADvel_4.jpg/revision/latest?cb=20241114153608&path-prefix=pt-br",
        descricao: "Após a IMF ser desativada, Hunt e sua equipe devem agir por conta própria para deter um ataque nuclear iminente."
      },
      {
        id: 13,
        nome: "Missão: Impossível - Nação Secreta",
        nota: 7.6,
        ano: 2015,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/a/a2/Miss%C3%A3o_Imposs%C3%ADvel_5.jpg/revision/latest?cb=20241114161914&path-prefix=pt-br",
        descricao: "Ethan enfrenta o Sindicato, uma organização secreta de agentes renegados tão habilidosos quanto a IMF."
      },
      {
        id: 14,
        nome: "Missão: Impossível - Efeito Fallout",
        nota: 8.0,
        ano: 2018,
        imagem: "https://m.media-amazon.com/images/I/81pT-R+q6PL._AC_SY679_.jpg",
        descricao: "https://static.wikia.nocookie.net/dublagem/images/5/5c/Efeito_Fallout.jpg/revision/latest?cb=20241114164543&path-prefix=pt-br."
      },
      {
        id: 15,
        nome: "Missão: Impossível - Acerto de Contas Parte 1",
        nota: 8.2,
        ano: 2023,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/f/f8/Miss%C3%A3o-_Imposs%C3%ADvel_-_Acerto_de_Contas_Parte_1.jpg/revision/latest?cb=20241114032636&path-prefix=pt-br",
        descricao: "A ameaça global de uma inteligência artificial coloca Hunt em sua missão mais perigosa até hoje."
      },
      {
        id: 16,
        nome: "Os Vingadores",
        nota: 8.2,
        ano: 2012,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/4/43/Os_Vingadores.png/revision/latest?cb=20220604202707&path-prefix=pt-br",
        descricao: "Os maiores heróis da Terra se unem pela primeira vez para impedir que Loki e um exército alienígena conquistem o planeta."
      },
      {
        id: 17,
        nome: "Vingadores: Era de Ultron",
        nota: 7.6,
        ano: 2015,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/d/d8/Vingadores_-_Era_de_Ultron.png/revision/latest?cb=20220710194930&path-prefix=pt-br",
        descricao: "Tony Stark cria Ultron para proteger o mundo, mas a inteligência artificial se volta contra a humanidade e os Vingadores precisam detê-la."
      },
      {
        id: 18,
        nome: "Vingadores: Guerra Infinita",
        nota: 8.5,
        ano: 2018,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/0/0d/Vingadores_-_Guerra_Infinita.png/revision/latest?cb=20220712102237&path-prefix=pt-br",
        descricao: "Os Vingadores e seus aliados enfrentam Thanos, que busca reunir as Joias do Infinito para dizimar metade do universo."
      },
      {
        id: 19,
        nome: "Vingadores: Ultimato",
        nota: 8.7,
        ano: 2019,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/7/74/Vingadores_-_Ultimato.png/revision/latest?cb=20220712102335&path-prefix=pt-br",
        descricao: "Após os eventos devastadores de Guerra Infinita, os heróis sobreviventes elaboram um plano para reverter o estalo de Thanos e restaurar o universo."
      },
      {
        id: 20,
        nome: "A Origem",
        nota: 8.8,
        ano: 2010,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/6/6e/A_Origem.png/revision/latest?cb=20230927000347&path-prefix=pt-br",
        descricao: "Um ladrão que invade os sonhos das pessoas aceita uma última missão: plantar uma ideia na mente de um alvo."
      },
      {
        id: 21,
        nome: "Avatar",
        nota: 7.9,
        ano: 2009,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/1/19/Avatar.jpg/revision/latest?cb=20240326045402&path-prefix=pt-br",
        descricao: "Em Pandora, um ex-fuzileiro humano se envolve em um conflito entre colonizadores e os nativos Na'vi."
      },
      {
        id: 22,
        nome: "Avatar: O Caminho da Água",
        nota: 7.6,
        ano: 2022,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/7/7b/Avatar_-_O_Caminho_da_%C3%81gua.jpg/revision/latest?cb=20240326154912&path-prefix=pt-br",
        descricao: "Jake Sully vive com sua nova família em Pandora, mas velhas ameaças voltam a surgir, levando a um novo conflito épico."
      },
      {
        id: 23,
        nome: "Barbie",
        nota: 7.2,
        ano: 2023,
        imagem: "https://static.wikia.nocookie.net/dublagem/images/e/e9/Barbie_The_Movie.jpeg/revision/latest/scale-to-width-down/1000?cb=20240930013132&path-prefix=pt-br",
        descricao: "Barbie parte em uma jornada ao mundo real após começar a questionar a perfeição de Barbieland. Uma comédia com crítica social afiada."
      }
  ];


  export default filmes