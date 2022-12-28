import { Container } from './styles';
import { BsArrowUpRight, BsArrowDownRight } from 'react-icons/bs';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import CountUp from 'react-countup';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'HiOutlineCurrencyDollar' | 'BsArrowUpRight' | 'BsArrowDownRight';
    color: string;
}

export default function WalletBox(props: IWalletBoxProps) {

    function SelectIcon() {
        switch (props.icon) {
            case 'HiOutlineCurrencyDollar':
                return <HiOutlineCurrencyDollar />;
            case 'BsArrowUpRight':
                return <BsArrowUpRight />;
            case "BsArrowDownRight":
                return <BsArrowDownRight />;
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