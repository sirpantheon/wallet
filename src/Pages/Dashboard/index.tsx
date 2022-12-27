
import { useMemo, useState } from "react";
import { SelectInput } from "../../Components/SelectInput";
import { ContentHeader } from "../../Components/contentHeader";
import { Container, Content } from "./styles";
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";
import ListOfMonths from "../../Components/utils/months";
import WalletBox from "../../Components/WalletBox";
import WalletMensageBox from "../../Components/WalletMensageBos";
import PieChartBox from "../../Components/PieCharts";

export default function Dashboard() {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    function handleMonthSelected(month: string) {
        try {
            const parseMonth = Number(month)
            setMonthSelected(parseMonth)
        } catch {
            throw new Error('Més Invalido')
        }
    }

    function handleYearSelected(year: string) {
        try {
            const parseYear = Number(year)
            setYearSelected(parseYear)
        } catch {
            throw new Error('Ano Invalido')

        }
    }

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => {
            return { value: year, label: year, }
        })
    }, []);

    const months = useMemo(() => {
        return ListOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth();

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error("Number Invalid!");

                }
            }
        })
        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth();

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error("Number Invalid!");

                }
            }
        })
        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;

    }, [totalGains, totalExpenses])

    const BalanceExpencesXGains = useMemo(() => {
        const total = totalGains - totalExpenses;
        const GainsPercent = (total / totalGains) * 100;
        const ExpencesPercent = (total / totalExpenses) * 100;

        const data = [
            {
                name: 'Entradas',
                value: totalGains,
                percent: Number(GainsPercent.toFixed(0)),
                color: "#4E41F0"
            },
            {
                name: 'Saidas',
                value: totalExpenses,
                percent: Number(ExpencesPercent.toFixed(0)),
                color: "#E44C4E"
            }
        ]

        return data

    }, [totalGains, totalExpenses])

    const message = useMemo(() => {
        if (totalBalance > 0) {
            return {
                color: "#00D48D",
                title: "Muito Bem!!",
                description: "Sua Carteira Esta Positiva!!!",
                footerText: "Continue Assim... Considere Fazer Mais Investimentos."
            }
        } else if (totalBalance === 0) {
            return {
                color: "#4E41F0",
                title: "Por Pouco!",
                description: "As Contas Ficaram Apertadas Esse mês",
                footerText: "Seja Mais Calteloso Com o Seus Gastos."
            }
        } else {
            return {
                color: "#E44C4E",
                title: "Cuidado!!!",
                description: "Fechou No Vermelho esse mês... ",
                footerText: "Seja Mais Calteloso Com o Seus Gastos."
            }
        }
    }, [totalBalance])


    return (
        <Container>
            <ContentHeader title="DashBoard" lineColor="#00D48D">
                <SelectInput
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="Saldo"
                    color="#00D48D"
                    footerLabel="Atualizado conforme as entradas e saidas"
                    amount={totalBalance}
                    icon='BsCashCoin'
                />
                <WalletBox
                    title="Entradas"
                    color="#4E41F0"
                    footerLabel="Atualizado conforme as entradas e saidas"
                    amount={totalGains}
                    icon='BsGraphUp'
                />
                <WalletBox
                    title="Saidas"
                    color="#E44C4E"
                    footerLabel="Atualizado conforme as entradas e saidas"
                    amount={totalExpenses}
                    icon='BsGraphDown'
                />
                <WalletMensageBox
                    color={message.color}
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                />
                <PieChartBox data={BalanceExpencesXGains} />
            </Content>
        </Container>
    )
}