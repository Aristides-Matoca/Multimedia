import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input, InputGroup, Button, Container, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Conta({handleShow, username, pessoa}){
    const api = "http://172.20.10.3:5001";

    console.log(pessoa)
    const [pEmail, setPEmail] = useState('')
    const [selectedPessoa, setSelectedPessoa] = useState([])
    
    useEffect(() => {
        if(pessoa != null){
            const filtrarPessoa = () => {
                const PessoaFiltrada = pessoa.filter(p => p.username === username);
                setSelectedPessoa(PessoaFiltrada);
            };
            filtrarPessoa();
        }
    }, [pessoa, username]);

console.log(pEmail)
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

    const [user, setUser] = useState(username);
    const [gender, setGender] = useState(genders[0]);
    const [day, setDay] = useState('10');
    const [month, setMonth] = useState(months[0]);
    const [year, setYear] = useState('2001');
    const [country, setCountry] = useState('Angola');

    const [password, setPass] = useState('');
    const [pass1, setPass1] = useState('');
    const [dadosUsuario, setDadosUsuario] = useState(null);
    const [email, setEmail] = useState(pEmail);
    
    function validateEmail(email) {
        const emailPattern = /^[a-z]+\.[a-z]+@isptec\.co\.ao$/ 
        const emal = /^20(20|21|22|23)\d{4}@isptec\.co\.ao$/;
        const ema = /^20(1[2-9]|20)\d{4}@isptec\.co\.ao$/;
        return emailPattern.test(email) || emal.test(email) || ema.test(email) ;
    }

    useEffect(() => {
        // Busca dados 
        axios
          .get(api + '/')
          .then(response => {
            setDadosUsuario(response.data);
            if(info==null){
                dadosUsuario.forEach(obj => {
                    if (obj.username == username) {
                      setEmail(obj.email)
                      console.log(email)
                    }
                  });
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);
       
    function verificarUsuario() {
        //const usuarios = [];
        if (dadosUsuario != null) {
          dadosUsuario.forEach(obj => {
            if (obj.username === username && obj.password === password) {              
              return true
            }
          });
        }
        return false;
      }

    function alter(){
        if(validateEmail(email)){
            axios
            .post(api + '/update', { username, email, gender, day, month, year, country })
            .then(response => {
            const createdUser = response.data;
            alert('Actualizado!');
            })
            .catch(error => {
            console.error('Error creating user:', error);
            }); 
        }     
    }

    function eliminar(){
        axios
            .post(api + '/delete', { username })
            .then(response => {
            const createdUser = response.data;
            alert('Eliminado!');
            })
            .catch(error => {
            console.error('Error creating user:', error);
            });    
    }

    function alter2(){
        if(verificarUsuario()){
            axios
            .post(api + '/updateP', { pass1})
            .then(response => {
            const createdUser = response.data;
            alert('Actualizado!');
            })
            .catch(error => {
            console.error('Error creating user:', error);
            }); 
        }else{
            alert("Password actual errada!!!")
        }     
    }

    return (
        
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)} >

                <h1 className={css(styles.tittle)}>Minha conta</h1>
                <Nav tabs className={css(styles.nav)}>
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkConta' className={activeTab === '1' ? 'active' : '' && css(styles.item)} onClick={() => {toggleTab('1');}}>Editar conta</NavLink>
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
                                <option style={{background: 'none'}} key={index} value={gender}>{gender}</option>
                           ))}
                        </Input>

                        <Label className={css(styles.label)}>Data de nascimento</Label>
                        <InputGroup className={css(styles.Inputg)}>
                            <Input  className={css(styles.input2)} value={day} onChange={(e) => setDay(e.target.value)}/>

                            <Input type="select"  className={css(styles.input2)} value={month} onChange={(e) => setMonth(e.target.value)}>
                                {months.map((month, index) => (
                                    <option style={{background: 'none'}} key={index} value={month}>{month}</option>
                                ))}
                            </Input>

                            <Input  className={css(styles.input2)} value={year} onChange={(e) => setYear(e.target.value)}/>
                        </InputGroup>

                        <Label className={css(styles.label)}>País/Região</Label>
                        <Input className={css(styles.input)} type='text' value={country} onChange={(e) => setCountry(e.target.value)}/>

                        <Button className={css(styles.btn3)} onClick={() => eliminar()} >Eliminar conta</Button>
                        <button id='btn btn-default' className={css(styles.btn1)} onClick={() => handleShow('Inicio')}>Cancelar</button>
                        <Button className={css(styles.btn2)} onClick={() => alter()} >Guardar as alterações</Button>
                    </TabPane>

                    <TabPane tabId="2" className={css(styles.tab)}>
                        <Label className={css(styles.label)}>Palavra-passe atual</Label>
                        <Input className={css(styles.input)} type='password' value={password} onChange={(e) => setPass(e.target.value)}/>

                        <Label className={css(styles.label)}>Nova palavra-passe</Label>
                        <Input className={css(styles.input)} type='password' value={pass1} onChange={(e) => setPass1(e.target.value)}/>


                        <button id='btn btn-default' className={css(styles.btn1)} onClick={() => handleShow('Inicio')}>Cancelar</button>
                        <Button className={css(styles.btn2)} onClick={() => alter2()} >Definir a nova palavra-passe</Button>
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
        margin: '0 2% 12% 47%',
        ':hover':{
            fontWeight: 'bold'
        }
    },

    btn2:{
        background: 'black',
        color: 'white',
    },

    btn3:{
        background: 'red',
        color: 'black',
        marginLeft: '4%'
    }
})