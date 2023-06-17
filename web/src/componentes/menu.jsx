import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Nav, Button} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Menu({showHome, showAbout}){

    return (
        <Nav className={css(styles.nav1)} justified>
            <aside className={css(styles.aside1)}>
                <FaPlay className={css(styles.isp)}/>
                <h3 className={css(styles.isp)}>ISPMedia</h3>
            </aside>

            <aside className={css(styles.aside2)}>
                <Link className={css(styles.links)} to={"/login"}><Button className={css(styles.btn4)}>Login</Button></Link>
                <Link className={css(styles.links)} to={"/signin"}><Button className={css(styles.btn3)}>Criar Conta</Button></Link>
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

    ul1:{
        background: 'none',
        fontSize: '17px',

    },

    link1:{
        background: 'none',
        marginRight: '50px',
        color: 'white',
        ':hover':{
            textDecoration: 'underline'
        }
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
        border: '1px solid black',
        ':hover': {
            background: 'black',
            color: 'white',
            border: '1px solid transparent',
        }
    },

    links:{
        background: 'none'
    }
})