
import { useMemo, useState } from "react";
import { SelectInput } from "../../Components/SelectInput";
import { ContentHeader } from "../../Components/contentHeader";
import { Container, Content } from "./styles";
import gains from "../../Repositories/gains";
import expenses from "../../Repositories/expenses";
import ListOfMonths from "../../Components/utils/months";
import { useParams } from "react-router-dom";
import WalletBox from "../../Components/WalletBox";


export default function Dashboard() {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const { type } = useParams();


    function handleMonthSelected(month:string){
        try{
            const parseMonth = Number(month)
            setMonthSelected(parseMonth)
        }catch(error){
            throw new Error('Més Invalido')
        }
    }

    function handleYearSelected(year:string){
        try{
            const parseYear = Number(year)
            setYearSelected(parseYear)
        }catch(error){
            throw new Error('Ano Invalido')
            
        }
    }

    const props = useMemo(() => {
        return type === 'entry-balance' ?
            { title: 'Entradas', lineColor: '#4E41F0', list: gains } :
            { title: 'Saídas', lineColor: '#E44C4E', list: expenses }
    }, [type]);

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
                    amount={150.00}
                    icon='BsCashCoin'
                />
                <WalletBox 
                    title="Entradas"
                    color="#4E41F0"
                    footerLabel="Atualizado conforme as entradas e saidas"
                    amount={5000.00}
                    icon='BsGraphUp'
                />
                <WalletBox 
                    title="Saidas"
                    color="#E44C4E"
                    footerLabel="Atualizado conforme as entradas e saidas"
                    amount={150.00}
                    icon='BsGraphDown'
                />
            </Content>
        </Container>
    )
}