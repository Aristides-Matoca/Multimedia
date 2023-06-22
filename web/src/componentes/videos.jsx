import React, {useState, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite'

const Videos = ({videos, selecionarVideo, urlVideo, mediaRef}) => {
    const [videoSelecionado, setVideoSelecionado] = useState(null);

    const reproduzirVideo = (video, index) => {
        setVideoSelecionado(video);
        selecionarVideo(index, 2)
        mediaRef.current.play()

        setTimeout(() => {
            selectVideo(index);
          }, 100);
    };

    const selectVideo = (index) => {
        selecionarVideo(index, 2);
        mediaRef.current.play()
    };

    return (
        <div className={css(styles.videosContainer)}>
            <div className={css(styles.videoWrapper, videoSelecionado && styles.videoActive)}>
                <video ref={mediaRef} src={urlVideo} className={css(styles.video)} controls autoPlay/>
            </div>

            <div className={css(styles.listaVideos, videoSelecionado && styles.listaVideos2)}>
                <h3 className={css(styles.title)}>Vídeos</h3>
                {videos.map((video, index) => (
                    <div key={index} onClick={() => reproduzirVideo(video, index)} className={css(styles.lista)}>
                        {video.nome}
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
      background: 'none'
    },

    videoWrapper: {
      display: 'none',
    },

    videoActive: {
      display: 'block',
      width: '71%',
      background: 'none',
      transform: 'translate(-3%, 0%)',
    },

    video: {
        width: '100%',
        height: '100%',
        background: 'none',
    },

    listaVideos: {
      width: '100%',
      border: '1px solid grey',
      borderRadius: '8px',
      color: 'white',
      background: 'black'
    },

    listaVideos2: {
        width: '23%',
        border: '0.5px solid grey',
        borderRadius: '8px',
        color: 'white',
        background: 'black'
      },

    title:{
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        background: 'rgb(33,33,33)',
        padding: '10px 0 10px 0'
    },

    lista: {
        background: 'none',
        ':hover':{
            cursor: 'pointer'
        }
    }
});

export default Videos;