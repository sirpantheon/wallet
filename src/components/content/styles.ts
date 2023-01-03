import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    padding: 2rem;
    height: calc(100vh - 10vh);
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 3px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 3px;
    }
`;

