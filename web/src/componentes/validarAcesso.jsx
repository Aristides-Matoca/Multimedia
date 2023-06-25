import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input, InputGroup, InputGroupText, Container, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineCamera as Camera } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi";
import axios from 'axios';
import { storage } from '../../backend/config'

export default function ValidarAcesso({handleShow, nome}){

    const api = 'http://localhost:4000';

    const [owner, setOwner] = useState('');
    const [grupos, setGrupos] = useState(null);
    const [grupo, setGrupo] = useState(null);

    //Tem a ver com upload de fotos

    //Tem a ver com o TabPane
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

      function verificarUsuario1() {
        //const usuarios = [];
        if(grupo != null){
            grupo.forEach(obj => {
                if (obj.membro == nome) {
                        return true;
                    }
                });
        }
        return false;
      }

    useEffect(() => {
        // Busca dados 
        axios
          .get(api+'/listaG/', {
            params: {
              q: 'axios',
              name: nome
            }}) 
          .then(response => {
            setGrupo(response.data);   
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);


    const onFileUpload = event => {
        event.preventDefault();  
        //verificarUsuario();
        const nExiste = verificarUsuario1();

        if(!nExiste){
            // MUDAR AQUI, APRESENTA A MENSAGEM AO USUÁRIO
            handleShow('Grupo');
        }else {
            alert("Não é membro!");
            handleShow('Inicio');
        }
      };

    return (
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)}>

                <h1 className={css(styles.tittle)}>{nome}</h1>
                <Nav tabs className={css(styles.nav)} >
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkUpload' className={activeTab === '1' ? 'active' : '' && css(styles.item)} onClick={() => toggleTab('1')}>Entrando no grupo</NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className={css(styles.tab)}>
                    <TabPane tabId="1" className={css(styles.tab)}>

                        <Label className={css(styles.label)}>Username</Label>
                        <Input className={css(styles.input)} type='text' placeholder='Username' value={owner} onChange={(e) => setOwner(e.target.value)} required/>

                        <button id='btn btn-default' className={css(styles.btn1)} onClick={() => handleShow('Inicio')}>Cancelar</button>
                        <button id='btn btn-primary' className={css(styles.btn2)} onClick={onFileUpload}>Validar</button>
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
        background: 'none',
        fontSize: '45px',
        margin: '4% 0 4% 0',
        color: 'white'
    },

    nav:{
        background: 'black',
        borderBottom: '2.5px solid grey',
    },

    item:{
        background: 'none',
        color: 'black',
        ':hover':{
            cursor: 'pointer'
        }
    },

    tab:{
        background: 'black',
        paddingTop: '1%',
    },

    div:{
        background: 'none',
        padding: '0 0 1% 37%',
    },

    imgArea:{
        width: '180px', 
        height: '180px', 
        borderRadius: '5px', 
        border: 'none',
        cursor: 'pointer',
        background: 'rgb(36,36,36)',
    },

    icon:{
        fontSize: '80px',
        marginLeft: '23.5%',
        background: 'none',
        color: 'black',
    },

    label:{
        background: 'black',
        marginLeft: '4%',
        fontWeight: 'bold',
        fontSize: '14px',
        color: 'white'
    },

    input:{
        background: 'black',
        border: '1px solid white',
        borderRadius: '4px',
        padding: '1%',
        margin: '0 0 2% 4%',
        width: '90%',
        color: 'white'
    },

    Inputg:{
        width: '91.5%',
        background: 'black',
        margin: '0 0 0 4%',
        color: 'white'
    },

    input2:{
        background: 'black',
        border: '1px solid white',
        borderRadius: '4px',
        padding: '1%',
        margin: '0 2% 2% 0',
        color: 'white'
    },

    btn1:{
        background: 'none',
        color: 'white',
        margin: '0 2% 12% 57%',
        ':hover':{
            fontWeight: 'bold'
        }
    },

    btn2:{
        background: 'white',
        color: 'black',
        ':hover':{
            fontWeight: 'bold'
        }
    }
})