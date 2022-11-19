import Image from 'next/image'
import { Container, Header, MenuContainer, Title, MenuLink } from './styles'
import Logotipo from "../../assets/logo.svg"
import Link from 'next/link'

export default function Aside() {
    return (
        <Container>
            <Header>
                <div>

                    <Image src={Logotipo} alt="Logo My Wallet" />
                </div>

                <Title>My Wallet</Title>
            </Header>

            <MenuContainer>
                <Link href={"/"}><MenuLink>Dashboard</MenuLink></Link>
                <Link href={"/"}><MenuLink>Entradas</MenuLink></Link>
                <Link href={"/"}><MenuLink>Saidas</MenuLink></Link>
                <Link href={"/"}><MenuLink>Sair</MenuLink></Link>
            </MenuContainer>
        </Container>
    )
}