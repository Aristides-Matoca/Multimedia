import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Nav, NavItem, NavLink, TabPane, TabContent, Input, InputGroup, InputGroupText} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState, useRef } from 'react';
import { BiUser } from "react-icons/bi"
import { FiEdit2 } from "react-icons/fi"

export default function Perfil({username}){
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

    //Tem a ver o TabPane
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <Container className={css(styles.cont)}>
            <Row className={css(styles.row)}>

                <div className={css(styles.div)}>
                    <InputGroup style={{background: 'none'}}>
                        <InputGroupText className={css(styles.imgArea)} onClick={handleSelectFile} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {profilePicture ? (
                                <img src={profilePicture} alt="Foto de Perfil" style={{ width: '111.2%', height: '104.3%', marginLeft: '-5.8%', borderRadius: '50%' }}/>
                            ) : (isHovered ? <FiEdit2 className={css(styles.icon)}/> : <BiUser className={css(styles.icon)}/>)}
                        </InputGroupText>
                        
                        <Input type="file" onChange={handleFileChange} style={{ display: 'none' }} innerRef={fileInputRef}/>
                    </InputGroup>

                    {profilePicture && (
                        <button className="btn btn-link" id='remove' onClick={clearProfilePicture}>Remover Foto</button>
                    )}
                    
                    <h1 className={css(styles.tittle)}>{username}</h1>
                </div>

                <Nav tabs className={css(styles.nav)} justified>
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
                        <p className={css(styles.txt)}>Sem podcasts</p>
                    </TabPane>
                </TabContent>
            </Row>
        </Container>
    )
}

const styles = StyleSheet.create({
    cont:{
        background: 'none',
        color: 'black',
        width: '100%',
    },

    row:{
        transform: 'translate(-8%, 0%)',
        width: '127%',
        borderRadius: '10px',
        marginTop: '-13.5%',
        background: 'rgb(18,18,18)',
        textAlign: 'justify',
    },

    div:{
        background: 'none',
        display: 'inline',
        padding: '2% 0 0 2%',
    },

    imgArea:{
        width: '230px', 
        height: '230px', 
        borderRadius: '100%', 
        border: 'none',
        cursor: 'pointer',
        background: 'rgb(36,36,36)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },

    icon:{
        fontSize: '150px',
        marginLeft: '13%',
        background: 'none',
        color: 'black'
    },

    tittle:{
        transform: 'translate(0%, -200%)',
        position: 'fixed',
        color: 'white',
        background: 'none',
        fontSize: '70px',
        marginLeft: '21%',
    },

    nav:{
        background: 'black',
        borderBottom: '2.5px solid grey',
        marginTop: '4%'
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
        paddingTop: '1%',
    },

    txt:{
        background: 'none',
        color: 'white'
    },
})