import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Audios from '../componentes/audios'
import Videos from '../componentes/videos'
import Radios from '../componentes/radios'
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
import axios from 'axios';
import { Link } from "react-router-dom"
import Img1 from '../img/imagem1.png'
import Img2 from '../img/imagem2.png'
import Group from '../componentes/group'
import CriarGrupo from '../componentes/criarGrupo'
import ValidarAcesso from '../componentes/validarAcesso'

export default function Home() {
  
  //Funções de áudio--------------------------------------------------------------------------------------------------------

  const [audios, setAudios] = useState(null);

  //const [podcasts, setPodcasts] = useState(null);

  const [videos, setVideos] = useState(null);

  //const [radios, setRadios] = useState(null);

  const [radios, setRadios] = useState([
    { tipo: 'Radio', nome: 'Rádio Mais', titulo: 'Estação 1', image: Img1, audioURL: 'https://radios.justweb.pt/8050/stream/?1685627470876' },
    { tipo: 'Radio', nome: 'Rádio Escola', titulo: 'Estação 2', image: Img2, audioURL: 'https://radios.vpn.sapo.pt/AO/radio1.mp3' },
    { tipo: 'Radio', nome: 'Rádio LAC', titulo: 'Estação 3', image: Img1, audioURL: 'https://radios.vpn.sapo.pt/AO/radio14.mp3?1685629053605' },
  ]);

  const [mediaSelecionado, setMediaSelecionado] = useState(null);
  const [audioSelecionado, setAudioSelecionado] = useState(null);
  const [videoSelecionado, setVideoSelecionado] = useState(null);
  const [radioSelecionado, setRadioSelecionado] = useState(null);
  //const [trocarMedia, setTrocarMedia] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [urlVideo, setUrlVideo] = useState(null);
  const mediaRef = useRef(null);

  const [grupoName, setGrupoName] = useState("");

  const api = "http://localhost:4000";

  useEffect(() => {
    // Fetch the uploads from Firestore or your backend API
    axios.get(api + "/video")
      .then(response => {
        const uploadsData = response.data;
        setVideos(uploadsData);
      })
      .catch(error => {
        console.error('Error fetching uploads:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch the uploads from Firestore or your backend API
    axios.get(api + "/audio")
      .then(response => {
        const uploadsData = response.data;
        setAudios(uploadsData);
      })
      .catch(error => {
        console.error('Error fetching uploads:', error);
      });
  }, []);

 /* useEffect(() => {
    // Fetch the uploads from Firestore or your backend API
      axios.get(api + "/podcasts")
        .then(response => {
          const uploadsData = response.data;
          setPodcasts(uploadsData);
        })
        .catch(error => {
          console.error('Error fetching uploads:', error);
        });
    }, []);*/



  const selecionarMedia = (index, value, playPause) => {
    if(value == 1){
      audios[index].tipo = 'Áudio'
      setMediaSelecionado(audios[index]);
      setAudioSelecionado(audios[index])
      //console.log(audios[index].audioURL),
      setVideoSelecionado(null)
      setRadioSelecionado(null)
      if(playPause == 11)
        reproduzir()
      else if(playPause == 12){
        pausar()
      }
    }
    else if(value == 2){
      videos[index].tipo = 'Vídeo'
      setMediaSelecionado(videos[index]);
      setVideoSelecionado(videos[index])
      setUrlVideo(videos[index].videoURL)
      setAudioSelecionado(null)
      setRadioSelecionado(null)
      reproduzir()
    }
    else if(value == 3){
      setMediaSelecionado(radios[index]);
      setRadioSelecionado(radios[index])
      setVideoSelecionado(null)
      setAudioSelecionado(null)
      if(playPause == 11)
        reproduzir()
      else if(playPause == 12){
        pausar()
      }
    }
  }; 

  const pausar = () => {
    if (mediaRef.current) {
      mediaRef.current.pause();
      setIsPlaying(false);
    }
  };

  const reproduzir = () => {
    if (mediaRef.current) {
      mediaRef.current.play();
      setIsPlaying(true);
      //setTrocarMedia(0)
    }
  };

  //Avancar media
  const avancar = () => {
    if(mediaSelecionado.tipo === 'Áudio'){
      const currentIndex = audios.findIndex((audio) => audio === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % audios.length; // Circular
      setMediaSelecionado(audios[nextIndex]);
      setIsPlaying(true);
      //setTrocarMedia(1)
    }

    else if(mediaSelecionado.tipo === 'Vídeo'){
      const currentIndex = videos.findIndex((video) => video === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % videos.length; // Circular
      setMediaSelecionado(videos[nextIndex]);
      setUrlVideo(videos[nextIndex].videoURL)
      setIsPlaying(true);
    }

    else if(mediaSelecionado.tipo === 'Radio'){
      const currentIndex = radios.findIndex((radio) => radio === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % radios.length; // Circular
      setMediaSelecionado(radios[nextIndex]);
      setIsPlaying(true);
    }
  };

  //Retroceder media
  const retroceder = () => {
    if(mediaSelecionado.tipo === 'Áudio'){
      const currentIndex = audios.findIndex((audio) => audio === mediaSelecionado);
      const previousIndex = (currentIndex - 1 + audios.length) % audios.length; // Circular
      setMediaSelecionado(audios[previousIndex]);
      setIsPlaying(true);
      //setTrocarMedia(-1)
    }
    
    else if(mediaSelecionado.tipo === 'Vídeo'){
      const currentIndex = videos.findIndex((video) => video === mediaSelecionado);
      const previousIndex = (currentIndex - 1 + videos.length) % videos.length; // Circular
      setMediaSelecionado(videos[previousIndex]);
      setUrlVideo(videos[previousIndex].videoURL)
      setIsPlaying(true);
    }

    else if(mediaSelecionado.tipo === 'Radio'){
      const currentIndex = radios.findIndex((radio) => radio === mediaSelecionado);
      const previousIndex = (currentIndex - 1 + radios.length) % radios.length; // Circular
      setMediaSelecionado(radios[previousIndex]);
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
    CriarGrupo: false,
    Grupo: false,
  })

  const handleShow = (nav) => {
    const newNavs = { ...navs }

    Object.keys(newNavs).forEach((key) => {
      newNavs[key] = key === nav;
    })
    setNavs(newNavs)
  }

  const name = (nome) => {
    setGrupoName(nome);
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
              {nav === 'Inicio' && <Homepage handleShow={handleShow} selecionarMedia={selecionarMedia}/>}
              {nav === 'Audio' && <Audios handleShow={handleShow}/>}
              {nav === 'Video' && <Videos videos={videos} selecionarVideo={selecionarMedia} urlVideo={urlVideo} mediaRef={mediaRef}/>}
              {nav === 'Radio' && <Radios radios={radios} selecionarRadio={selecionarMedia} isPlaying={isPlaying}/>}
              {nav === 'Ouvir' && <AudioPlayer audios={audios} selecionarAudio={selecionarMedia} isPlaying={isPlaying}/>}
              {nav === 'Conta' && <Conta handleShow={handleShow}/>}
              {nav === 'Perfil' && <Perfil />}
              {nav === 'Upload' && <Upload handleShow={handleShow}/>}
              {nav === 'Grupos' && <Group handleShow={handleShow} name={name}/>}
              {nav === 'CriarGrupo' && <CriarGrupo handleShow={handleShow}/>}
              {nav === 'Grupo' && <ValidarAcesso handleShow={handleShow} nome={grupoName}/>}
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
        {radioSelecionado && (
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
    transform: 'translate(-39%, -51%)',
    fontFamily: 'Cormorant Garamond',
    paddingTop: '1.3%',
    background: 'none',
    position: 'fixed',
    height: '72%',
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
    transform: 'translate(-39.5%, 257%)',
    background: 'rgb(10,10,10)',
    paddingTop: '50px',
    position: 'fixed',
    height: '14%',
    width: '84.3%',
    overflow: 'hidden',
  },
})