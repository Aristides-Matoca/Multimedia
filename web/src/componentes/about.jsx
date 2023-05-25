import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import Image1 from '../img/imagem2.png'

export default function Sobre(){
    return(
        <Container className={css(styles.navBegin)}>
            <Row>
                <div className={css(styles.div0Begin)}>
                    <h4 className={css(styles.text1)}>Sobre</h4>
                    <h1 className={css(styles.text2)}>A Ideia</h1>
                    <p className={css(styles.text3)}>
                        ISPMedia é uma plataforma digital de gestão e partilha de conteúdos multimédias com funcionalidades semelhantes aos 
                        arquivos Youtube.com, Spotfy, AllMusic.com, acrescentando a possibilidade de partilhar ficheiros entre utilizadores 
                        tal como o serviço Dropbox, GoogleDrive e OneDrive.
                    </p>
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
        left: '27%',
        top: '110%'
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