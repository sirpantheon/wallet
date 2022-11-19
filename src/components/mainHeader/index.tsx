import Toggle from '../toggle'
import { Container, Profile, Welcome, UserName } from './styles'

export default function MainHeader() {
    return (
        <Container>
            <Toggle/>

            <Profile>
                <Welcome>Óla </Welcome>
                <UserName>
                    johnatan Paixão
                </UserName>
            </Profile>
        </Container>
    )
}