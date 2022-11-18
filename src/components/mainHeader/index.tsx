import { Container, Profile, Welcome, UserName } from './styles'

export default function MainHeader() {
    return (
        <Container>
            <h1>main Header</h1>

            <Profile>
                <Welcome>Óla </Welcome>
                <UserName>
                    johnatan Paixão
                </UserName>
            </Profile>
        </Container>
    )
}