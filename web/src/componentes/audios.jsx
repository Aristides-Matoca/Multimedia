import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem } from 'reactstrap'
import Img from '../img/audiologo.jpg'
import React, { useState, useEffect } from 'react';

export default function Audios({ handleShow, audios, pessoa, irPerfil, play }) {
    const [autores, setAutores] = useState([]);
    const [selectedArtistas, setSelectedArtistas] = useState([])
    const [newPlayLists, setNewPlayLists] = useState([])
    const [playLists, setPlayLists] = useState([
        { img: Img, nome: 'Mix Pop' },
        { img: Img, nome: 'Mix 2023' },
        { img: Img, nome: 'Mix Hip-Hop' },
        { img: Img, nome: 'Mix 2020' },
        { img: Img, nome: 'Mix 1990' },
    ])

    useEffect(() => {
        const verificarAutores = () => {
            const novosAutores = pessoa
                .filter(people => audios.some(audio => audio.autor === people.username))
                .map(people => people);
            setAutores(prevAutores => [...new Set([...prevAutores, ...novosAutores])]);

        };
        verificarAutores();
    }, [pessoa, audios]);

    useEffect(() => {
        if (autores != null) {
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            const shuffledArray = [...autores].sort(() => 0.5 - Math.random());
            const selected = shuffledArray.slice(0, 4);
            setSelectedArtistas(selected)
        }
    }, [autores]);

    useEffect(() => {
        if (playLists != null) {
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            const shuffledArray = [...playLists].sort(() => 0.5 - Math.random());
            setNewPlayLists(shuffledArray)
        }
    }, [playLists]);

    return (
        <Row className={css(styles.row)}>
            <Nav vertical className={css(styles.nav1)}>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Playlists mais ouvidas</h2>
                </div>

                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item1)} onClick={() => play('Playlist ISPMedia')} >
                        <img className={css(styles.img)} src={Img} alt="" />
                        <span className={css(styles.name)}>Playlist ISPMedia</span>
                    </NavItem>

                    {newPlayLists.map((playList, index) => (
                        <NavItem className={css(styles.item1)} key={index} onClick={() => play(playList.nome)} >
                            <img className={css(styles.img)} src={playList.img} alt="" />
                            <span className={css(styles.name)}>{playList.nome}</span>
                        </NavItem>
                    ))}
                </Nav>


                <Nav className={css(styles.nav2)}>
                    <div className={css(styles.divtitles)}>
                        <h2 className={css(styles.title)}>Artistas que talvez conheças</h2>
                        <span className={css(styles.vermais)} onClick={() => handleShow('Artistas')}>Ver mais</span>
                    </div>
                    <Row className={css(styles.row2)}>
                        {selectedArtistas.map((people, index) => (
                            <NavItem className={css(styles.item2)} onClick={() => irPerfil(people.username)}>
                                <img className={css(styles.img2)} src={people.foto} /><br />
                                <span className={css(styles.autor)}>{people.username}</span>
                            </NavItem>
                        ))}
                    </Row>
                </Nav>
            </Nav>
        </Row>
    )
}

const styles = StyleSheet.create({
    row: {
        background: 'none',
        color: 'white'
    },

    nav1: {
        background: 'none',
        paddingLeft: '27px',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },

    divtitles: {
        background: 'black',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1% 1.6% 0 1.5%',
        margin: '0% -0.5% 0% -2.1%',

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
        padding: '2% 1.5% 2% 1.5%',
        margin: '-0.5% -0.5% 1% -2.1%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
    },

    item1: {
        background: 'rgb(36,36,36)',
        width: '98%',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'inherit',
        marginBottom: '1%',
        ':hover': {
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    img: {
        width: '33%',
        height: '100%',
        background: 'none',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },

    name: {
        background: 'none',
        margin: '8% 0 0 6%',
        fontSize: '22px'
    },

    nav2: {
        width: '102.8%',
        background: 'black',
        padding: '1% 1.5% 2% 1.5%',
        margin: '0% -4% -1.5% -2.2%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '10px',
        borderRadius: '6px',
        flexGrow: '1',
        overflowY: 'hidden',
        overflowX: 'hidden',
    },

    row2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1% 1.5% 1% 1.5%',
        background: 'none'
    },

    item2: {
        background: 'rgb(36,36,36)',
        width: '20%',
        borderRadius: '5px',
        padding: '1%',
        ':hover': {
            textDecoration: 'underline',
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    img2: {
        width: '200px',
        height: '200px',
        background: 'none',
        borderRadius: '50%',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        marginBottom: '5%'
    },

    autor: {
        background: 'none',
        fontSize: '14px',

        ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
})