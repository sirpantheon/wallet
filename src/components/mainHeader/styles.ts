import styles from 'styled-components'

export const Container = styles.div`
    grid-area: MH;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
`;