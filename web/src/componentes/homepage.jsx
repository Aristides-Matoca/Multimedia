import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem } from 'reactstrap'
import audiologo from '../img/audiologo.jpg'
import React, { useState, useEffect } from 'react'

export default function Homepage({ handleShow, selecionarMedia, videos, radios, podcasts }) {
    const [selectedVideos, setSelectedVideos] = useState([])
    const [selectedRadios, setSelectedRadios] = useState([])
    const [selectedPodcasts, setSelectedPodcasts] = useState([])

    useEffect(() => {
        if (videos != null) {
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            const shuffledArray = [...videos].sort(() => 0.5 - Math.random());
            const selected = shuffledArray.slice(0, 4);
            setSelectedVideos(selected)
        }
    }, [videos]);

    useEffect(() => {
        if (radios != null) {
            const shuffledArray = [...radios].sort(() => 0.5 - Math.random());
            const selected = shuffledArray.slice(0, 3);
            setSelectedRadios(selected)
        }
    }, [radios]);

    useEffect(() => {
        if (podcasts != null) {
            const shuffledArray = [...podcasts].sort(() => 0.5 - Math.random());
            //const selected = shuffledArray.slice(0, 3);
            setSelectedPodcasts(shuffledArray)
        }
    }, [podcasts]);

    const handleClick = (pos, url) => {
        var posicao

        if (pos == 2) {
            posicao = videos.findIndex(video => video.videoURL === url)
            handleShow('Assistir')
        }

        else if(pos == 3){
            posicao = radios.findIndex(radio => radio.audioURL === url)
        }

        else if(pos == 4){
            posicao = podcasts.findIndex(podcast => podcast.audioURL === url)
        }

        selecionarMedia(posicao, pos, 11);
        setTimeout(() => {
            selectMedia(posicao, pos);
        }, 100);
    };

    const selectMedia = (posicao, pos) => {
        selecionarMedia(posicao, pos, 11);
    };

    return (
        <Row className={css(styles.row)}>
            <Nav vertical className={css(styles.nav1)}>
                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Vídeos</h2>
                    <span className={css(styles.vermais)} onClick={() => handleShow('Video')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedVideos.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(2, video.videoURL)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.imageDownloadURL} alt="Image" /> <br />
                            </div>
                            {video.titulo}
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Áudios</h2>
                    <span className={css(styles.vermais)} onClick={() => handleShow('Audio')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={audiologo} alt="Audio" /> <br />
                        <span className={css(styles.name)}>4<br /> Beyonce</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={audiologo} alt="Audio" /> <br />
                        <span className={css(styles.name)}>Thank u, Next<br /> Ariana Grande</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={audiologo} alt="Audio" />
                        <span className={css(styles.name)}>Damn<br /> Kendrick Lamar</span>
                    </NavItem>
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Rádios</h2>
                    <span className={css(styles.vermais)} onClick={() => handleShow('Radio')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedRadios.map((radio, index) => (
                        <NavItem key={index} className={css(styles.item3)} onClick={() => handleClick(3, radio.audioURL)}>
                            <img className={css(styles.img3)} src={radio.imageDownloadURL} alt="Image" /> <br />
                            <span className={css(styles.name)}>{radio.titulo}</span>
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Podcasts</h2>
                    <span className={css(styles.vermais)} onClick={() => handleShow('Podcast')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedPodcasts.map((podcast, index) => (
                        <NavItem key={index} className={css(styles.item3)} onClick={() => handleClick(4, podcast.audioURL)}>
                            <img className={css(styles.img3)} src={podcast.imageDownloadURL} alt="Image" /> <br />
                            <span className={css(styles.name)}>{podcast.titulo}</span>
                        </NavItem>
                    ))}
                </Nav>
            </Nav>
        </Row>
    )
}

const styles = StyleSheet.create({
    row: {
        background: 'none'
    },

    nav1: {
        background: 'none',
        padding: '0 0.5% 0 0.1%',
        width: '100%',
    },

    divtitles: {
        background: 'black',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2% 1.6% 0 1.5%',
        color: 'white'

    },

    title: {
        background: 'black',
        textAlign: 'left',
        fontSize: '27px',
    },

    vermais: {
        background: 'none',
        ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },

    nav: {
        background: 'black',
        padding: '2% 1.5% 0.3% 1.5%',
        margin: '-0.5% 0 1% 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
    },

    item1: {
        background: 'rgb(36,36,36)',
        padding: '1% 1.5% 0.5% 1.4%',
        marginTop: '-1%',
        width: '18.3%',
        borderRadius: '5px',
        marginBottom: '2%',
        ':hover': {
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    foto: {
        width: '190px',
        height: '185px',
        background: 'none',
        borderRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        marginBottom: '5%', 
    },

    img: {
        width: '100%',
        height: '100%',
        background: 'none',
        borderRadius: '5px',
    },

    item3: {
        background: 'rgb(36,36,36)',
        width: '30%',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'inherit',
        marginBottom: '2%',
        ':hover': {
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    img3: {
        width: '33%',
        height: '100%',
        background: 'none',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },

    name: {
        background: 'none',
        marginLeft: '6%',
        fontSize: '17px'
    },
})