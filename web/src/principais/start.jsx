import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Container, Row} from 'reactstrap'
import Begin from '../componentes/begin'
import Sobre from '../componentes/about'
import Menu from '../componentes/menu'

export default function Start(props){
    const change = true
    return(
        <Container className={css(styles.cont1)}>
            <Row className={css(styles.row1)}>
                <header className={css(styles.header3)}>
                <Menu/>
                </header>

                <div className={css(styles.divBegin)}>
                    {change ? <Begin /> : <Sobre />}
                    
                </div>
            </Row>
        </Container>
    )
}

const styles = StyleSheet.create({
    cont1:{
        background: 'none',
    },

    row1:{
        background: 'none',
    },

    header3:{
        background: 'none',
        transform: 'translate(0, -830%)',
        zIndex: '1'
    },

    divBegin:{
        position: 'fixed',
        top: '-130.5%',
        left: '-45%',
        height: '370%',
        background: 'none'
    }
})