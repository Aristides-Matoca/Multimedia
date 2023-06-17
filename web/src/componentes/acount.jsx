import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input, InputGroup, Button, Container, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState } from 'react';

export default function Conta({handleShow}){
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    const genders = [
        'Masculino',
        'Feminino',
        'Prefiro não dizer'
    ]

    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    const [user, setUser] = useState('Aristides Matoca');
    const [email, setEmail] = useState('my.email@example.com');
    const [gender, setGender] = useState(genders[0]);
    const [day, setDay] = useState('10');
    const [month, setMonth] = useState(months[0]);
    const [year, setYear] = useState('2001');

    return (
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)}>

                <h1 className={css(styles.tittle)}>Minha conta</h1>
                <Nav tabs className={css(styles.nav)}>
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkConta' className={activeTab === '1' ? 'active' : '' && css(styles.item)} onClick={() => toggleTab('1')}>Editar conta</NavLink>
                    </NavItem>
                    
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkConta' className={activeTab === '2' ? 'active' : ''} onClick={() => toggleTab('2')}>Alterar palavra-passe</NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className={css(styles.tab)}>
                    <TabPane tabId="1" className={css(styles.tab)}>
                        <Label className={css(styles.label)}>Utilizador</Label>
                        <Input className={css(styles.input)} type='text' value={user} onChange={(e) => setUser(e.target.value)}/>

                        <Label className={css(styles.label)}>Email</Label>
                        <Input className={css(styles.input)} type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <Label className={css(styles.label)}>Gênero</Label>
                        <Input type="select" className={css(styles.input)} value={gender} onChange={(e) => setGender(e.target.value)}>
                           {genders.map((gender, index) => (
                                <option key={index} value={gender}>{gender}</option>
                           ))}
                        </Input>

                        <Label className={css(styles.label)}>Data de nascimento</Label>
                        <InputGroup className={css(styles.Inputg)}>
                            <Input  className={css(styles.input2)} value={day} onChange={(e) => setDay(e.target.value)}/>

                            <Input type="select"  className={css(styles.input2)} value={month} onChange={(e) => setMonth(e.target.value)}>
                                {months.map((month, index) => (
                                    <option key={index} value={month}>{month}</option>
                                ))}
                            </Input>

                            <Input  className={css(styles.input2)} value={year} onChange={(e) => setYear(e.target.value)}/>
                        </InputGroup>

                        <Label className={css(styles.label)}>País/Região</Label>
                        <Input className={css(styles.input)} type='text' value='Angola'/>

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

    Inputg:{
        width: '91.5%',
        background: 'none',
        margin: '0 0 0 4%',
    },

    input2:{
        background: 'white',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '1%',
        margin: '0 2% 2% 0',
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