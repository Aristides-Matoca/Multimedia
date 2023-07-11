import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { MdPlayCircle as Play, MdPauseCircle as Pause } from "react-icons/md"

const Podcasts = ({ podcasts, selecionarPodcast, isPlaying, irPerfil }) => {
  const [podcastPlayingIndex, setPodcastPlayingIndex] = useState(null)
  const podeTitulo = 'Podcasts'

  const handleClick = (index) => {
    var playPause

    if (podcastPlayingIndex === index) {
      setPodcastPlayingIndex(null);
      playPause = 12
    } else {
      setPodcastPlayingIndex(index);
      playPause = 11
    }

    selecionarPodcast(index, 4, playPause);
    setTimeout(() => {
      selectRadio(index, playPause);
    }, 100);
  };

  const selectRadio = (index, playPause) => {
    selecionarPodcast(index, 4, playPause);
  };

  return (
    <div className={css(styles.container)}>
      
      <div className={css(styles.playlist)}>
        <span style={{background: 'none'}}>{podeTitulo}</span>
      </div>

      <div className={css(styles.info)} style={{background: 'none'}}>

        <div className={css(styles.spans)}>
          <span style={{background: 'none'}}>#</span>
          <span style={{marginLeft: '4%', background: 'none'}}>Título</span>
        </div>
        <span style={{background: 'none', marginRight: '-1.5%'}}>Reproduzir</span>
      </div>

      {podcasts.map((podcast, index) => (
        <div key={index} className={css(styles.radios)}>

          <div className={css(styles.spans)}>
            <span style={{background: 'none'}}>{index+1}</span>
            <img src={podcast.imageDownloadURL} className={css(styles.img)} alt="" />

            <div className={css(styles.titles)}>
              <span style={{background: 'none'}}>{podcast.titulo}</span><br />
              <span className={css(styles.autor)} onClick={() => irPerfil(podcast.autor)}>{podcast.autor}</span>
            </div>
          </div>

          <span style={{background: 'none'}} onClick={() => handleClick(index)}>
            {podcastPlayingIndex === index && isPlaying == true ? (
              <Pause className={css(styles.icone)}/>
            ) : (
              <Play className={css(styles.icone)}/>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Podcasts;

const styles = StyleSheet.create({
  container:{
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    background: 'black',
    width: '101.4%',
    marginLeft: '-0.8%',
  },

  playlist:{
    background: 'linear-gradient(to bottom, #555555, rgba(0, 0, 0, 0.3))',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    padding: '6% 0 4% 0',
    fontSize: '40px',
    color: 'white'
  },

  info:{
    borderBottom: '1px solid grey',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'rgb(169,170,172)',
    background: 'none',
    fontSize: '16px',
    padding: '0.3% 2% 0.3% 0',
    margin: '0 1.5% 0 1.5%'
  },

  radios:{
    //border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    background: 'black',
    fontSize: '16px',
    padding: '0.3% 2% 0.3% 0',
    margin: '0 1.5% 0 1.5%',

    ':hover':{
      background: 'rgb(36,36,36)',
      borderRadius: '6px'
    },
    ':active':{
      background: 'rgb(36,36,36)'
    }
  },

  spans:{
    background: 'none',
    marginLeft: '1%',
    display: 'flex',
    alignItems: 'center',
    width: '40%'
  },

  img:{
    width: '45px',
    height: '40px',
    marginLeft: '4%',
    background: 'rgb(36,36,36)'
  },

  titles:{
    marginLeft: '3%',
    background: 'none',
    textAlign: 'justify'
  },

  autor:{
    background: 'none',
    fontSize: '14px',

    ':hover':{
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },

  radioname:{
    background: 'none',
    fontSize: '14px',
  },

  icone: {
    background: 'none', 
    fontSize: '29px',
    ':hover':{
      cursor: 'pointer'
    }
  }
})
