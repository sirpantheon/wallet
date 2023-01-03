import styled from "styled-components"

interface ILegendProps {
    color: string;
}

export const  Container = styled.div`
    width: 100%;
    height: 23rem;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    margin: 1rem 0;
    padding: 1rem 1rem 3rem 1rem;
    border-radius: 15px;
    display:flex;
    flex-direction: column;
    align-items: center;

`;
export const Header = styled.header`
    width: 97%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    
`;
export const LegendContainer = styled.ul`
    list-style-type: none;
    display: flex;
`;
export const Legend = styled.li<ILegendProps>`
    display:flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: .9rem;
    margin-left: 1rem;

    > div{
        background-color: ${props => props.color};
        display:flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin: 5px;
        border: 1px solid ${props => props.theme.colors.white};
        padding: 10px;
    }
    > span {
        color: ${props => props.theme.colors.white};
    }
`;
