import styled from "styled-components"

export const Container = styled.input`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 10px;
  border: outset 1px ${props => props.theme.colors.info};
  color: ${props => props.theme.colors.black};
  font-size: 14px;

  -webkit-box-shadow: inset 1px 1px 40px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 1px 1px 40px -4px rgba(0,0,0,0.75);
  box-shadow: inset 1px 1px 40px -4px rgba(0,0,0,0.75);

  &::placeholder {
    font-weight: bold;
    opacity: 0.5;
    color: ${props => props.theme.colors.black};
}

`;