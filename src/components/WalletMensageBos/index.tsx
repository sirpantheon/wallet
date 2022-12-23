import { Container } from "./styles";
import { SiCashapp } from 'react-icons/si'

interface IWalletMensageBoxProps {
    color: string;
    title: string;
    description: string;
    footerText: string;
}

export default function WalletMensageBox(props: IWalletMensageBoxProps) {
    return (
        <Container color={props.color}>
            <header>
                <div>
                    <h1>{props.title}</h1>
                    <SiCashapp />
                </div>

            </header>

            <footer>
                <p>{props.description}</p>
                <span>{props.footerText}</span>
            </footer>

        </Container>
    )
}