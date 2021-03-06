import styled from 'styled-components'
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Link href="/"><a>Home</a></Link>
      <Link href="/new"><a>Create post</a></Link>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191D1E;
  padding: 2rem;
  a {
    color: white;
    opacity: .8;
    font-size: 2rem;
    padding: 0 1rem;
  }
  a:hover {
    opacity: 1;
    text-decoration: none;
  }
`
