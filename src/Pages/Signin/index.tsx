import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Form, FormTitle, Logo, Inputs } from "./styles";
import { GiWallet } from 'react-icons/gi';

export default function SignIn() {
	return (
		<Container>
			<Logo>
				<GiWallet />
				<h1>The Wallet</h1>
			</Logo>

			<Form onSubmit={()=>{}}>
				<section>
					<FormTitle>Sign In</FormTitle>
					<Inputs>
						<Input 
							type="email"
							placeholder="E-mail"
							required
						 />
						<Input 
							type="password"
							placeholder="Senha"
							required
						 />
					</Inputs>
				</section>


				<Button type="submit">
					Enviar
				</Button>
			</Form>
		</Container>
	)
}