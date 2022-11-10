import Logo  from '../../componets/Logo'
import { Container, Title, BackLink } from './styles';

export default function Error() {
  
  return (
    <Container>
      <Logo/>
        <Title>Está página que você está procurando não existe!</Title>
        <BackLink to='/'>Voltar para Home</BackLink>
    </Container>
  )
}
