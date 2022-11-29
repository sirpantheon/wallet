import { Container, Title, Controllers } from './styles'
import SelectInput from "../../components/selectInput";

export default function ContentHeader() {

    const options = [
        {value:"johnatan", label:"Johnatan"},
        {value:"joe", label:"joe"},
        {value:"cloe", label:"cloe"},
    ]

    return (
        <Container>
            <Title>
                <h1>ContentHeader</h1>
            </Title>
            <Controllers>
                <SelectInput options={options}/>
                <SelectInput options={options}/>
            </Controllers>
        </Container>
    )
}