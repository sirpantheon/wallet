import { Container, ToggleLabel, ToggleSelector} from "./styles"

export default function Toggle() {
  return (
    <Container>
      <ToggleLabel>Ligth</ToggleLabel>
      <ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={()=>{console.log("mudou")}}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}