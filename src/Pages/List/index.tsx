import { SelectInput } from "../../Components/SelectInput";
import { ContentHeader } from "../../Components/contentHeader";
import FinanceCard from "../../Components/financeCard";
import { Container, Content, Filters } from "./styles";
import { useMemo, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";
import formatCurrency from "../../Components/utils/FormatCurrency";
import formatDate from "../../Components/utils/FormatDate";
import { v4 as uuidv4 } from 'uuid';
import ListOfMonths from "../../Components/utils/months";

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
    const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);
    const { type } = useParams();

    const props = useMemo(() => {
        return type === 'entry-balance' ?
            { title: 'Entradas', lineColor: '#4E41F0', list: gains } :
            { title: 'Saídas', lineColor: '#E44C4E', list: expenses }
    }, [type]);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        props.list.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => {
            return { value: year, label: year, }
        })
    }, [props.list]);

    const months = useMemo(() => {
        return ListOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    }, []);

    function handleFrenquencyClick(frequency: string) {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
        if (alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(f => f != frequency)
            setSelectedFrequency(filtered)
        } else {
            setSelectedFrequency((prev) => [...prev, frequency])
        }
    }

    useEffect(() => {

        const filteredData = props.list.filter(item => {

            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formatedDate = filteredData.map(item => {
            return {
                id: uuidv4(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ?'#4E41F0': '#E44C4E' 
            }
        })

        setData(formatedDate)
    }, [data.length, monthSelected, yearSelected, props.list, selectedFrequency])

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
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrents ${selectedFrequency.includes('recorrente') && 'tag-actived'
                        }`}
                    onClick={() => handleFrenquencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventuals ${selectedFrequency.includes('eventual') && 'tag-actived'
                        }`}
                    onClick={() => handleFrenquencyClick('eventual')}
                >
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

