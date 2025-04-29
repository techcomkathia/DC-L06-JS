import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduto({img, titulo, descricao}) {

    function adicionarCarrinho() {
        alert('Produto adicionado ao carrinho')}

  return (
    <Card style={{ width: '18rem', backgroundColor: 'red' }} className='my-3 mx-1 bg-success'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
         {descricao}
        </Card.Text>
        <Button variant="primary" onClick={adicionarCarrinho}>Adicionar carrinho</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduto;