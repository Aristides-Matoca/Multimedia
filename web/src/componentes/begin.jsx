import 'bootstrap/dist/css/bootstrap.min.css'
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5"
import { Container, Row, Button} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import Image1 from '../img/imagem1.png'

export default function Begin(){
    return(
        <Container className={css(styles.navBegin)}>
            <Row>
                <div className={css(styles.div0Begin)}>
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
                </div>

                <div className={css(styles.divBegin)}>
                    <img className={css(styles.image)} src={Image1} alt="" width={'100%'} height={'100%'}/>
                </div>
            </Row>
        </Container>
    )
}

const styles = StyleSheet.create({
    navBegin:{
        background: 'none'
    },

    div0Begin:{
        fontFamily: 'Cormorant Cormorant',
        background: 'none',
        textAlign: 'left',
        position: 'fixed',
        height: '250%',
        width: '50%',
        left: '20%',
        top: '80%'
    },

    text1:{
        background: 'none',
        marginBottom: '9%'
    },

    text2:{
        background: 'none',
        marginBottom: '6%'
    },

    text3:{
        background: 'none',
        fontSize: '25px',
        marginBottom: '5%'
    },

    text4:{
        background: 'none',
        fontSize: '20px'
    },

    btn1:{
        background: 'none',
        border: 'none',
        marginLeft: '5%',
        color: 'black',
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
        top: '-15%',
        right: '-39%',
        width: '75%',
        height: '382%',
        background: 'none'
    },

    image: {
        background: 'none'
    }
})