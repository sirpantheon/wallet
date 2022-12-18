import styled from 'styled-components'

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.white};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 75px;
`
export const Title = styled.h2`
    color: ${props => props.theme.colors.warning};
    margin-left: 20px;
`
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    a{
        text-decoration: none;
        margin: 10px 0;
    };

`
export const MenuLink = styled.a`
    color: ${props => props.theme.colors.white};
    transition: opacity 0.8s, margin-left 0.3s, color 0.3s, background-color 00.3s ;
    display: flex;
    align-items:center;
    padding: 10px;
    border-radius: 50px 0 0 50px;

    &:hover {
        opacity: .8;
        margin-left:15px;
        color: ${props => props.theme.colors.info};
        background-color: ${props => props.theme.colors.primary};
    }
    > svg{
        font-size:25px;
        margin-right:10px;
    }
`
