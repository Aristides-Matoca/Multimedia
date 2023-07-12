import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { MdPlayCircle as Play, MdPauseCircle as Pause } from "react-icons/md"
import { FiHeart as Heart } from "react-icons/fi"
import { BsThreeDots as Dots } from "react-icons/bs"

const Radios = ({ radios, selecionarRadio, isPlaying }) => {
  const [radioPlayingIndex, setRadioPlayingIndex] = useState(null)
  const Pais = 'Angola'

  const handleClick = (index) => {
    var playPause

    if (radioPlayingIndex === index) {
      setRadioPlayingIndex(null);
      playPause = 12
    } else {
      setRadioPlayingIndex(index);
      playPause = 11
    }

    selecionarRadio(index, 3, playPause);
    setTimeout(() => {
      selectRadio(index, playPause);
    }, 100);
  };

  const selectRadio = (index, playPause) => {
    selecionarRadio(index, 3, playPause);
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
        <span style={{ background: 'none' }}>{Pais}</span>
      </div>

      <div className={css(styles.info)} style={{ background: 'none' }}>

        <div className={css(styles.spans)}>
          <span style={{ background: 'none' }}>#</span>
          <span style={{ marginLeft: '4%', background: 'none' }}>Estação</span>
        </div>
        <span style={{ background: 'none', marginRight: '-1.5%' }}>Reproduzir</span>
      </div>

      {radios.map((radio, index) => (
        <div key={index} className={css(styles.radios)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>

          <div className={css(styles.spans)}>
            <span style={{ background: 'none' }}>{index + 1}</span>
            <img src={radio.imageDownloadURL} className={css(styles.img)} alt="" />

            <div className={css(styles.titles)}>
              <span style={{ background: 'none' }}>{radio.titulo}</span>
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

            <span style={{ background: 'none' }} onClick={() => handleClick(index)}>
              {radioPlayingIndex === index && isPlaying == true ? (
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
                      <p className={css(styles.cont)}>Informações da rádio</p>
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

export default Radios;

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

  radios: {
    //border: '1px solid red',
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
})
