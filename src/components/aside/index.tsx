import Image from 'next/image'
import { Container, Header, MenuContainer, Title, MenuLink } from './styles'
import Logotipo from "../../assets/logo.svg"
import Link from 'next/link'
import { MdDashboard, MdArrowDownward, MdExitToApp, MdArrowUpward } from 'react-icons/md'

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
                <Link href={"/dashboard"}>
                    <MenuLink>
                        <MdDashboard />
                        Dashboard
                    </MenuLink>
                </Link>
                <Link href={"/list"}>
                    <MenuLink>
                        <MdArrowUpward />
                        Entradas
                    </MenuLink>
                </Link>
                <Link href={"/list"}>
                    <MenuLink>
                        <MdArrowDownward />
                        Saidas
                    </MenuLink>
                </Link>
                <Link href={"/"}>
                    <MenuLink>
                        <MdExitToApp />
                        Sair
                    </MenuLink>
                </Link>
            </MenuContainer>
        </Container>
    )
}