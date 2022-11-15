import styles from 'styled-components'

export const Container = styles.div`
    grid-area: MH;
    background-color: ${props => props.theme.colors.secondary};
`;