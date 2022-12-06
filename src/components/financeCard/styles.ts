import styled from 'styled-components'


interface ITagProps {
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 3px;
    height: 4rem;
    margin: 10px 0;
    padding: 15px 10px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;

    position: relative;

    &:hover{
        opacity: 0.8;
        transform: translateX(8px);
        font-size: 1.1rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 80%;
    left: 0;
    background-color: ${props => props.color};
    position: absolute;
    border-radius: 0 5px 5px 0;
`;