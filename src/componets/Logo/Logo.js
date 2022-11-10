import { Link } from 'react-router-dom'
import { LogoDev, SpanLink } from './styles';


export default function Logo() {

  return (
    <Link to='/'>
      <LogoDev>Dev<SpanLink>Link</SpanLink></LogoDev>
    </Link>
  )
}
