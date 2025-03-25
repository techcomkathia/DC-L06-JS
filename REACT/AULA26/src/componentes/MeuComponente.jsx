// função de criação do componente(sempre com inicial maiúscula no nome do arquivo e da função)

import './MeuComponente.css'
function MeuComponente() {
    // rendirzar um título h2 e um parágrafo com texto
    const coisas = [ 'coisa1', 'coisa2', 'coisa3' ]

    return(
        <>
            <h2>Meu componente de exemplo</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <ul className='azul'>
                <li>{`sou um texto escrito com lógica JS ${coisas[0]}`}</li>
                <li>{coisas[1]}</li>
                <li>{coisas[2]}</li>
                <li>{25**50}</li>
            </ul>
        </>
        
    )
}
//exportação do componente
export default MeuComponente

// Crie um componente chamado Favoritos
// Ele deve renderizar um título h2 e uma lista com 5 itens favoritos (livros, filmes, comidas, músicas... o que você quiser)
// Exporte e use no App.jsx


const filme={
    titulo:'Shrek para Sempre',
    imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/90/45/19962744.jpg',
    nota:4.1,
    duracao:'1h 33min',
    data:'9 de julho de 2010 No cinema',
    elenco: ['Mike Myers', 'Eddie Murphy', 'Cameron Diaz'],
    sinopse: 'Shrek (Mike Myers) está entediado. Sua antiga vida de aventuras foi substituída pela de pacato pai de família. Casado com Fiona (Cameron Diaz) e pai de três filhos, Shrek sente falta da adrenalina e da liberdade que tinha no passado. Para recuperá-los, ele firma um pacto com Rumpelstiltiskin (Walt Dohrm). Imediatamente Shrek é levado a uma versão alternativa do Reino de Tão, Tão Distante, onde Fiona é uma temível ogro e ele não é mais reconhecido pelo Burro (Eddie Murphy) e o Gato de Botas (Antonio Bandera), seus melhores amigos.'
    }

// crie um componente chamado Filme
// ele deve renderizar uma imagem, um título, uma nota, uma duração, uma data de estreia, um elenco e o resumo


