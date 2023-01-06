import { Container, Form, FormTitle, Logo } from "./styles";
import { GiWallet } from 'react-icons/gi';

export default function SignIn() {
	return (
		<Container>
			<Logo>
				<GiWallet />
				<h1>The Wallet</h1>
			</Logo>

			<Form>
				<FormTitle>Sign In</FormTitle>

				<input type="text" placeholder="Usuario"/>
				<input type="text" placeholder="Senha"/>

				<button type="submit" >Entrar</button>
			</Form>
		</Container>
	)
}