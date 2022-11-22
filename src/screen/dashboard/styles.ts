import styles from 'styled-components'
export const Container = styles.div`
    grid-area: CT;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary};
`;