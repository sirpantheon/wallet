import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  height: 50px;
  border-radius: 10px;
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  background-color: ${props => props.theme.colors.tertiary};
  
  -webkit-box-shadow: 0px 0px 6px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 6px 3px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 6px 3px rgba(0,0,0,0.75);

  transition: all 0.4s;

  &:hover{
    opacity: .7;
    -webkit-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.75);
  }

  &::placeholder {
    font-weight: bold;
    opacity: 0.5;
    color: ${props => props.theme.colors.black};
}

`;