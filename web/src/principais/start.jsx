import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Container, Row} from 'reactstrap'
import Begin from '../componentes/begin'
import Sobre from '../componentes/about'
import Menu from '../componentes/menu'
import { useState } from 'react'

export default function Start(){

    const [showHome, setShowHome] = useState(true);
    const [showAbout, setShowAbout] = useState(false);
  
    const handleShowHome = () => {
        setShowHome(true)
        setShowAbout(false)
    }
  
    const handleShowAbout = () => {
        setShowHome(false);
        setShowAbout(true);
    }

    return(
        <>
            <Menu></Menu>
            <div className={css(styles.divBegin)}>
               <Begin/> 
            </div>
            <div className={css(styles.divBegin)}>
               <Sobre/> 
            </div>
            
        </>
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
        top: 0,
        left: 0,
        width: "100%",
        background: 'none',
        height: "100vh",
        display: "block"
    }
})

/*
<header className={css(styles.header3)}>
                <Menu showHome={handleShowHome} showAbout={handleShowAbout} />
                </header>

                <div className={css(styles.divBegin)}>
                    {showHome && <Begin />}
                    {showAbout && <Sobre />}
                </div>
                
                <Container className={css(styles.cont1)}>
            <Row className={css(styles.row1)}>
            <Begin />
            <Sobre />
                
            </Row>
        </Container>
                
                */