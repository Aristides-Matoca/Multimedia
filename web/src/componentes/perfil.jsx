import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Nav, NavItem, NavLink, TabPane, TabContent, Input, InputGroup, InputGroupText } from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'
import React, { useState, useRef, useEffect } from 'react';
import { BiUser } from "react-icons/bi"
import { FiEdit2 } from "react-icons/fi"
import { MdPlayCircle as Play, MdPauseCircle as Pause } from "react-icons/md"
import { FiHeart as Heart } from "react-icons/fi"
import { BsThreeDots as Dots } from "react-icons/bs"
import { BiLeftArrow as Arrow } from "react-icons/bi"

export default function Perfil({ handleShow, username, owner, audios, videos, podcasts, selecionarMedia, isPlaying }) {
    const [selectedAudios, setSelectedAudios] = useState([])
    const [selectedVideos, setSelectedVideos] = useState([])
    const [selectedPodcasts, setSelectedPodcasts] = useState([])
    const [audioPlayingIndex, setAudioPlayingIndex] = useState(null)
    const [podPlayingIndex, setPodPlayingIndex] = useState(null)

    useEffect(() => {
        const filtrarAudios = () => {
            const audiosFiltradas = audios.filter(audio => audio.autor === username);
            setSelectedAudios(audiosFiltradas);
        };

        filtrarAudios();
    }, [audios, username]);

    useEffect(() => {
        const filtrarVideos = () => {
            const videosFiltradas = videos.filter(video => video.autor === username);
            setSelectedVideos(videosFiltradas);
        };

        filtrarVideos();
    }, [videos, username]);

    useEffect(() => {
        const filtrarPodcasts = () => {
            const podcastsFiltradas = podcasts.filter(podcast => podcast.autor === username);
            setSelectedPodcasts(podcastsFiltradas);
        };

        filtrarPodcasts();
    }, [podcasts, username]);

    const handleClick = (pos, url, index) => {
        var posicao
        var playPause

        if (pos == 1) {
            posicao = audios.findIndex(audio => audio.audioURL === url)
            if (audioPlayingIndex === index) {
                setAudioPlayingIndex(null); // Pausa o áudio se o mesmo já estiver sendo reproduzido
                playPause = 12
            } else {
                setAudioPlayingIndex(index); // Reproduz o áudio selecionado
                playPause = 11
            }
        }

        else if (pos == 2) {
            posicao = videos.findIndex(video => video.videoURL === url)
            playPause = 11
            handleShow('Assistir')
        }

        else if (pos == 4) {
            posicao = podcasts.findIndex(podcast => podcast.audioURL === url)
            if (podPlayingIndex === index) {
                setPodPlayingIndex(null); // Pausa o áudio se o mesmo já estiver sendo reproduzido
                playPause = 12
            } else {
                setPodPlayingIndex(index); // Reproduz o áudio selecionado
                playPause = 11
            }
        }

        selecionarMedia(posicao, pos, playPause);
        setTimeout(() => {
            selectMedia(posicao, pos, playPause);
        }, 100);
    };

    const selectMedia = (posicao, pos, playPause) => {
        selecionarMedia(posicao, pos, playPause);
    };


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

    //Funções de Options------------------------------------------------------------------
    const [showOptions, setShowOptions] = useState(false)
    const iconRef = useRef(null)
    const optionsRef = useRef(null)

    const handleOutsideClick = (event) => {
        if (
            iconRef.current &&
            !iconRef.current.contains(event.target) &&
            optionsRef.current &&
            !optionsRef.current.contains(event.target)
        ) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleClick2 = () => {
        setShowOptions(!showOptions)
    };

    const handleOptionsClick = () => {
        setShowOptions(false)
    };

    const [hovered, setHovered] = useState(null);

    const handleMouseEnter2 = (index) => {
        setHovered(index);
    };

    const handleMouseLeave2 = () => {
        setHovered(null);
    };

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
                                <div key={index} className={css(styles.audios)} onMouseEnter={() => handleMouseEnter2(index)} onMouseLeave={handleMouseLeave2}>

                                    <div className={css(styles.spans)}>
                                        <span style={{ background: 'none' }}>{index + 1}</span>
                                        <img src={audio.imageDownloadURL} className={css(styles.img)} alt="" />

                                        <div className={css(styles.titles)}>
                                            <span style={{ background: 'none' }}>{audio.titulo}</span><br />
                                            <span className={css(styles.artista)}>{audio.autor}</span>
                                        </div>
                                    </div>

                                    <div style={{ background: 'none', width: '14%' }}>

                                        {hovered === index ? (
                                            <span className={css(styles.favorite)}>
                                                <Heart style={{ background: 'none' }} />
                                            </span>
                                        ) : (
                                            <span className={css(styles.favorite)}>
                                                <Heart style={{ background: 'none', visibility: 'hidden' }} />
                                            </span>
                                        )}

                                        <span style={{ background: 'none' }} onClick={() => handleClick(1, audio.audioURL, index)}>
                                            {audioPlayingIndex === index && isPlaying == true ? (
                                                <Pause className={css(styles.icone)} />
                                            ) : (
                                                <Play className={css(styles.icone)} />
                                            )}
                                        </span>

                                        <span className={css(styles.options)}>
                                            {hovered === index ? (
                                                <React.Fragment>
                                                    <Dots style={{ background: 'none' }} ref={iconRef} onClick={handleClick2} />
                                                    {showOptions ? (
                                                        <div className={css(styles.definition)} onClick={handleOptionsClick} ref={optionsRef}>
                                                            <p className={css(styles.cont1)}>Adicionar aos favoritos</p>
                                                            {username === owner && <p className={css(styles.cont1)} >Editar áudio</p>}
                                                            <p className={css(styles.cont2)}><Arrow style={{ background: 'none', color: 'white' }} /> Adicionar a playlist</p>
                                                        </div>
                                                    ) : null}
                                                </React.Fragment>
                                            ) : (
                                                <Dots style={{ background: 'none', visibility: 'hidden' }} />
                                            )}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                        {selectedAudios.length == 0 && <p className={css(styles.txt)}>Sem áudios</p>}
                    </TabPane>

                    <TabPane tabId="2" className={css(styles.tab)}>
                        <div className={css(styles.listaVideos)}>
                            {selectedVideos.map((video, index) => (
                                <div key={index} className={css(styles.lista)} onClick={() => handleClick(2, video.videoURL, null)}>
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
                                <div key={index} className={css(styles.audios)} onMouseEnter={() => handleMouseEnter2(index)} onMouseLeave={handleMouseLeave2}>

                                    <div className={css(styles.spans)}>
                                        <span style={{ background: 'none' }}>{index + 1}</span>
                                        <img src={podcast.imageDownloadURL} className={css(styles.img)} alt="" />

                                        <div className={css(styles.titles)}>
                                            <span style={{ background: 'none' }}>{podcast.titulo}</span><br />
                                            <span className={css(styles.artista)}>{podcast.autor}</span>
                                        </div>
                                    </div>

                                    <div style={{ background: 'none', width: '14%' }}>

                                        {hovered === index ? (
                                            <span className={css(styles.favorite)}>
                                                <Heart style={{ background: 'none' }} />
                                            </span>
                                        ) : (
                                            <span className={css(styles.favorite)}>
                                                <Heart style={{ background: 'none', visibility: 'hidden' }} />
                                            </span>
                                        )}

                                        <span style={{ background: 'none' }} onClick={() => handleClick(4, podcast.audioURL, index)}>
                                            {podPlayingIndex === index && isPlaying == true ? (
                                                <Pause className={css(styles.icone)} />
                                            ) : (
                                                <Play className={css(styles.icone)} />
                                            )}
                                        </span>

                                        <span className={css(styles.options)}>
                                            {hovered === index ? (
                                                <React.Fragment>
                                                    <Dots style={{ background: 'none' }} ref={iconRef} onClick={handleClick2} />
                                                    {showOptions ? (
                                                        <div className={css(styles.definition)} onClick={handleOptionsClick} ref={optionsRef}>
                                                            <p className={css(styles.cont1)}>Adicionar aos favoritos</p>
                                                            {username === owner && <p className={css(styles.cont1)} >Editar podcast</p>}
                                                            <p className={css(styles.cont2)}><Arrow style={{ background: 'none', color: 'white' }} /> Adicionar a playlist</p>
                                                        </div>
                                                    ) : null}
                                                </React.Fragment>
                                            ) : (
                                                <Dots style={{ background: 'none', visibility: 'hidden' }} />
                                            )}
                                        </span>
                                    </div>
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

    favorite: {
        background: 'none',
        fontSize: '22px',
        ':hover': {
            cursor: 'pointer'
        }
    },

    icone: {
        margin: '0 10% 0 25%',
        background: 'none',
        fontSize: '29px',
        ':hover': {
            cursor: 'pointer'
        }
    },

    options: {
        marginRight: '-12%',
        background: 'none',
        fontSize: '25px',
        ':hover': {
            cursor: 'pointer'
        }
    },

    definition: {
        position: 'absolute',
        top: '53%',
        right: '2%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'justify',
        background: 'rgb(44,44,43)',
        width: '17%'
    },

    cont1: {
        background: 'none',
        fontSize: '18px',
        color: 'white',
        margin: '5px',
        padding: '4px',
        ':hover': {
            cursor: 'pointer',
            color: 'rgba(255, 213, 0, 1)',
            background: 'rgb(36,36,36)'
        },
    },

    cont2: {
        borderTop: '2.5px solid rgb(36,36,36)',
        background: 'none',
        fontSize: '18px',
        color: 'white',
        margin: '5px',
        padding: '4px',
        ':hover': {
            cursor: 'pointer',
            color: 'rgba(255, 213, 0, 1)',
            background: 'rgb(36,36,36)'
        },
    },

    listaVideos: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '10px',
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