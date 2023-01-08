import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;
export const Logo = styled.div`
  display:flex;
  color: ${props => props.theme.colors.info};
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 40px;
    color: ${props => props.theme.colors.info};
    margin-right: 10px;
    margin-bottom: 10px;

  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 20px;;
  height: 45vh;
  width: 30%;
  border-radius: 15px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.tertiary};
  -webkit-box-shadow: 9px 7px 20px -1px rgba(0,0,0,0.54);
  -moz-box-shadow: 9px 7px 20px -1px rgba(0,0,0,0.54);
  box-shadow: 9px 7px 20px -1px rgba(0,0,0,0.54);
`;
export const FormTitle = styled.h2`
  border-bottom: 1px solid ${props => props.theme.colors.info};
`;
export const Inputs = styled.h2`
  margin-top:10px ;
`;
