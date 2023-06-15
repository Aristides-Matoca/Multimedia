import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input, Button, Container, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import { useState } from 'react';

export default function Conta({handleShow}){
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)}>

                <h1 className={css(styles.tittle)}>Minha conta</h1>
                <Nav tabs className={css(styles.nav)}>
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkConta' className={activeTab === '1' ? 'active' : '' && css(styles.item)} onClick={() => toggleTab('1')}>Editar perfil</NavLink>
                    </NavItem>
                    
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkConta' className={activeTab === '2' ? 'active' : ''} onClick={() => toggleTab('2')}>Alterar palavra-passe</NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className={css(styles.tab)}>
                    <TabPane tabId="1" className={css(styles.tab)}>
                        <Label className={css(styles.label)}>Utilizador</Label>
                        <Input className={css(styles.input)} type='text' value='Username'/>

                        <Label className={css(styles.label)}>Email</Label>
                        <Input className={css(styles.input)} type='email' value='your.email@example.com'/>

                        <Label className={css(styles.label)}>Gênero</Label>
                        <Input className={css(styles.input)} type='text' value='your.email@example.com'/>

                        <Label className={css(styles.label)}>País/Região</Label>
                        <Input className={css(styles.input)} type='text' value='your.email@example.com'/>

                        <button id='btn btn-default' className={css(styles.btn1)} onClick={() => handleShow('Inicio')}>Cancelar</button>
                        <Button className={css(styles.btn2)}>Guardar as alterações</Button>
                    </TabPane>

                    <TabPane tabId="2" className={css(styles.tab)}>
                        <Label className={css(styles.label)}>Palavra-passe atual</Label>
                        <Input className={css(styles.input)} type='password'/>

                        <Label className={css(styles.label)}>Nova palavra-passe</Label>
                        <Input className={css(styles.input)} type='password'/>

                        <Label className={css(styles.label)}>Confirmar a palavra-passe nova</Label>
                        <Input className={css(styles.input)} type='password'/>

                        <button id='btn btn-default' className={css(styles.btn1)} onClick={() => handleShow('Inicio')}>Cancelar</button>
                        <Button className={css(styles.btn2)}>Definir a nova palavra-passe</Button>
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
        background: 'rgba(255, 253, 245, 1)',
        textAlign: 'justify',
    },

    tittle:{
        background: 'none',
        fontSize: '45px',
        margin: '4% 0 4% 0',
    },

    nav:{
        background: 'none',
    },

    item:{
        background: 'none',
        color: 'black',
        ':hover':{
            cursor: 'pointer'
        }
    },

    tab:{
        background: 'white',
        paddingTop: '1%',
    },

    label:{
        background: 'white',
        marginLeft: '4%',
        fontWeight: 'bold',
        fontSize: '14px'
    },

    input:{
        background: 'white',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '1%',
        margin: '0 0 2% 4%',
        width: '90%'
    },

    btn1:{
        background: 'none',
        color: 'black',
        margin: '0 2% 12% 57%',
        ':hover':{
            fontWeight: 'bold'
        }
    },

    btn2:{
        background: 'black',
        color: 'white',
    }
})