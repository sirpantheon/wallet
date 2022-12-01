import ContentHeader from "../../components/contentHeader";
import SelectInput from "../../components/selectInput";
import { Container } from "./styles";

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
        </Container>
    )
}