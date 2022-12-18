import { Container, Title, Controllers } from './styles'

interface IContentHeaderprops {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

export const ContentHeader: React.FC<IContentHeaderprops> = ({ title, lineColor, children }) => {

    return (
        <Container>
            <Title lineColor={lineColor}>
                <h1>{title}</h1>
            </Title>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}