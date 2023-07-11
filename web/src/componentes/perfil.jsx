import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Nav, NavItem, NavLink, TabPane, TabContent, Input, InputGroup, InputGroupText } from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState, useRef, useEffect } from 'react';
import { BiUser } from "react-icons/bi"
import { FiEdit2 } from "react-icons/fi"
import { MdPlayCircle as Play, MdPauseCircle as Pause } from "react-icons/md"
import axios from 'axios';

export default function Perfil({ username, audios, videos, podcasts, selecionarAudio, isPlaying }) {
    const api = "http://localhost:4000";
    const [selectedAudios, setSelectedAudios] = useState([])
    const [selectedVideos, setSelectedVideos] = useState([])
    const [selectedPodcasts, setSelectedPodcasts] = useState([])

    const [video, setVideo] = useState([])

    useEffect(() => {
        // Fetch the uploads from Firestore or your backend API
        axios.get(api + "/video")
          .then(response => {
            const uploadsData = response.data;
            setVideo(uploadsData);
          })
          .catch(error => {
            console.error('Error fetching uploads:', error);
          });
      }, []);

    useEffect(() => {
        const filtrarAudios = () => {
            const audiosFiltradas = audios.filter(audio => audio.autor === username);
            setSelectedAudios(audiosFiltradas);
        };

        filtrarAudios();
    }, [audios, username]);

    useEffect(() => {
        const filtrarVideos = () => {
            const videosFiltradas = video.filter(video => video.autor === username);
            setSelectedVideos(videosFiltradas);
        };

        filtrarVideos();
    }, [videos, username]);

    useEffect(() => {
        const filtrarPodcasts = () => {
            const podcastsFiltradas = podcasts.filter(video => video.autor === username);
            setSelectedPodcasts(podcastsFiltradas);
        };

        filtrarPodcasts();
    }, [podcasts, username]);


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
                    <InputGroup style={{ background: 'none' }}>
                        <InputGroupText className={css(styles.imgArea)} onClick={handleSelectFile} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {profilePicture ? (
                                <img src={profilePicture} alt="Foto de Perfil" style={{ width: '111.2%', height: '104.3%', marginLeft: '-5.8%', borderRadius: '50%' }} />
                            ) : (isHovered ? <FiEdit2 className={css(styles.icon)} /> : <BiUser className={css(styles.icon)} />)}
                        </InputGroupText>

                        <Input type="file" onChange={handleFileChange} style={{ display: 'none' }} innerRef={fileInputRef} />
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
                        {selectedAudios != null && (
                            selectedAudios.map((audio, index) => (
                                <div key={index} className={css(styles.audios)}>

                                    <div className={css(styles.spans)}>
                                        <span style={{ background: 'none' }}>{index + 1}</span>
                                        <img src={audio.imageDownloadURL} className={css(styles.img)} alt="" />

                                        <div className={css(styles.titles)}>
                                            <span style={{ background: 'none' }}>{audio.titulo}</span><br />
                                            <span className={css(styles.artista)}>{audio.autor}</span>
                                        </div>
                                    </div>

                                    <span style={{ background: 'none' }}>
                                        {isPlaying == true ? (
                                            <Pause className={css(styles.icone)} />
                                        ) : (
                                            <Play className={css(styles.icone)} />
                                        )}
                                    </span>
                                </div>
                            ))
                        )}
                        {selectedAudios.length == 0 && <p className={css(styles.txt)}>Sem áudios</p>}
                    </TabPane>

                    <TabPane tabId="2" className={css(styles.tab)}>
                        <div className={css(styles.listaVideos)}>
                            {selectedVideos.map((video, index) => (
                                <div key={index} className={css(styles.lista)}>
                                    <img className={css(styles.imgV)} src={video.imageDownloadURL} alt="Image" /> <br />
                                    <span style={{ background: 'none' }}>{video.titulo}</span> <br />
                                    <span style={{ background: 'none' }}>{video.autor}</span>
                                </div>
                            ))}
                        </div>
                        {selectedVideos.length == 0 && <p className={css(styles.txt)}>Sem vídeos</p>}
                    </TabPane>

                    <TabPane tabId="3" className={css(styles.tab)}>
                        <p className={css(styles.txt)}>Sem álbuns</p>
                    </TabPane>

                    <TabPane tabId="4" className={css(styles.tab)}>
                    {selectedPodcasts != null && (
                            selectedPodcasts.map((podcast, index) => (
                                <div key={index} className={css(styles.audios)}>

                                    <div className={css(styles.spans)}>
                                        <span style={{ background: 'none' }}>{index + 1}</span>
                                        <img src={podcast.imageDownloadURL} className={css(styles.img)} alt="" />

                                        <div className={css(styles.titles)}>
                                            <span style={{ background: 'none' }}>{podcast.titulo}</span><br />
                                            <span className={css(styles.artista)}>{podcast.autor}</span>
                                        </div>
                                    </div>

                                    <span style={{ background: 'none' }}>
                                        {isPlaying == true ? (
                                            <Pause className={css(styles.icone)} />
                                        ) : (
                                            <Play className={css(styles.icone)} />
                                        )}
                                    </span>
                                </div>
                            ))
                        )}
                        {selectedPodcasts.length == 0 && <p className={css(styles.txt)}>Sem podcasts</p>}
                    </TabPane>
                </TabContent>
            </Row>
        </Container>
    )
}

const styles = StyleSheet.create({
    cont: {
        background: 'none',
        color: 'black',
        width: '100%',
    },

    row: {
        transform: 'translate(-8%, 0%)',
        width: '127%',
        borderRadius: '10px',
        marginTop: '-13.5%',
        background: 'rgb(18,18,18)',
        textAlign: 'justify',
    },

    div: {
        background: 'none',
        display: 'inline',
        padding: '2% 0 0 2%',
    },

    imgArea: {
        width: '230px',
        height: '230px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        background: 'rgb(36,36,36)',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },

    icon: {
        fontSize: '150px',
        marginLeft: '13%',
        background: 'none',
        color: 'black'
    },

    tittle: {
        transform: 'translate(0%, -200%)',
        position: 'fixed',
        color: 'white',
        background: 'none',
        fontSize: '70px',
        marginLeft: '21%',
    },

    nav: {
        background: 'black',
        borderBottom: '2.5px solid grey',
        marginTop: '4%'
    },

    item: {
        background: 'none',
        ':hover': {
            cursor: 'pointer',
        },

        ':focus': {
            color: 'black'
        }
    },

    tab: {
        background: 'black',
        paddingTop: '1%',
    },

    txt: {
        background: 'none',
        color: 'white'
    },

    audios: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        background: 'black',
        fontSize: '16px',
        padding: '0.3% 2% 0.3% 0',
        margin: '0 1.5% 0 1.5%',

        ':hover': {
            background: 'rgb(36,36,36)',
            borderRadius: '6px'
        },
        ':active': {
            background: 'rgb(36,36,36)'
        }
    },

    spans: {
        background: 'none',
        marginLeft: '1%',
        display: 'flex',
        alignItems: 'center',
        width: '40%'
    },

    img: {
        width: '45px',
        height: '40px',
        marginLeft: '4%',
        background: 'rgb(36,36,36)'
    },

    titles: {
        marginLeft: '3%',
        background: 'none',
        textAlign: 'justify'
    },

    artista: {
        background: 'none',
        fontSize: '14px',
    },

    icone: {
        background: 'none',
        fontSize: '29px',
        ':hover': {
            cursor: 'pointer'
        }
    },

    listaVideos: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        background: 'none',
    },

    lista: {
        background: 'none',
        borderRadius: '8px',
        textAlign: 'center',
        ':hover': {
            cursor: 'pointer'
        }
    },

    imgV: {
        width: '240px',
        height: '180px',
        background: 'rgb(36,36,36)',
        borderRadius: '15px',
        border: '1px solid grey'
    },
})