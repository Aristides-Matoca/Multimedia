import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Nav, Button} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'

export default function Menu({handleShow}){

    return (
        <Nav className={css(styles.nav1)} justified>
            <aside className={css(styles.aside1)}>
                <FaPlay className={css(styles.isp)}/>
                <h3 className={css(styles.isp)}>ISPMedia</h3>
            </aside>

            <aside className={css(styles.aside2)}>
                <Button className={css(styles.btn4)} onClick={() => handleShow('Login')}>Login</Button>
                <Button className={css(styles.btn3)} onClick={() => handleShow('SignIn')}>Criar Conta</Button>
            </aside>
        </Nav>
    )
}

function qualquer(){
    console.log('Olas')
}

const styles = StyleSheet.create({
    nav1:{
        background: 'none',
        width: "100%",
        position: "fixed",
        top: 25,
        left: 0,
        zIndex: 1,
    },

    aside1:{
        color: 'white',
        background: 'none',
        display: 'inline',
        transform: 'translate(25%, 0)'
    },

    isp:{
        background: 'none',
        fontSize: '23.5px',
        display: 'inline',
    },

    aside2:{
        background: 'none',
        transform: 'translate(470%, 0)'
    },

    btn3:{
        background: 'black',
        marginLeft: '20px',
        ':hover': {
            background: '#FFFF00',
            color: 'black',
            border: '1px solid #FFFF00'
        }
    },

    btn4:{
        background: 'none',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px', 
        border: '1px solid white',
        ':hover': {
            background: 'black',
            color: 'white',
            border: '1px solid transparent',
        }
    },
})