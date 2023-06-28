import React, {useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite'

const VideoPlayer = ({videos, selecionarVideo, urlVideo, mediaRef, indexVideo}) => {

    useEffect(() => {
        if(indexVideo != null){
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

    return (
        <div className={css(styles.videosContainer)}>
            <div className={css(styles.videoActive)}>
            <video ref={mediaRef} src={urlVideo} className={css(styles.video)} controls autoPlay>
            </video>
            </div>

            <div className={css(styles.listaVideos)}>
                <h3 className={css(styles.title)}>Vídeos</h3>
                {videos.map((video, index) => (
                     <div key={index} onClick={() => reproduzirVideo(index)} className={css(styles.lista)}>
                        <span style={{background: 'none'}}>{index+1}</span>
                        <span style={{background: 'none'}}>{video.titulo} - {video.description}</span>
                        <span style={{background: 'none'}}></span>
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
        width: '23%',
        border: '0.5px solid grey',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        color: 'white',
        background: 'black'
      },

    title:{
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
        padding: '1.2% 2% 1.2% 2%',
        margin: '0 3% 0 3%',
        ':hover':{
            background: 'rgb(36,36,36)',
            borderRadius: '6px',
            cursor: 'pointer'
        },
          ':active':{
            background: 'rgb(36,36,36)'
        }
    },

    icone: {
        background: 'none', 
        fontSize: '29px',
    }
});

export default VideoPlayer;