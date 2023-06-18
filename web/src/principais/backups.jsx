/*Tudo sobre o Componente Reproducao

import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { RiHeart3Fill as Heart } from "react-icons/ri"
import { Nav, NavItem, NavLink } from 'reactstrap'
import Img from '../img/imagem1.png'
import { TbPlayerTrackPrevFilled as Prev, TbPlayerTrackNextFilled as Next } from "react-icons/tb"
import { MdVolumeUp as Volume, MdPlayCircle as Play, MdOutlineFileDownload as Download, MdPauseCircle as Pause } from "react-icons/md"
import React, { useState, useRef, useEffect } from 'react'

export default function Reproducao({ songs, currentSongIndex }){

    //Funções de áudio------------------------------------------------------------------------------------------------
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const currentSong = songs[currentSongIndex]
  
    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play()
        } else {
          audioRef.current.pause()
        }
    }, [isPlaying])
    
    useEffect(() => {
        audioRef.current.currentTime = currentTime;
    }, [currentTime])
  
    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    }
  
    const handlePrevious = () => {
        if (currentSongIndex > 0) {
            setCurrentTime(0);
            setIsPlaying(true);
            setCurrentSongIndex(currentSongIndex - 1);
        }
    }
  
    const handleNext = () => {
        if (currentSongIndex < songs.length - 1) {
            setCurrentTime(0);
            setIsPlaying(true);
            setCurrentSongIndex(currentSongIndex + 1);
          }
    }
  
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    }

    return(
        <Nav className={css(styles.nav)}>
            <audio
                ref={audioRef}
                src={currentSong.url}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleNext}
            />

            <NavItem className={css(styles.item1)}>
                <NavLink className={css(styles.foto)} disabled href="#">
                    <img className={css(styles.img)} href="#" src={Img} alt="Foto qualquer" />
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item1)}>
                <NavLink href="#" className={css(styles.item11)}>
                    {currentSong.title} <br/>
                    {currentSong.artist}
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item21)}>
                    <Heart className={css(styles.item21)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item21)}>
                    <Download className={css(styles.item21)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item22)} onClick={handlePrevious}>
                    <Prev className={css(styles.item23)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item22)} onClick={handlePlayPause}>
                    {isPlaying ? <Pause className={css(styles.item23)}/> : <Play className={css(styles.item23)}/>}
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item22)} onClick={handleNext}>
                <Next className={css(styles.item23)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item3)}>
                <NavLink href="#" className={css(styles.item32)}>
                    <Volume className={css(styles.item32)}/>
                </NavLink>
            </NavItem>
            <input
                type="range"
                value={currentTime}
                min="0"
                max={audioRef.current && audioRef.current.duration}
                onChange={(e) => setCurrentTime(e.target.value)}
            />
        </Nav>
    )
}

const styles = StyleSheet.create({
    nav:{
        color: 'white',
        background: 'none',
        fontFamily: 'Cormorant Garamond',
    },

    foto:{
        transform: 'translate(5%, -27%)',
        border: '1px solid grey',
        borderRadius: '8px',
        background: 'none',
        height: '85%',
        width: '30%'
    },

    img:{
        background: 'none',
        height: '100%',
        width: '100%'
    },

    item1:{
        background: 'none',
        fontSize: '18px',
        color: 'white'
    },

    item11:{
        transform: 'translate(-300%, -20%)',
        background: 'none',
        color: 'white'
    },

    item2:{
        transform: 'translate(-300%, 0%)',
        background: 'none',
        color: 'white',
        fontSize: '25px'
    },

    item21:{
        background: 'none',
        color: 'white',
        ':hover':{
            color: 'rgba(255, 213, 0, 1)'
        },
    },

    item22:{
        //transform: 'translate(150%, 0%)',
        background: 'none',
        color: 'white',
        border: '1px solid white'
    },

    item23:{
        background: 'none',
        color: 'white',
        ':hover':{
            color: 'rgba(255, 213, 0, 1)',
            fontSize: '26px'
        },
        ':active':{
            fontSize: '26px'
        }
    },

    item3:{
        background: 'none',
        paddingLeft: '20%',
        fontSize: '25px'
    },

    item32:{
        background: 'none',
        color: 'white'
    }
})
*/






//-----------------------------------------------------------------------------------------------------------------------------------------







/*Tudo sobre o Componente OuvirAudios
import React from 'react';

const Audio = ({ songs, onSongClick }) => {
  return (
    <div>
      <h2>Lista de músicas</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => onSongClick(index)}>
            {song.artist} - {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Audio;
*/





//-----------------------------------------------------------------------------------------------------------------------------------






/*
import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Audios from '../componentes/audios'
import Navegator from '../componentes/nav'
import Homepage from '../componentes/homepage'
import AudioPlayer from '../componentes/ouvirAudios'
import Reproducao from '../componentes/reproducao'
import Conta from '../componentes/acount'
import Perfil from '../componentes/perfil'
import Upload from '../componentes/upload'
import { StyleSheet, css } from 'aphrodite'
import { IoIosNotifications } from "react-icons/io"
import { TbSearch, TbSettings } from "react-icons/tb"
import { InputGroup, InputGroupText, Input, Row} from 'reactstrap'
import { Link } from "react-router-dom"
import NGA from '../audios/NGA-Dona.mp3'
import KMW from '../audios/KMW-MeuSucesso.mp3'

export default function Home() {
  
  //Funções de áudio--------------------------------------------------------------------------------------------------------
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    { artist: 'NGA', title: 'Dona', url: NGA },
    { artist: 'MW', title: 'Meu',  url: KMW },
    { artist: 'NGA', title: 'Dona', url: NGA }
  ]

  //Funções de rotas----------------------------------------------------------------------------------------------------------------------
  const [navs, setNavs] = useState({
    Inicio: true,
    Artistas: false,
    Audio: false,
    Ouvir: false,
    Podcast: false,
    Radio: false,
    Video: false,
    Albuns: false,
    Playlist: false,
    Gostos: false,
    Grupos: false,
    Conta: false,
    Perfil: false,
    Upload: false,
  })

  const handleShow = (nav) => {
    const newNavs = { ...navs }

    Object.keys(newNavs).forEach((key) => {
      newNavs[key] = key === nav;
    })
    setNavs(newNavs)
  }

  //Funções de Configuranções------------------------------------------------------------------
  const [showDefinitions, setShowDefinitions] = useState(false)
  const iconRef = useRef(null)
  const definitionsRef = useRef(null)

  const handleOutsideClick = (event) => {
    if (
      iconRef.current &&
      !iconRef.current.contains(event.target) &&
      definitionsRef.current &&
      !definitionsRef.current.contains(event.target)
    ) {
      setShowDefinitions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setShowDefinitions(!showDefinitions)
  };

  const handleDefinitionsClick = () => {
    setShowDefinitions(false)
  };


  return (
    <Row className={css(styles.row2)}>
      <nav className={css(styles.nav4)}>
        <Navegator handleShow={handleShow}/>
      </nav>

      <header className={css(styles.header)}>

        <InputGroup size='lg' className={css(styles.search)}>
          <InputGroupText className={css(styles.logosearch)}>
            <TbSearch className={css(styles.logosearch)}/>
          </InputGroupText>
          <Input className={css(styles.textsearch)} placeholder='Pesquise por Sons, Artistas e Álbuns'/>
        </InputGroup>

        <IoIosNotifications className={css(styles.notUser)}/>
        <TbSettings className={css(styles.notUser)} onClick={handleClick} ref={iconRef}/>
        {showDefinitions ? (
          <div className={css(styles.definition)} onClick={handleDefinitionsClick} ref={definitionsRef}>
            <p className={css(styles.cont)} onClick={() => handleShow('Conta')}>Minha Conta</p>
            <p className={css(styles.cont)} onClick={() => handleShow('Perfil')}>Perfil</p>
            <p className={css(styles.cont)} onClick={() => handleShow('Upload')}>Upload</p>
            <p className={css(styles.cont)}>Definições</p>
            <Link to={'/'}><p className={css(styles.cont2)}>Terminar Sessão</p></Link>
          </div>
        ) : null}
      </header>

      <div className={css(styles.home)}>
        {Object.entries(navs).map(([nav, show]) =>
          show && (
            <React.Fragment key={nav}>
              {nav === 'Inicio' && <Homepage handleShow={handleShow}/>}
              {nav === 'Audio' && <Audios handleShow={handleShow}/>}
              {nav === 'Ouvir' && <AudioPlayer songs={songs} onSongClick={setCurrentSongIndex}/>}
              {nav === 'Conta' && <Conta handleShow={handleShow}/>}
              {nav === 'Perfil' && <Perfil />}
              {nav === 'Upload' && <Upload handleShow={handleShow}/>}
            </React.Fragment>
          )
        )}
      </div>

      <footer className={css(styles.footer)}>
        <Reproducao songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}/>
      </footer>
    </Row>
  )
}

const styles = StyleSheet.create({
  row2:{
    background:'none',
  },

  nav4:{
    transform: 'translate(-308%, -50%)',
    background: 'black',
    borderRight: '2px solid grey',
    paddingLeft: '1%',
    position: 'fixed',
    height: '100%',
    width: '16%'
  },

  header:{
    transform: 'translate(-51%, -490%)',
    fontFamily: 'Cormorant Garamond',
    paddingTop: '1.5%',
    background: 'none',
    position: 'fixed',
    height: '10%',
    width: '50%',
    zIndex: '1000',
  },

  search:{
    background: 'none',
    fontSize: '10px',
  },

  logosearch:{
    background: 'rgba(255, 253, 245, 1)',
    borderRight: 'none'
  },

  textsearch:{
    background: 'rgba(255, 253, 245, 1)',
    borderLeft: 'none'
  },

  notUser:{
    transform: 'translate(2500%, -130%)',
    marginRight: '8.5%',
    background: 'none',
    fontSize: '28px',
    color: 'rgba(255, 253, 245, 1)',
    ':hover':{
    cursor: 'pointer',
    color: 'rgba(255, 213, 0, 1)'
    },

  ':focus':{
      color: 'rgba(255, 213, 0, 1)',
      fontWeight: 'bold'
    }
  },

  definition:{
    position: 'absolute',
    top: '65px',
    right: '-44%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'justify',
    background: 'rgb(44,44,43)',
    width: '23%'
  },

  cont:{
    background: 'none',
    fontSize: '18px',
    color: 'white',
    margin: '5px',
    padding: '4px',
    ':hover':{
      cursor: 'pointer',
      color: 'rgba(255, 213, 0, 1)',
      background: 'rgb(36,36,36)'
    },
  },

  cont2:{
    borderTop: '2.5px solid rgb(36,36,36)',
    background: 'none',
    fontSize: '18px',
    color: 'white',
    margin: '5px',
    padding: '4px',
    ':hover':{
      cursor: 'pointer',
      color: 'rgba(255, 213, 0, 1)',
      background: 'rgb(36,36,36)'
    },
  },

  home:{
    //border: '1px solid red',
    transform: 'translate(-39%, -54%)',
    fontFamily: 'Cormorant Garamond',
    paddingTop: '1.3%',
    background: 'none',
    position: 'fixed',
    height: '71%',
    width: '82%',
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

  footer:{
    transform: 'translate(-39.5%, 193%)',
    background: 'rgb(10,10,10)',
    paddingTop: '50px',
    position: 'fixed',
    height: '17%',
    width: '84.3%'
  }
})
*/