import { SelectInput } from "../../Components/SelectInput";
import { ContentHeader } from "../../Components/contentHeader";
import FinanceCard from "../../Components/financeCard";
import { Container, Content, Filters } from "./styles";
import { useMemo, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";
import formatCurrency from "../../Components/utils/FormatCurrency";
import formatDate from "../../Components/utils/FormatDate";

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

export default function List() {
    const [data, setData] = useState<IData[]>([]);
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const { type } = useParams();

    const props = useMemo(() => {
        return type === 'entry-balance' ?
            { title: 'Entradas', lineColor: '#4E41F0', list: gains } :
            { title: 'Saídas', lineColor: '#E44C4E', list: expenses }
    }, [type]);

    useEffect(() => {

        const filteredData = props.list.filter(item => {

            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formatedDate = filteredData.map(item => {
            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0'
            }
        })

    setData(formatedDate)
}, [data.length, monthSelected, yearSelected, props.list ])


const months = [
    { value: 1, label: "janeiro" },
    { value: 2, label: "fevereiro" },
    { value: 3, label: "março" },
    { value: 4, label: "abril" },
    { value: 5, label: "maio" },
    { value: 6, label: "junho" },
    { value: 7, label: "julho" },
    { value: 8, label: "agosto" },
    { value: 9, label: "setembro" },
    { value: 10, label: "outubro" },
    { value: 11, label: "novembro" },
    { value: 12, label: "dezembro" }
]

const years = [
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
    { value: 2025, label: 2025 },
    { value: 2026, label: 2026 }

]

return (
    <Container>
        <ContentHeader title={props.title} lineColor={props.lineColor}>
            <SelectInput
                options={months}
                onChange={(e) => setMonthSelected(e.target.value)}
                defaultValue={monthSelected}
            />
            <SelectInput
                options={years}
                onChange={(e) => setYearSelected(e.target.value)}
                defaultValue={yearSelected}
            />
        </ContentHeader>

        <Filters>
            <button type="button" className="tag-filter tag-filter-recurrents">
                Recorrentes
            </button>
            <button type="button" className="tag-filter tag-filter-eventuals">
                Eventuais
            </button>
        </Filters>

        <Content>
            {
                data.map(item => (
                    <FinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amountFormatted}
                    />
                ))
            }
        </Content>
    </Container>

)
}

