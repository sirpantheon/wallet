import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
import { Grid } from './styles';

export default function Layout({children}){
    return (
        <Grid>
            <MainHeader/>
            <Aside/> 
            <Content>
                {children}
            </Content>
        </Grid>
    )
}