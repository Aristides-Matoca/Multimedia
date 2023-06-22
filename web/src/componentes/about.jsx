import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import Image1 from '../img/imagem2.png'

export default function Sobre(){
    return(
        <div className={css(styles.navBegin)}>
                <div className={css(styles.aside1)}>
                    <h4 className={css(styles.text1)}>Sobre</h4>
                    <h1 className={css(styles.text2)}>A Ideia</h1>
                    <p className={css(styles.text3)}>
                        ISPMedia é uma plataforma digital de gestão e partilha de conteúdos multimédias com funcionalidades semelhantes aos 
                        arquivos Youtube.com, Spotfy, AllMusic.com, acrescentando a possibilidade de partilhar ficheiros entre utilizadores 
                        tal como o serviço Dropbox, GoogleDrive e OneDrive.
                    </p>
                </div>

                <div className={css(styles.aside2)}>
                    <img className={css(styles.image)} src={Image1} alt="" width={'100%'} height={'100%'}/>
                </div>
        </div>
    )
}

const styles = StyleSheet.create({
    navBegin:{
        background: 'none',
        width: "100%",
        height: "100vh",
        paddingTop: "5%",
        top: 20,
        left: 0,
        zIndex: 1,
    },

    div0Begin:{
        fontFamily: 'Cormorant Cormorant',
        background: 'none',
        textAlign: 'left',
        position: 'absolute',
        color: 'white',
        height: '250%',
        width: '50%',
        left: 0,
        top: 0,
    },

    aside1:{
        color: 'white',
        background: 'none',
        display: "inline-block",
        transform: 'translate(-75%, 0)',
        width: "40%",
        textAlign: 'left',
        fontFamily: 'Cormorant Cormorant',
    },

    aside2:{
        background: 'none',
        transform: 'translate(66%, 0)',
        width: "60%",
        position: "relative",
        top: -300,
        height: "100%",
        left: 0,
        zIndex: 1,
        
    },

    text1:{
        marginTop: '9%',
        background: 'none'
    },

    text2:{
        background: 'none',
        marginBottom: '6%'
    },

    text3:{
        background: 'none',
        fontSize: '18px',
        marginBottom: '5%'
    },

    divBegin: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '382%',
        background: 'none',  
        textAlign: 'rigth',
    },

    image: {
        background: 'none'
    }
})