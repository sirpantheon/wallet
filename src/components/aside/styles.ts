import styled from 'styled-components'

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.white};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`
export const Title = styled.h2`
    color: ${props => props.theme.colors.white};
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
    transition: opacity 0.8s, margin-left 0.8s ;

    &:hover {
        opacity: .8;
        margin-left:10px;
  }
`
