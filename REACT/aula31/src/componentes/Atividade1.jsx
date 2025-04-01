// faça a instalação do bootstrap e a instalação do react-bootstrap
// npm install react-bootstrap bootstrap

// link o cdn do bootstrap no index.html
/*<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>*/

// crie um componente chamado carrosel que vai renderizar 3 imagens diferentes
/*https://react-bootstrap.netlify.app/docs/components/carousel*/

// utilize o componente carrosel no App.jsx


import Carousel from 'react-bootstrap/Carousel';
import gato1 from '../assets/cat1.jpg';
import gato3 from '../assets/cat3.jpg';

function Atividade1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gatinho 1"
        />
        <Carousel.Caption>
          <h5>Gatinho 1</h5>
          <p>Exemplo de pet fofinho</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gato1}
          alt="Gato 2"
        />
        <Carousel.Caption>
          <h5>Gatinho 2</h5>
          <p>Exemplo de pet fofinho</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gato3}
          alt="Gato 3"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Atividade1;