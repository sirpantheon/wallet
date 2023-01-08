
import { useMemo, useState, useCallback } from "react";
import { SelectInput } from "../../Components/SelectInput";
import { ContentHeader } from "../../Components/contentHeader";
import { Container, Content } from "./styles";
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";
import ListOfMonths from "../../Components/utils/months";
import WalletBox from "../../Components/WalletBox";
import WalletMensageBox from "../../Components/WalletMensageBos";
import PieChartBox from "../../Components/PieCharts";
import HistoryBox from "../../Components/HistoryBox";
import BarChartBox from "../../Components/BarChartBox";

export default function Dashboard() {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month)
            setMonthSelected(parseMonth)
        } catch {
            throw new Error('Més Invalido')
        }
    },[])

    const handleYearSelected = useCallback((year: string)=> {
        try {
            const parseYear = Number(year)
            setYearSelected(parseYear)
        } catch {
            throw new Error('Ano Invalido')

        }
    },[])

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

    const historyData = useMemo(() => {
        return ListOfMonths.map((_, month) => {
            let amountEntry = 0
            gains.forEach(item => {
                const date = new Date(item.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(item.amount)
                    } catch {
                        throw new Error('Amount entry is Invalid')
                    }
                }
            }
            )
            let amountOutput = 0
            expenses.forEach(item => {
                const date = new Date(item.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(item.amount)
                    } catch {
                        throw new Error('Amount entry is Invalid')
                    }
                }
            }
            )

            return {
                monthNumber: month,
                month: ListOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput
            }
        }).filter(item => {

            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        })

    }, [yearSelected])

    const BalanceExpencesXGains = useMemo(() => {
        const total = totalGains + totalExpenses;
        const GainsPercent = Number(((totalGains / total) * 100).toFixed(0));
        const ExpencesPercent = Number(((totalGains / total) * 100).toFixed(0));

        const data = [
            {
                name: 'Entradas',
                value: totalGains,
                percent: GainsPercent ? GainsPercent : 0,
                color: "#4E41F0"
            },
            {
                name: 'Saidas',
                value: totalExpenses,
                percent: ExpencesPercent ? ExpencesPercent : 0,
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
        } else if (totalGains === 0 && totalExpenses === 0) {
            return {
                color: "#bebebe",
                title: "Não ha registros...",
                description: "As Contas Ficaram Apertadas Esse mês",
                footerText: "Seja Mais Calteloso Com o Seus Gastos."
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
    }, [totalBalance, totalGains, totalExpenses])

    const ExpencesRecurrentVesusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((expense) => {
            if (expense.frequency === 'recorrente') {
                return amountRecurrent += Number(expense.amount);
            }
            if (expense.frequency === 'eventual') {
                return amountEventual += Number(expense.amount);
            }
        })

        const total = amountEventual + amountRecurrent;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(0))
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(0))

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#4E41F0"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#E44C4E"
            },
        ]
    }, [monthSelected, yearSelected])

    const GainsRecurrentVesusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((gain) => {
            if (gain.frequency === 'recorrente') {
                return amountRecurrent += Number(gain.amount);
            }
            if (gain.frequency === 'eventual') {
                return amountEventual += Number(gain.amount);
            }
        })

        const total = amountEventual + amountRecurrent;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(0))
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(0))

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#4E41F0"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#E44C4E"
            },
        ]
    }, [monthSelected, yearSelected])


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
                    icon='HiOutlineCurrencyDollar'
                />
                <WalletBox
                    title="Entradas"
                    color="#4E41F0"
                    footerLabel="Atualizado conforme as entradas e saidas"
                    amount={totalGains}
                    icon='BsArrowUpRight'
                />
                <WalletBox
                    title="Saidas"
                    color="#E44C4E"
                    footerLabel="Atualizado conforme as entradas e saidas"
                    amount={totalExpenses}
                    icon='BsArrowDownRight'
                />
                <WalletMensageBox
                    color={message.color}
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                />
                <PieChartBox data={BalanceExpencesXGains} />
                <HistoryBox data={historyData} lineColorAmountEntry='#4E41F0' lineColorAmountOutput="#E44C4E" />
                <BarChartBox data={ExpencesRecurrentVesusEventual} title="Saidas" />
                <BarChartBox data={GainsRecurrentVesusEventual} title="Entradas" />
            </Content>
        </Container>
    )
}