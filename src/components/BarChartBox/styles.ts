import styled from 'styled-components'

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;
    margin: 10px 0;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border-radius: 15px;
    display: flex;
`;
export const SideLeft = styled.div`
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    
    >h2{
      margin-bottom: 10px;
      padding-left: 16px;
    }
`;
export const SideRight = styled.div`
    min-width: 60%;
    height: 90%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
`;
export const LegendContainer = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
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
