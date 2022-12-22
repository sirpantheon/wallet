import { Container, Header, MenuContainer, MenuLink, Title } from './styles';
import { MdDashboard, MdArrowDownward, MdExitToApp, MdArrowUpward } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';

export default function Aside() {
    return (
        <Container>
            <Header>  
                <GiWallet />
                <Title>The Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuLink href='/dashboard'>
                    <MdDashboard />Dashboard
                </MenuLink>
                <MenuLink href='/list/entry-balance'>
                    <MdArrowUpward />Entradas
                </MenuLink>
                <MenuLink href='/list/exit-balance'>
                    <MdArrowDownward />Saidas
                </MenuLink>
                <MenuLink href='#'>
                    <MdExitToApp />Exit
                </MenuLink>
            </MenuContainer>
        </Container>
    )
}