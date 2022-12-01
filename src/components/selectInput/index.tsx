import { Container } from './styles'

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],

}

export default function SelectInput(props: ISelectInputProps) {
  return (
    <Container>
      <select>
        {
          props.options.map(option => (
            <option value={option.value} key={option[0]}>{option.label}</option>
          ))
        }
      </select>
    </Container>
  )
}