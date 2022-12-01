import { Container, Title, Controllers } from './styles'


interface IContentHeaderprops {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

export default function ContentHeader(props: IContentHeaderprops) {



    return (
        <Container>
            <Title lineColor={props.lineColor}>
                <h1>{props.title}</h1>
            </Title>
            <Controllers>
                {props.children}
            </Controllers>
        </Container>
    )
}