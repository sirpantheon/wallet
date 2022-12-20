
import { SelectInput } from "../../Components/SelectInput";
import { ContentHeader } from "../../Components/contentHeader";
import { Container } from "./styles";


export default function Dashboard() {

    const options = [
        {value: "2022", label: "2022"},
        {value: "2023", label: "2023"},
        {value: "2024", label: "2024"}
    ]

    return (
        <Container>
            <ContentHeader title="DashBoard" lineColor="#E44C4E">
                <SelectInput options={options} onChange={(e)=> {}} />
            </ContentHeader>
        </Container>
    )
}