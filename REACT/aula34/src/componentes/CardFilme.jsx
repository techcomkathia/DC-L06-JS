import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardFilme({filme}) {
  return (
    <Card style={{ width: '18rem' }} key={filme.id} className='my-3 mx-1'>
      <Card.Img variant="top" src={filme.imagem} />
      <Card.Body>
        <Card.Title>{filme.nome}</Card.Title>
        <Card.Text> {filme.descricao}</Card.Text>
        <Link to={`/filmes/${filme.id}`} className='btn btn-primary'>Detalhes</Link>
      </Card.Body>
    </Card>
  );
}

export default CardFilme;