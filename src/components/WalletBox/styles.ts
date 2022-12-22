import styled from 'styled-components'

interface IContainerProps{
    color: string;
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    width: 32%;
    height: 30vh;
    color: ${props => props.theme.colors.white};
    padding: 10px 20px;
    margin: 10px 0;
    position: relative;
    overflow: hidden;

    > svg {
        /* font-size: 2330%; */
        font-size: 20rem;
        position: absolute;
        top: -40px;
        left: -30px;
        opacity: .3;
    }

    > span {
        font-size: 1.3rem;
        font-weight: 500;
    }
    >small {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
    }
`;

