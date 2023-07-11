import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Videos = ({handleShow, videos, selecionarVideo}) => {

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
                     <div key={index} onClick={() => reproduzirVideo(index)} className={css(styles.lista)}>
                            <img className={css(styles.img)} src={video.imageDownloadURL} alt="Image"/> <br/>
                            <span style={{background: 'none'}}>{video.description}</span>
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
//Qualquer
    listaVideos: {
        width: '100%',
        //border: '1px solid grey',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        background: 'rgb(36,36,36)'
    },

    lista: {
        background: 'none',
        borderRadius: '8px',
        textAlign: 'justify',
        ':hover':{
            cursor: 'pointer'
        }
    },

    img:{
        width: '300px',
        height: '220px',
        background: 'rgb(36,36,36)',
        borderRadius: '8px',
        marginBottom: '4%',
        border: '1px solid grey'
    },
});

export default Videos;