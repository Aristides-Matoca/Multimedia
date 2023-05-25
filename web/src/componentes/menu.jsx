import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Nav, Button} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Menu(){
    return (
        <Nav className={css(styles.nav1)} justified>
            <aside className={css(styles.aside1)}>
                <FaPlay className={css(styles.isp)}/>
                <h3 className={css(styles.isp)}>ISPMedia</h3>
            </aside>

            <ul className={css(styles.ul1)}>
                <Link className={css(styles.link1)} onClick={() => handleClick('home')}>Home</Link>
                <Link className={css(styles.link1)} onClick={() => handleClick('about')}>Sobre</Link>
                <Link className={css(styles.link1)}>Descobrir</Link>
            </ul>

            <aside className={css(styles.aside2)}>
                <Link className={css(styles.links)} to={"/login"}><Button className={css(styles.btn4)}>Login</Button></Link>
                <Link className={css(styles.links)} to={"/signin"}><Button className={css(styles.btn3)}>Criar Conta</Button></Link>
            </aside>
        </Nav>
    )
}

const styles = StyleSheet.create({
    nav1:{
        background: 'none'
    },

    aside1:{
        background: 'none',
        display: 'inline-flex',
        transform: 'translate(-280%, 0)'
    },

    isp:{
        background: 'none',
        fontSize: '23px',
    },

    ul1:{
        background: 'none',
        fontSize: '17px',

    },

    link1:{
        background: 'none',
        marginRight: '50px',
        color: 'black'
    },

    aside2:{
        background: 'none',
        transform: 'translate(170%, 0)'
    },

    btn3:{
        background: 'black',
        marginLeft: '20px',
    },

    btn4:{
        background: 'none',
        color: 'black',
        paddingLeft: '20px',
        paddingRight: '20px'
    },

    links:{
        background: 'none'
    }
})