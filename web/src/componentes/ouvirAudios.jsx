import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { MdPlayCircle as Play, MdPauseCircle as Pause } from "react-icons/md"
import { FiHeart as Heart } from "react-icons/fi"
import { BsThreeDots as Dots } from "react-icons/bs"
import { BiLeftArrow as Arrow } from "react-icons/bi"


const AudioPlayer = ({ audios, selecionarAudio, isPlaying, irPerfil, playlist }) => {
  const [audioPlayingIndex, setAudioPlayingIndex] = useState(null)
  const [selectedPlayList, setSelectedPlayList] = useState([])

  useEffect(() => {
    if (playlist === 'Playlist ISPMedia') {
      setSelectedPlayList(audios)
    }

    else if (playlist === 'Mix Pop') {
      const filtrarAudios = () => {
        const audiosFiltradas = audios.filter(audio => audio.est === 'Pop' || audio.style === 'Pop');
        setSelectedPlayList(audiosFiltradas);
      };
      filtrarAudios();
    }

    else if (playlist === 'Mix Hip-Hop') {
      const filtrarAudios = () => {
        const audiosFiltradas = audios.filter(audio => audio.est === 'Rap' || audio.est === 'Hip-Hop' || audio.style === 'Rap');
        setSelectedPlayList(audiosFiltradas);
      };
      filtrarAudios();
    }

    else if (playlist === 'Mix 2023') {
      const filtrarAudios = () => {
        const audiosFiltradas = audios.filter(audio => audio.ano === '2023' || audio.ano === '2023');
        setSelectedPlayList(audiosFiltradas);
      };
      filtrarAudios();
    }

    else if (playlist === 'Mix 2020') {
      const filtrarAudios = () => {
        const audiosFiltradas = audios.filter(audio => audio.ano === '2020' || audio.ano === '2020');
        setSelectedPlayList(audiosFiltradas);
      };
      filtrarAudios();
    }

    else if (playlist === 'Mix 1990') {
      const filtrarAudios = () => {
        const audiosFiltradas = audios.filter(audio => audio.ano === '1990' || audio.ano === '1990');
        setSelectedPlayList(audiosFiltradas);
      };
      filtrarAudios();
    }
  }, [audios, playlist]);

  const handleClick = (index, url) => {
    var playPause
    var posicao

    posicao = audios.findIndex(audio => audio.audioURL === url)

    if (audioPlayingIndex === index) {
      setAudioPlayingIndex(null); // Pausa o áudio se o mesmo já estiver sendo reproduzido
      playPause = 12
    } else {
      setAudioPlayingIndex(index); // Reproduz o áudio selecionado
      playPause = 11
    }

    selecionarAudio(posicao, 1, playPause);
    setTimeout(() => {
      selectAudio(posicao, playPause);
    }, 100);
  };

  const selectAudio = (posicao, playPause) => {
    selecionarAudio(posicao, 1, playPause);
  };

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

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.playlist)}>
        <span style={{ background: 'none' }}>{playlist}</span>
      </div>
      <div className={css(styles.info)} style={{ background: 'none' }}>

        <div className={css(styles.spans)}>
          <span style={{ background: 'none' }}>#</span>
          <span style={{ marginLeft: '4%', background: 'none' }}>Título</span>
        </div>

        <span style={{ background: 'none' }}>Reproduzir</span>
      </div>
      {selectedPlayList.map((audio, index) => (
        <div key={index} className={css(styles.audios)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>

          <div className={css(styles.spans)}>
            <span style={{ background: 'none' }}>{index + 1}</span>
            <img src={audio.imageDownloadURL} className={css(styles.img)} alt="" />

            <div className={css(styles.titles)}>
              <span style={{ background: 'none' }}>{audio.titulo}</span><br />
              <span className={css(styles.artista)} onClick={() => irPerfil(audio.autor)}>{audio.autor}</span>
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

            <span style={{ background: 'none' }} onClick={() => handleClick(index, audio.audioURL)}>
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
                      <p className={css(styles.cont)}>Adicionar aos favoritos</p>
                      <p className={css(styles.cont)} onClick={() => irPerfil(audio.autor)}>Ir ao perfil do artista</p>
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
      ))}
    </div>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    background: 'black',
    width: '101.4%',
    marginLeft: '-0.8%',
    marginBottom: '0.5%'
  },

  playlist: {
    background: 'linear-gradient(to bottom, #555555, rgba(0, 0, 0, 0.3))',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    padding: '6% 0 4% 0',
    fontSize: '40px',
    color: 'white'
  },

  info: {
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

  audios: {
    //border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    background: 'black',
    fontSize: '16px',
    padding: '0.3% 0 0.3% 0',
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

    ':hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
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
})

