import styles from 'styled-components'

export const Container = styles.div`
    display: relative;
    width: 50%;
    background-color: ${props => props.theme.colors.primary};
`;