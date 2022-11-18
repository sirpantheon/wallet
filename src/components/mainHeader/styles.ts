import styles from 'styled-components'

export const Container = styles.div`
    grid-area: MH;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.white}
`;

export const Welcome = styles.h3`

`;

export const Profile = styles.div`
    border-bottom: 1px solid ${props => props.theme.colors.white}
`;

export const UserName = styles.span`

`;

