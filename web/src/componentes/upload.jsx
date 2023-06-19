import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input, InputGroup, InputGroupText, Container, Row, Nav, NavItem, NavLink, TabPane, TabContent} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState, useRef } from 'react'
import { AiOutlineCamera as Camera } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"

export default function Upload({handleShow}){
    //Tem a ver com upload de fotos
    const [profilePicture, setProfilePicture] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
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

    const genders = [
        ' ',
        'Áudio',
        'Vídeo',
        'Podcast'
    ]

    const estilos = [
        '',
        'Documentário',
        'Afro House',
        'Rock Alternativo',
        'Electrónica',
        'Hip-hop',
        'Pop',
        'Desporto',
        'Tecnologia',
        'Gastronomia',
        'Filme',
        'Série',
        'Ciência',
    ];

    const months = [
        '',
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

    return (
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)}>

                <h1 className={css(styles.tittle)}>Upload</h1>
                <Nav tabs className={css(styles.nav)} >
                    <NavItem className={css(styles.item)}>
                        <NavLink id='linkUpload' className={activeTab === '1' ? 'active' : '' && css(styles.item)} onClick={() => toggleTab('1')}>Uploading</NavLink>
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
                                
                                <Input type="file" onChange={handleFileChange} style={{ display: 'none' }} innerRef={fileInputRef}/>
                            </InputGroup>

                            {profilePicture && (
                                <button className="btn btn-link" id='remove' onClick={clearProfilePicture}>Remover Foto</button>
                            )}
                        </div>

                        <Label className={css(styles.label)}>Tipo*</Label>
                        <Input type="select" className={css(styles.input)}>
                           {genders.map((gender, index) => (
                                <option style={{background: 'none'}} key={index} value={gender}>{gender}</option>
                           ))}
                        </Input>

                        <Label className={css(styles.label)}>Título*</Label>
                        <Input className={css(styles.input)} type='text' placeholder='Meu primeiro áudio'/>

                        <Label className={css(styles.label)}>Autor*</Label>
                        <Input className={css(styles.input)} type='text' placeholder='Autor'/>

                        <Label className={css(styles.label)}>Estilo*</Label>
                        <Input type="select" className={css(styles.input)}>
                           {estilos.map((estilo, index) => (
                                <option style={{background: 'none'}} key={index} value={estilo}>{estilo}</option>
                           ))}
                        </Input>

                        <Label className={css(styles.label)}>Descrição</Label>
                        <Input className={css(styles.input)} type='textarea' placeholder='Something else...'/>

                        <Label className={css(styles.label)}>Data de lançamento*</Label>
                        <InputGroup className={css(styles.Inputg)}>
                            <Input  className={css(styles.input2)} placeholder='Dia'/>

                            <Input type="select"  className={css(styles.input2)} >
                                {months.map((month, index) => (
                                    <option style={{background: 'none'}} key={index} value={month}>{month}</option>
                                ))}
                            </Input>

                            <Input  className={css(styles.input2)} placeholder='Ano'/>
                        </InputGroup>

                        <Label className={css(styles.label)}>Legenda</Label>
                        <Input className={css(styles.input)} type='textarea' placeholder='Something...'/>

                        <Label className={css(styles.label)}>Escolha o ficheiro*</Label>
                        <Input className={css(styles.input)} type='file'/>

                        <button id='btn btn-default' className={css(styles.btn1)} onClick={() => handleShow('Inicio')}>Cancelar</button>
                        <button id='btn btn-primary' className={css(styles.btn2)}>Carregar</button>
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