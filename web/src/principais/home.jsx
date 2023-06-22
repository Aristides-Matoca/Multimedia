import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Audios from '../componentes/audios'
import Videos from '../componentes/videos'
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
import V1 from '../videos/v1.mp4'
import V2 from '../videos/v2.mp4'
import V3 from '../videos/v4.mp4'

export default function Home() {
  
  //Funções de áudio--------------------------------------------------------------------------------------------------------

  const [audios, setAudios] = useState([
    { tipo: 'Audio', nome: 'NGA 1', url: NGA },
    { tipo: 'Audio', nome: 'KMW 2', url: KMW },
    { tipo: 'Audio', nome: 'NGA 3', url: NGA },
  ]);

  const [videos, setVideos] = useState([
    { tipo: 'Video', nome: 'Video 1', url: V1 },
    { tipo: 'Video', nome: 'Video 2', url: V2 },
    { tipo: 'Video', nome: 'Video 3', url: V3 },
  ]);

  const [mediaSelecionado, setMediaSelecionado] = useState(null);
  const [audioSelecionado, setAudioSelecionado] = useState(null);
  const [videoSelecionado, setVideoSelecionado] = useState(null);
  const [urlVideo, setUrlVideo] = useState(null);
  const [valuePlay, setValuePlay] = useState(null);
  const mediaRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const selecionarMedia = (index, value) => {
    if(value == 1){
      setMediaSelecionado(audios[index]);
      setAudioSelecionado(audios[index])
      setVideoSelecionado(null)
      reproduzir()
    }
    else if(value == 2){
      setMediaSelecionado(videos[index]);
      setVideoSelecionado(videos[index])
      setUrlVideo(videos[index].url)
      setAudioSelecionado(null)
      setValuePlay('Play')
      reproduzir()
    }
  }; 

  const pausar = () => {
    if (mediaRef.current && mediaRef.current.tagName === 'VIDEO') {
      mediaRef.current.pause();
      setValuePlay('Pause')
      setIsPlaying(false);
    }

    else if (mediaRef.current && mediaRef.current.tagName === 'AUDIO') {
      mediaRef.current.pause();
      setIsPlaying(false);
    }
  };

  const reproduzir = () => {
    if (mediaRef.current && mediaRef.current.tagName === 'VIDEO') {
      mediaRef.current.play();
      setValuePlay('Play')
      setIsPlaying(true);
    }

    else if (mediaRef.current && mediaRef.current.tagName === 'AUDIO') {
      mediaRef.current.play();
      setIsPlaying(true);
    }
  };

  const avancar = () => {
    if(mediaSelecionado.tipo === 'Audio'){
      const currentIndex = audios.findIndex((audio) => audio === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % audios.length; // Circular
      setMediaSelecionado(audios[nextIndex]);
      setIsPlaying(true);
    }

    else if(mediaSelecionado.tipo === 'Video'){
      const currentIndex = videos.findIndex((video) => video === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % videos.length; // Circular
      setMediaSelecionado(videos[nextIndex]);
      setUrlVideo(videos[nextIndex].url)
      setIsPlaying(true);
    }
  };

  const retroceder = () => {
    if(mediaSelecionado.tipo === 'Audio'){
      const currentIndex = audios.findIndex((audio) => audio === mediaSelecionado);
      const previousIndex = (currentIndex - 1 + audios.length) % audios.length; // Circular
      setMediaSelecionado(audios[previousIndex]);
      setIsPlaying(true);
    }
    
    else if(mediaSelecionado.tipo === 'Video'){
      const currentIndex = videos.findIndex((video) => video === mediaSelecionado);
      const previousIndex = (currentIndex - 1 + videos.length) % videos.length; // Circular
      setMediaSelecionado(videos[previousIndex]);
      setUrlVideo(videos[previousIndex].url)
      setIsPlaying(true);
    }
  };

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
        <TbSettings ref={iconRef} className={css(styles.notUser)} onClick={handleClick} />
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
              {nav === 'Video' && <Videos videos={videos} selecionarVideo={selecionarMedia} urlVideo={urlVideo} mediaRef={mediaRef} playPause={valuePlay}/>}
              {nav === 'Ouvir' && <AudioPlayer audios={audios} selecionarAudio={selecionarMedia}/>}
              {nav === 'Conta' && <Conta handleShow={handleShow}/>}
              {nav === 'Perfil' && <Perfil />}
              {nav === 'Upload' && <Upload handleShow={handleShow}/>}
            </React.Fragment>
          )
        )}
      </div>

      <footer className={css(styles.footer)}>
        {audioSelecionado && (
          <Reproducao
            mediaSelecionado={mediaSelecionado}
            pausar={pausar}
            reproduzir={reproduzir}
            avancar={avancar}
            retroceder={retroceder}
            isPlaying={isPlaying}
            mediaRef={mediaRef}
          />
        )}
        {videoSelecionado && (
          <Reproducao
            mediaSelecionado={mediaSelecionado}
            pausar={pausar}
            reproduzir={reproduzir}
            avancar={avancar}
            retroceder={retroceder}
            isPlaying={isPlaying}
            mediaRef={mediaRef}
          />
        )}
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
    transform: 'translate(2500%, -170%)',
    marginRight: '5%',
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
    top: '55px',
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