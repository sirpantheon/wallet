import { Container, Tag } from './styles'

interface IFinanceCardProps {
    cardColor: string;
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

export default function FinanceCard(props: IFinanceCardProps) {
    return (
        <Container color={props.cardColor}>
            <Tag color={props.tagColor} />
            <div>
                <span>{props.title}</span>
                <small>{props.subtitle}</small>
            </div>
            <h3>{props.amount}</h3>
        </Container>
    )
}