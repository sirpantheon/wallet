import { Container } from './styles';
import { BsGraphDown, BsGraphUp, BsCashCoin } from 'react-icons/bs';
import CountUp from 'react-countup';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'BsCashCoin' | 'BsGraphUp' | 'BsGraphDown';
    color: string;
}

export default function WalletBox(props: IWalletBoxProps) {

    function SelectIcon() {
        switch (props.icon) {
            case 'BsCashCoin':
                return <BsCashCoin />;
            case 'BsGraphUp':
                return <BsGraphUp />;
            case "BsGraphDown":
                return <BsGraphDown />;
            default:
                return null;
        }
    }


    return (
        <Container color={props.color}>
            <span>{props.title}</span>
            <h1>
                <CountUp
                    end={props.amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=','
                    decimals={2}
                    preserveValue
                />
            </h1>
            <small>{props.footerLabel}</small>
            {SelectIcon()}


        </Container>
    )
}