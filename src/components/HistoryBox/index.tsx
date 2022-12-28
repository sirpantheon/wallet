import { Container } from "./styles";
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

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
            <h2>Historico de Saldo</h2>
            <ResponsiveContainer>
                <LineChart data={props.data}>
                    <CartesianGrid strokeDasharray='3 3' stroke="#c5c5c5" />
                    <XAxis dataKey='month' stroke="#e5e5e5" />
                    <Tooltip />
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