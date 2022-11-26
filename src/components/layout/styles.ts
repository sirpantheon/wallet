import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: 8vh 92vh;

    grid-template-areas:
    'AS MH'
    'AS CT';

    height: 100vh;
`;