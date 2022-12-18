import { SelectInput } from "../../Components/SelectInput";
import { ContentHeader } from "../../Components/contentHeader";
import FinanceCard from "../../Components/financeCard";
import { Container, Content, Filters } from "./styles";
import React, { useMemo } from "react";
import {useParams} from 'react-router-dom'

export default function List() {

    const { type } = useParams()

    const props = useMemo( () =>{
        return type === 'entry-balance' ? 
        {title:'Entradas',lineColor:'#F7931B'} :
        {title:'Saídas',lineColor:'#E44C4E'}
    },[type]);


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
        { value: 2022, label: 2022 },
        { value: 2023, label: 2023 },
        { value: 2024, label: 2024 },
        { value: 2025, label: 2025 },
        { value: 2026, label: 2026 }

    ]

    return (
        <Container>
            <ContentHeader title={props.title} lineColor={props.lineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
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
                <FinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="27/08/2022"
                    amount="R$ 150,00"
                />
            </Content>
        </Container>

    )
}

