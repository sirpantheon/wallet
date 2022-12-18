import styled from 'styled-components'

export const Container = styled.div`

`;
export const Content = styled.div`

`;
export const Filters = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    margin-bottom:2rem;

    .tag-filter{
        font-size:1rem;
        font-weight:500;
        background: none;
        color: ${props => props.theme.colors.white};
        margin:0 3rem;
        transition: opacity 0.3s;
        &:hover{
            opacity: .6;
        }
    }
        
        .tag-filter-recurrents::after{
            content: "";
            display: block;
            width: 50%;
            margin:0 auto;
            border: 3px solid ${props => props.theme.colors.warning}

        }

        .tag-filter-eventuals::after{
            content: "";
            display: block;
            width: 50%;
            margin:0 auto;
            border: 3px solid ${props => props.theme.colors.success}

        }
    
`;