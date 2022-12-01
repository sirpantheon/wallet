import { Container } from './styles'

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],

}

export default function SelectInput(props: ISelectInputProps) {
  const key = [0,1,2,3,4,5,6,7,8,9,10]

  return (
    <Container>
      <select>
        {
          props.options.map((option, index ) => (
            <option value={option.value} key={index}>{option.label}</option>
          ))
        }
      </select>
    </Container>
  )
}