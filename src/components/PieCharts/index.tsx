import { Container, Legend, SideLeft, SideRight, LegendContainer } from './styles';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface IPieChartProps {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

export default function PieChartBox(props: IPieChartProps) {
    return (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    {
                        props.data.map(indicator => (
                            <Legend key={indicator.name} color={indicator.color}>
                                <div>{indicator.percent}%</div>
                                <span>{indicator.name}</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={props.data}
                            dataKey='percent'
                            labelLine={false}
                        >
                            {
                                props.data.map((indicator) => (
                                    <Cell key={indicator.name} fill={indicator.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}