import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { BsThreeDotsVertical as Dots } from "react-icons/bs"
import { BiLeftArrow as Arrow } from "react-icons/bi"

const VideoPlayer = ({ videos, selecionarVideo, urlVideo, mediaRef, indexVideo, irPerfil }) => {

    useEffect(() => {
        if (indexVideo != null) {
            mediaRef.current.play()
        }
    }, []);

    const reproduzirVideo = (index) => {
        selecionarVideo(index, 2, 0)
        mediaRef.current.play()

        setTimeout(() => {
            selectVideo(index);
        }, 100);
    };

    const selectVideo = (index) => {
        selecionarVideo(index, 2, 0);
        mediaRef.current.play()
    };

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
        e.stopPropagation()
    };

    const handleOptionsClick = () => {
        setShowOptions(false)
    };

    const [hovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
        <div className={css(styles.videosContainer)}>
            <div className={css(styles.videoActive)}>
                <video ref={mediaRef} src={urlVideo} className={css(styles.video)} controls autoPlay>
                </video>
            </div>

            <div className={css(styles.listaVideos)}>
                <h3 className={css(styles.title)}>Vídeos</h3>
                {videos.map((video, index) => (
                    <div key={index} onClick={() => reproduzirVideo(index)} className={css(styles.lista)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                        <div style={{ background: 'none' }}>
                            <span style={{ background: 'none' }}>{index + 1}</span> -
                            <span style={{ background: 'none' }}> {video.titulo}</span>
                        </div>

                        <span className={css(styles.options)}>
                            {hovered === index ? (
                                <React.Fragment>
                                    <Dots style={{ background: 'none' }} ref={iconRef} onClick={handleClick2} />
                                    {showOptions ? (
                                        <div className={css(styles.definition)} onClick={handleOptionsClick} ref={optionsRef}>
                                            <p className={css(styles.cont)}>Adicionar aos favoritos</p>
                                            <p className={css(styles.cont)} onClick={() => irPerfil(video.autor)}>Ir ao perfil do artista</p>
                                            <p className={css(styles.cont2)}><Arrow style={{ background: 'none', color: 'white' }} /> Adicionar a playlist</p>
                                        </div>
                                    ) : null}
                                </React.Fragment>
                            ) : (
                                <Dots style={{ background: 'none', visibility: 'hidden' }} />
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = StyleSheet.create({
    videosContainer: {
        display: 'flex',
        justifyContent: 'center',
        background: 'none',
        width: '101.3%',
        height: '100%',
        marginLeft: '-0.8%',
    },

    videoActive: {
        display: 'block',
        width: '72%',
        background: 'none',
        transform: 'translate(-0.5%, 0%)',
    },

    video: {
        width: '100%',
        height: '100%',
        background: 'none',
    },

    listaVideos: {
        width: '27%',
        border: '0.5px solid grey',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        color: 'white',
        background: 'black',
        flexGrow: '1',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarColor: 'transparent transparent',
        '::-webkit-scrollbar': {
            width: '10px',
        },

        '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },

        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '5px',
        },

        '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'transparent',
        },

        '::-webkit-scrollbar-thumb:vertical': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },

        '::-webkit-scrollbar-thumb:vertical:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        },
    },

    title: {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        background: 'rgb(33,33,33)',
        padding: '10px 0 10px 0',
        fontSize: '25px'
    },

    lista: {
        background: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2%',
        margin: '0 3% 0 3%',
        ':hover': {
            background: 'rgb(36,36,36)',
            borderRadius: '6px',
            cursor: 'pointer'
        },
        ':active': {
            background: 'rgb(36,36,36)'
        }
    },

    options: {
        background: 'none',
        fontSize: '25px',
        ':hover': {
            cursor: 'pointer'
        }
    },

    definition: {
        position: 'absolute',
        top: '23%',
        right: '2%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'justify',
        background: 'rgb(44,44,43)',
        width: '17%'
    },

    cont: {
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
});

export default VideoPlayer;