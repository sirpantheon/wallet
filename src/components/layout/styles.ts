import styles from 'styled-components'

export const Grid = styles.div`
    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: 10vh 90vh;

    grid-template-areas:
    'AS MH'
    'AS CT';

    height: 100vh;
`;