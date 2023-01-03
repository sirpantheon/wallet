import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 15rem;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    margin: 10px 0;
    border-radius: 15px;
    display: flex;
`;
export const SideLeft = styled.aside`
    padding: 30px 20px;
    >h2{
        margin-bottom: 20px;
    }
`;
export const LegendContainer = styled.ul`
    list-style-type: none;
`;
export const Legend = styled.li<ILegendProps>`
    display:flex;
    align-items: center;
    margin-bottom: 8px;
    font-size: 1.3rem;

    > div{
        background-color: ${props => props.color};
        display:flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin: 5px;
        border: 1px solid ${props => props.theme.colors.white};
        padding: 10px;
    }
`;
export const SideRight = styled.main`
    width: 50%;
    display:flex;
    justify-content: center;
`;