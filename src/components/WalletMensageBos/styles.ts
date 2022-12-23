import styled from 'styled-components'

interface IContainer{
    color: string;
}

export const Container = styled.div<IContainer>`
    width: 48%;
    height: 15rem;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border-radius: 15px;
    padding: 10px 20px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    header {
        width:100%;
        display: flex;
        margin-bottom: 2.5rem ;
    }
    header > div {
        width: 100% ;
        display: flex;
        justify-content: space-between;
        color: ${props => props.color};

        >svg{
            font-size: 8rem;
        }
    }
`;