import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import Begin from '../componentes/begin'
import Sobre from '../componentes/about'
import Menu from '../componentes/menu'

export default function Start(){

    return(
        <>
            <Menu/>
            <div className={css(styles.divBegin)}> <Begin/> </div>

            <div className={css(styles.divBegin)}> <Sobre/> </div>
        </>
    )
}

const styles = StyleSheet.create({

    divBegin:{
        top: 0,
        left: 0,
        width: "100%",
        background: 'none',
        height: "100vh",
        display: "block"
    }
})