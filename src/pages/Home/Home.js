import { 
  Container, 
  Title,
  Span, 
  Links,
  LinkArea, 
  LinkText 
} from './styles';

export default function Home() {
  return (
    <Container>
      <Title>Andressa Helena</Title>
      <Span>Veja meus links</Span>
      <Links>
        <LinkArea>
          <a href='#'>
            <LinkText>Canal no Youtube</LinkText>
          </a>
        </LinkArea>
        <LinkArea>
          <a href='#'>
            <LinkText>Canal no Youtube</LinkText>
          </a>
        </LinkArea>
        <LinkArea>
          <a href='#'>
            <LinkText>Canal no Youtube</LinkText>
          </a>
        </LinkArea>
      </Links>
    </Container>
  )
}