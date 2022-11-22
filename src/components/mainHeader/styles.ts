import styles from 'styled-components'

export const Container = styles.div`
    display: flex;
    width: 80vw;
    height: 3.75vw;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.white};
`;
export const Welcome = styles.h3`
`;
export const Profile = styles.div`
    border-bottom: 1px solid ${props => props.theme.colors.white};
`;
export const UserName = styles.span`

`;

