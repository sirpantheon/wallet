import Aside from '../aside'
import Content from '../content'
import MainHeader from '../mainHeader'
import { Grid } from './styles'

export default function Layout() {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content />
        </Grid>
    )
}