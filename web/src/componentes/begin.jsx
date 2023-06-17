import 'bootstrap/dist/css/bootstrap.min.css'
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5"
import { Container, Row, Button} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import Image1 from '../img/imagem1.png'

export default function Begin(){
    return(
        
        <Container className={css(styles.navBegin)}>
                <aside className={css(styles.aside1)}>
                    <h4 className={css(styles.text1)}>Conheça o ISPMedia</h4>
                    <h1 className={css(styles.text2)}>Deixe a música te envolver com o ISPMedia</h1>
                    <p className={css(styles.text3)}>Encontre artistas de toda parte do mundo e vibre com as suas músicas</p>
                    <p className={css(styles.text4)}>Baixe no seu dispositivo móvel</p>
                    <Button className={css(styles.btn1)}>
                        <IoLogoGooglePlaystore className={css(styles.icon1)} />
                        <br/>PlayStore
                    </Button>

                    <Button className={css(styles.btn1)}>
                        <IoLogoAppleAppstore className={css(styles.icon1)} />
                       <br/>AppStore
                    </Button>
                </aside>

                <aside className={css(styles.aside2)}>
                    <img className={css(styles.image)} src={Image1} alt="" width={'100%'} height={'100%'}/>
                </aside>
        </Container>
    )
}

const styles = StyleSheet.create({
    navBegin:{
        background: 'none',
        width: "100%",
        height: "100vh",
    },

    aside1:{
        color: 'white',
        background: 'none',
        display: "inline-block",
        transform: 'translate(-70%, 0)',
        width: "60%",
        textAlign: 'left',
        fontFamily: 'Cormorant Cormorant',
    },

    aside2:{
        background: 'none',
        transform: 'translate(60%, 0)',
        width: "70%",
        position: "absolute",
        top: 20,
        left: 0,
        zIndex: 1,
        height: "100%",
        
    },

    div0Begin:{
        fontFamily: 'Cormorant Cormorant',
        background: 'none',
        color: 'white',
        width: "60%",
        display: 'inline-flex',
        transform: 'translate(-1%, 0)'
        
    },

    text1:{
        background: 'none',
        marginBottom: '9%',
        width: "100%",
    },

    text2:{
        background: 'none',
        marginBottom: '6%',
        width: "100%",
    },

    text3:{
        background: 'none',
        fontSize: '25px',
        marginBottom: '5%',
        width: "100%",
    },

    text4:{
        background: 'none',
        fontSize: '20px',
        width: "100%",
    },

    btn1:{
        background: 'none',
        border: 'none',
        marginLeft: '1%',
        color: 'white',
        ':hover':{
            color: 'white'
        }
    },

    icon1:{
        background: 'none',
       fontSize: '23px'
    },

    divBegin: {
        position: 'fixed',
        background: 'none',
        width: "50%",
        display: 'inline-flex',
        transform: 'translate(15%, 0)'
    },

    image: {
        background: 'none'
    }
})