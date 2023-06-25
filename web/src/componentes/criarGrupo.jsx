import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input, InputGroup, InputGroupText, Container, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineCamera as Camera } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi";
import axios from 'axios';
import { storage } from '../../backend/config'

export default function CriarGrupo({handleShow}){

    const api = 'http://localhost:4000';

    const [selectedFileImagem, setSelectedFileImagem] = useState(null);

    const [owner, setOwner] = useState('');
    const [nome, setNome] = useState('');
    const [description, setDescricao] = useState('');
    const [dadosUsuario, setDadosUsuario] = useState(null);

    //Tem a ver com upload de fotos
    const [profilePicture, setProfilePicture] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChangeI = (e) => {
        const file = e.target.files[0];
        setSelectedFileImagem(e.target.files[0]);
        setProfilePicture(URL.createObjectURL(file));
    };

    const handleSelectFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const clearProfilePicture = () => {
        setProfilePicture(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    //Tem a ver com o TabPane
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    function verificarUsuario() {
        const usuarios = [];
        if(dadosUsuario != null){
            dadosUsuario.forEach(obj => {
                if (obj.username === owner) {
                  const copia = { ...obj };
                  usuarios.push(copia);
                }
              });
        }

        return usuarios.length === 0;
      }

    useEffect(() => {
        // Busca dados 
        axios
          .get(api+'/') 
          .then(response => {
            setDadosUsuario(response.data);   
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);


    const onFileUpload = event => {
        event.preventDefault();  
        let db = "/grupos";
        const storageRef = storage.ref();
        const imageRef = storageRef.child("imagens/"+nome); 
        const nExiste = verificarUsuario();

        if(nExiste){
            // MUDAR AQUI, APRESENTA A MENSAGEM AO USUÁRIO
            alert("Usuário não existe!");
        }else {
            if (selectedFileImagem){
                imageRef.put(selectedFileImagem).then(() => {
                    imageRef.getDownloadURL().then((imageURL) => {
                        //alert(imageDownloadURL);
                    // Update the previously saved database entry with the image download URL
                    enviar(db,{owners: {owner,}, membros: {membro: owner,}, imageURL, nome, description});
                    });
                }).catch((imageError) => {
                    console.error("Error uploading image file:", imageError);
                });
            } else{
                enviar(db,{owners: {owner,}, membros: {owner,}, nome, description});
            } 
        }
        alert("Grupo criado!");
      };

      function enviar(db, info){
        axios
        .post(api + db, info)
        .then(response => {
        const createdUser = response.data;
        console.log('Created file:', createdUser+" "+db);
        })
        .catch(error => {
        console.error('Error creating user:', error);
        });
      }

    return (
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)}>

                <h1 className={css(styles.tittle)}>Criar Grupo</h1>
                <Nav tabs className={css(styles.nav)} >
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkUpload' className={activeTab === '1' ? 'active' : '' && css(styles.item)} onClick={() => toggleTab('1')}>Criando o grupo</NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab} className={css(styles.tab)}>
                    <TabPane tabId="1" className={css(styles.tab)}>

                        <div className={css(styles.div)}>
                            <InputGroup style={{background: 'none'}}>
                                <InputGroupText className={css(styles.imgArea)} onClick={handleSelectFile} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    {profilePicture ? (
                                        <img src={profilePicture} alt="Foto de Perfil" style={{ width: '112%', height: '104.4%', marginLeft: '-6%', borderRadius: '5px' }}/>
                                    ) : (isHovered ? <FiEdit2 className={css(styles.icon)}/> : <Camera className={css(styles.icon)}/>)}
                                </InputGroupText>
                                
                                <Input type="file" onChange={handleFileChangeI} style={{ display: 'none' }} innerRef={fileInputRef} accept="image/*"/>
                            </InputGroup>

                            {profilePicture && (
                                <button className="btn btn-link" id='remove' onClick={clearProfilePicture}>Remover Foto</button>
                            )}
                        </div>

                        <Label className={css(styles.label)}>Owner do grupo</Label>
                        <Input className={css(styles.input)} type='text' placeholder='Meu primeiro áudio' value={owner} onChange={(e) => setOwner(e.target.value)} required/>

                        <Label className={css(styles.label)}>Nome do grupo*</Label>
                        <Input className={css(styles.input)} type='text' placeholder='Meu primeiro áudio' value={nome} onChange={(e) => setNome(e.target.value)} required/>

                        <Label className={css(styles.label)}>Descrição</Label>
                        <Input className={css(styles.input)} type='textarea' placeholder='Something else...' value={description} onChange={(e) => setDescricao(e.target.value)}/>

                        <button id='btn btn-default' className={css(styles.btn1)} onClick={() => handleShow('Inicio')}>Cancelar</button>
                        <button id='btn btn-primary' className={css(styles.btn2)} onClick={onFileUpload}>Criar Grupo</button>
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