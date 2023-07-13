import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Videos = ({ handleShow, videos, selecionarVideo, irPerfil }) => {

    const reproduzirVideo = (index) => {

        handleShow('Assistir')
        selecionarVideo(index, 2, 0)

        setTimeout(() => {
            selectVideo(index);
        }, 100);
    };

    const selectVideo = (index) => {
        selecionarVideo(index, 2, 0);
    };

    return (
        <div className={css(styles.videosContainer)}>
            <div className={css(styles.listaVideos)}>
                {videos.map((video, index) => (
                    <div key={index} className={css(styles.lista)}>
                        <img className={css(styles.img)} src={video.imageDownloadURL} alt="Image" onClick={() => reproduzirVideo(index)} /> <br />
                        <span style={{ background: 'none' }} onClick={() => reproduzirVideo(index)}>{video.titulo}</span> <br />
                        <span className={css(styles.artista)} onClick={() => irPerfil(video.autor)}>{video.autor}</span>
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
        width: '101%',
        marginLeft: '-0.5%',
    },

    listaVideos: {
        width: '100%',
        //border: '1px solid grey',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '10px',
        color: 'white',
        background: 'rgb(36,36,36)',
        marginRight: '0.7%'
    },

    lista: {
        background: 'none',
        borderRadius: '8px',
        textAlign: 'center',
        ':hover': {
            cursor: 'pointer'
        }
    },

    img: {
        width: '260px',
        height: '190px',
        background: 'rgb(36,36,36)',
        borderRadius: '15px',
        marginBottom: '1%',
        border: '1px solid grey'
    },

    artista: {
        background: 'none',
        fontSize: '14px',

        ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
            fontWeight: 'bold'
        }
    },
});

export default Videos;