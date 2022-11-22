import styles from 'styled-components'

export const Container = styles.div`
    display: flex;
    background-color: ${props => props.theme.colors.primary};
`;