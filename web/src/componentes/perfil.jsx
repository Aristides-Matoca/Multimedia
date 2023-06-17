import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState } from 'react';

export default function Perfil({handleShow}){
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)}>

                <h1 className={css(styles.tittle)}>Perfil</h1>
                <Nav tabs className={css(styles.nav)}>
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkPerfil' className={activeTab === '1' ? 'active' : '' && css(styles.item)} onClick={() => toggleTab('1')}>Áudios</NavLink>
                    </NavItem>
                    
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkPerfil' className={activeTab === '2' ? 'active' : ''} onClick={() => toggleTab('2')}>Vídeos</NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkPerfil' className={activeTab === '3' ? 'active' : ''} onClick={() => toggleTab('3')}>Ábuns</NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkPerfil' className={activeTab === '4' ? 'active' : ''} onClick={() => toggleTab('4')}>Podcasts</NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className={css(styles.tab)}>
                    <TabPane tabId="1" className={css(styles.tab)}>
                        <p className={css(styles.txt)}>Sem áudios</p>
                    </TabPane>

                    <TabPane tabId="2" className={css(styles.tab)}>
                        <p className={css(styles.txt)}>Sem vídeos</p>
                    </TabPane>

                    <TabPane tabId="3" className={css(styles.tab)}>
                        <p className={css(styles.txt)}>Sem álbuns</p>
                    </TabPane>

                    <TabPane tabId="4" className={css(styles.tab)}>
                        <p className={css(styles.txt)}>Sem Podcasts</p>
                    </TabPane>
                </TabContent>
            </Row>
        </Container>
    )
}

const styles = StyleSheet.create({
    cont:{
        borderRadius: '10px',
        background: 'none',
        color: 'black'
    },

    row:{
        borderRadius: '10px',
        marginTop: '-13.5%',
        background: 'rgb(18,18,18)',
        textAlign: 'justify',
    },

    tittle:{
        color: 'white',
        background: 'none',
        fontSize: '45px',
        margin: '4% 0 4% 0',
    },

    nav:{
        background: 'black',
        borderBottom: '2.5px solid grey'
    },

    item:{
        background: 'none',
        ':hover':{
            cursor: 'pointer',
        },

        ':focus':{
            color: 'black'
        }
    },

    tab:{
        background: 'black',
        //background: 'rgb(100,100,100)',
        paddingTop: '1%',
    },

    txt:{
        background: 'none',
        color: 'white'
    },
})