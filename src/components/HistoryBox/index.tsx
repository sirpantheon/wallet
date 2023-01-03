import { Container, Header, Legend, LegendContainer } from "./styles";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import formatCurrency from '../utils/FormatCurrency';

interface IHistoryBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

export default function HistoryBox(props: IHistoryBoxProps) {
    return (
        <Container>
            
            <Header>
                <h2>Historico de Saldo</h2>
                <LegendContainer>
                    <Legend color={props.lineColorAmountEntry}>
                        <div></div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color={props.lineColorAmountOutput}>
                        <div></div>
                        <span>Saidas</span>
                    </Legend>
                </LegendContainer>
            </Header>
            <ResponsiveContainer>
                <LineChart data={props.data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#c5c5c5" />
                    <XAxis dataKey='month' stroke="#e5e5e5" />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Line
                        type="monotone"
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={props.lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{ r: 6 }}
                        activeDot={{ r: 9 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="amountEntry"
                        name="Entradas"
                        stroke={props.lineColorAmountEntry}
                        strokeWidth={5}
                        dot={{ r: 6 }}
                        activeDot={{ r: 9 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}