import Toggle from '../Toggle';
import { Container, Profile, UserName, Welcome } from './styles';

export default function MainHeader(){
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