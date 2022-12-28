import styled from 'styled-components'

interface IContainerProps{
    color: string;
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    width: 32%;
    height: 20vh;
    color: ${props => props.theme.colors.white};
    padding: 10px 20px;
    margin: 10px 0;
    position: relative;
    overflow: hidden;

    > h1{
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${props => props.theme.colors.primary};
    }

    > svg {
        /* font-size: 2330%; */
        font-size: 12vw;
        position: absolute;
        top: -1vw;
        left: 25vh;
        opacity: .6;
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

