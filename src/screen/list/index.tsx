import ContentHeader from "../../components/contentHeader";
import FinanceCard from "../../components/financeCard";
import SelectInput from "../../components/selectInput";
import { Container, Content } from "./styles";

export default function List() {
    const options = [
        { value: "johnatan", label: "Johnatan" },
        { value: "joe", label: "joe" },
        { value: "cloe", label: "cloe" },
    ]
    return (
        <Container>
            <ContentHeader title="Entradas" lineColor="#ec0303">
                <SelectInput options={options} />
            </ContentHeader>

            <Content>
                <FinanceCard 
                    cardColor="#443197"
                    tagColor="#ec0303"
                    title="Conta de Luz"
                    subtitle="30/11/2022"
                    amount="R$ 158,00"
                />
                <FinanceCard 
                    cardColor="#443197"
                    tagColor="#ec0303"
                    title="Conta de Luz"
                    subtitle="30/11/2022"
                    amount="R$ 158,00"
                />
                <FinanceCard 
                    cardColor="#443197"
                    tagColor="#ec0303"
                    title="Conta de Luz"
                    subtitle="30/11/2022"
                    amount="R$ 158,00"
                />
                <FinanceCard 
                    cardColor="#443197"
                    tagColor="#ec0303"
                    title="Conta de Luz"
                    subtitle="30/11/2022"
                    amount="R$ 158,00"
                />
                <FinanceCard 
                    cardColor="#443197"
                    tagColor="#ec0303"
                    title="Conta de Luz"
                    subtitle="30/11/2022"
                    amount="R$ 158,00"
                />
                <FinanceCard 
                    cardColor="#443197"
                    tagColor="#ec0303"
                    title="Conta de Luz"
                    subtitle="30/11/2022"
                    amount="R$ 158,00"
                />

            </Content>
        </Container>
    )
}