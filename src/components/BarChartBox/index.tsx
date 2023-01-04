import formatCurrency from '../utils/FormatCurrency';
import { Container, Legend, LegendContainer, SideLeft, SideRight } from './styles';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

interface IBarChartBox {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[],
}


export default function BarChartBox({data, title}: IBarChartBox) {
    return (
        <Container>
            <SideLeft>
                <h2>{title}</h2>
                <LegendContainer>
                    {
                        data.map((item)=>(
                            <Legend key={item.name} color={item.color}>
                                <div>{item.percent}%</div>
                                <span>{item.name}</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount">
                            {data.map((item)=>(
                                <Cell 
                                    key={item.name}
                                    cursor="pointer"
                                    fill={item.color}
                                />
                            ))}
                        </Bar>
                        <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}