import React, { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Audios from '../componentes/audios'
import Videos from '../componentes/videos'
import Radios from '../componentes/radios'
import Navegator from '../componentes/nav'
import Homepage from '../componentes/homepage'
import AudioPlayer from '../componentes/ouvirAudios'
import VideoPlayer from '../componentes/videoPlayer'
import Reproducao from '../componentes/reproducao'
import Conta from '../componentes/acount'
import Perfil from '../componentes/perfil'
import Upload from '../componentes/upload'
import Podcasts from '../componentes/podcast'
import Artistas from '../componentes/artistas'
import { StyleSheet, css } from 'aphrodite'
import { IoIosNotifications } from "react-icons/io"
import { TbSearch, TbSettings } from "react-icons/tb"
import { InputGroup, InputGroupText, Input, Row } from 'reactstrap'
import axios from 'axios';
import videologo from '../img/videologo.png'
import audiologo from '../img/audiologo.jpg'
import radiologo from '../img/radiologo.png'
import podlogo from '../img/Podcast.jpg'
import Group from '../componentes/group'
import CriarGrupo from '../componentes/criarGrupo'
import GroupIn from '../componentes/groupIn'

export default function Home({ handleShow2, username }) {

  //Perfil do artista
  const [names, setName] = useState(null)

  const irPerfil = (user) => {
    setName(user)
    handleShow('Perfil')
  }

  //PlayList
  const [playlist, setPlaylist] = useState(null)

  const play = (value) => {
    setPlaylist(value)
    handleShow('Ouvir')
  }

  const [audios, setAudios] = useState(null);
  const [podcasts, setPodcasts] = useState(null);
  const [videos, setVideos] = useState(null);
  const [pessoa, setPessoa] = useState(null);

  //const [radios, setRadios] = useState(null);

  const [radios, setRadios] = useState([
    { tipo: 'Radio', titulo: 'Rádio Mais', legenda: 'Estação 1', imageDownloadURL: radiologo, audioURL: 'https://radios.justweb.pt/8050/stream/?1685627470876' },
    { tipo: 'Radio', titulo: 'Rádio Escola', legenda: 'Estação 2', imageDownloadURL: radiologo, audioURL: 'https://radios.vpn.sapo.pt/AO/radio1.mp3' },
    { tipo: 'Radio', titulo: 'Rádio LAC', legenda: 'Estação 3', imageDownloadURL: radiologo, audioURL: 'https://radios.vpn.sapo.pt/AO/radio14.mp3?1685629053605' },
  ]);

  const [mediaSelecionado, setMediaSelecionado] = useState(null);
  const [audioSelecionado, setAudioSelecionado] = useState(null);
  const [videoSelecionado, setVideoSelecionado] = useState(null);
  const [radioSelecionado, setRadioSelecionado] = useState(null);
  const [podcastSelecionado, setPodcastselecionado] = useState(null);
  const [indexVideo, setIndexVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [urlVideo, setUrlVideo] = useState(null);
  const mediaRef = useRef(null);

  const [grupoName, setGrupoName] = useState("");

  const api = "http://192.168.255.18:5001";

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

  useEffect(() => { //Fetch de pessoa
    // Fetch the uploads from Firestore or your backend API
    axios.get(api + "/")
      .then(response => {
        const pessoas = response.data;
        setPessoa(pessoas);
      })
      .catch(error => {
        console.error('Error fetching uploads:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch the uploads from Firestore or your backend API
    axios.get(api + "/podcasts")
      .then(response => {
        const uploadsData = response.data;
        setPodcasts(uploadsData);
      })
      .catch(error => {
        console.error('Error fetching uploads:', error);
      });
  }, []);

  const selecionarMedia = (index, value, playPause) => {
    if (value == 1) {
      audios[index].tipo = 'Áudio'
      if (audios[index].imageDownloadURL == null) {
        audios[index].imageDownloadURL = audiologo
      }

      setMediaSelecionado(audios[index]);
      setAudioSelecionado(audios[index])
      setVideoSelecionado(null)
      setRadioSelecionado(null)
      setPodcastselecionado(null)
      if (playPause == 11)
        reproduzir()
      else if (playPause == 12) {
        pausar()
      }
    }
    else if (value == 2) {
      videos[index].tipo = 'Vídeo'
      if (videos[index].imageDownloadURL == null) {
        videos[index].imageDownloadURL = videologo
      }

      setMediaSelecionado(videos[index]);
      setVideoSelecionado(videos[index])
      setUrlVideo(videos[index].videoURL)
      setAudioSelecionado(null)
      setRadioSelecionado(null)
      setPodcastselecionado(null)
      reproduzir()
    }
    else if (value == 3) {
      setMediaSelecionado(radios[index]);
      setRadioSelecionado(radios[index])
      setVideoSelecionado(null)
      setAudioSelecionado(null)
      setPodcastselecionado(null)
      setIndexVideo(index)
      if (playPause == 11)
        reproduzir()
      else if (playPause == 12) {
        pausar()
      }
    }

    else if (value == 4) {
      podcasts[index].tipo = 'Podcast'
      if (podcasts[index].imageDownloadURL == null) {
        podcasts[index].imageDownloadURL = podlogo
      }

      setMediaSelecionado(podcasts[index]);
      setPodcastselecionado(podcasts[index])
      setVideoSelecionado(null)
      setRadioSelecionado(null)
      setAudioSelecionado(null)
      if (playPause == 11)
        reproduzir()
      else if (playPause == 12) {
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
    if (mediaSelecionado.tipo === 'Áudio') {
      const currentIndex = audios.findIndex((audio) => audio === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % audios.length; // Circular
      setMediaSelecionado(audios[nextIndex]);
      setIsPlaying(true);
      //setTrocarMedia(1)
    }

    else if (mediaSelecionado.tipo === 'Vídeo') {
      const currentIndex = videos.findIndex((video) => video === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % videos.length; // Circular
      setMediaSelecionado(videos[nextIndex]);
      setUrlVideo(videos[nextIndex].videoURL)
      setIsPlaying(true);
    }

    else if (mediaSelecionado.tipo === 'Radio') {
      const currentIndex = radios.findIndex((radio) => radio === mediaSelecionado);
      const nextIndex = (currentIndex + 1) % radios.length; // Circular
      setMediaSelecionado(radios[nextIndex]);
      setIsPlaying(true);
    }
  };

  //Retroceder media
  const retroceder = () => {
    if (mediaSelecionado.tipo === 'Áudio') {
      const currentIndex = audios.findIndex((audio) => audio === mediaSelecionado);
      const previousIndex = (currentIndex - 1 + audios.length) % audios.length; // Circular
      setMediaSelecionado(audios[previousIndex]);
      setIsPlaying(true);
      //setTrocarMedia(-1)
    }

    else if (mediaSelecionado.tipo === 'Vídeo') {
      const currentIndex = videos.findIndex((video) => video === mediaSelecionado);
      const previousIndex = (currentIndex - 1 + videos.length) % videos.length; // Circular
      setMediaSelecionado(videos[previousIndex]);
      setUrlVideo(videos[previousIndex].videoURL)
      setIsPlaying(true);
    }

    else if (mediaSelecionado.tipo === 'Radio') {
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
    Assistir: false,
    Albuns: false,
    Playlist: false,
    Gostos: false,
    Grupos: false,
    Conta: false,
    Perfil: false,
    Upload: false,
    CriarGrupo: false,
    Grupo: false,
    GrupoIn: false,
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

  //Pesquisa de usuarios
  const [valorPesquisa, setValorPesquisa] = useState('');
  const [resultadosPessoa, setResultadosPessoa] = useState([]);
  const [resultadosAudios, setResultadosAudios] = useState([]);
  const [resultadosVideos, setResultadosVidios] = useState([]);
  const [popUpVisivel, setPopUpVisivel] = useState(false);

  const handleChangePesquisa = (event) => {
    const valor = event.target.value;
    setValorPesquisa(valor);

    const resultadosAudios = audios.filter(audio =>
      audio.titulo.toLowerCase().includes(valor.toLowerCase())
    );
    setResultadosAudios(resultadosAudios);

    const resultadosVideos = videos.filter(video =>
      video.titulo.toLowerCase().includes(valor.toLowerCase())
    );
    setResultadosVidios(resultadosVideos);

    const resultados = pessoa.filter(p =>
      p.username.toLowerCase().includes(valor.toLowerCase())
    );
    setResultadosPessoa(resultados);
    setPopUpVisivel(true);
  };

  const handleBlurInput = () => {
    setPopUpVisivel(false);
    setResultadosPessoa([]);
    setResultadosAudios([]);
  };

  const handleClickAutor = (autor) => {
    setPopUpVisivel(false);
    irPerfil(autor)
  }

  const handleClickMedia = (url, pos) => {
    setPopUpVisivel(false);
    var posicao

    if (pos == 1) {
      posicao = audios.findIndex(audio => audio.audioURL === url)
    }

    if (pos == 2) {
      posicao = videos.findIndex(video => video.videoURL === url)
      handleShow('Assistir')
    }

    selecionarMedia(posicao, pos, 11)
    setTimeout(() => {
      selectMedia(posicao, pos);
    }, 100);
  }

  const selectMedia = (posicao, pos) => {
    selecionarMedia(posicao, pos, 11);
  };


  return (
    <Row className={css(styles.row2)}>
      <nav className={css(styles.nav4)}>
        <Navegator handleShow={handleShow} />
      </nav>

      <header className={css(styles.header)}>

        <InputGroup size='lg' className={css(styles.search)}>
          <InputGroupText className={css(styles.logosearch)}>
            <TbSearch className={css(styles.logosearch)} />
          </InputGroupText>
          <Input value={valorPesquisa} onChange={handleChangePesquisa} onBlur={handleBlurInput} onFocus={() => setPopUpVisivel(true)} className={css(styles.textsearch)} placeholder='Pesquise por Sons, Artistas e Álbuns' />
        </InputGroup>

        {popUpVisivel && resultadosVideos.length > 0 && (
          <div className={css(styles.popup)} onBlur={handleBlurInput} onMouseDown={(e) => e.preventDefault()}>
            <h4 style={{ background: 'none', borderBottom: '1px solid grey', textAlign: 'center', paddingTop: '1%' }}>Vídeos</h4>
            {resultadosVideos.map((video, index) => (
              <div key={index} className={css(styles.cont1)} onClick={() => handleClickMedia(video.videoURL, 2)}>
                <span style={{ background: 'none' }}>{video.titulo}<br /></span>
                <span style={{ background: 'none', fontSize: '16px' }}>{video.autor}<br /></span>
              </div>
            ))}
          </div>
        )}

        {popUpVisivel && resultadosAudios.length > 0 && (
          <div className={css(styles.popup)} onBlur={handleBlurInput} onMouseDown={(e) => e.preventDefault()}>
            <h4 style={{ background: 'none', borderBottom: '1px solid grey', textAlign: 'center', paddingTop: '1%' }}>Músicas</h4>
            {resultadosAudios.map((audio, index) => (
              <div key={index} className={css(styles.cont1)} onClick={() => handleClickMedia(audio.audioURL, 1)}>
                <span style={{ background: 'none' }}>{audio.titulo}<br /></span>
                <span style={{ background: 'none', fontSize: '16px' }}>{audio.autor}<br /></span>
              </div>
            ))}
          </div>
        )}

        {popUpVisivel && resultadosPessoa.length > 0 && (
          <div className={css(styles.popup)} onBlur={handleBlurInput} onMouseDown={(e) => e.preventDefault()}>
            <h4 style={{ background: 'none', borderBottom: '1px solid grey', textAlign: 'center', paddingTop: '1%' }}>Artistas</h4>
            {resultadosPessoa.map((p, index) => (
              <div key={index} className={css(styles.cont1)} onClick={() => handleClickAutor(p.username)}>
                <span style={{ background: 'none' }}>{p.username}<br /></span>
              </div>
            ))}
          </div>
        )}

        <IoIosNotifications className={css(styles.notUser)} />
        <TbSettings onBlur={handleDefinitionsClick} className={css(styles.notUser)} onClick={handleClick} />
        {showDefinitions ? (
          <div className={css(styles.definition)} onClick={handleDefinitionsClick} ref={definitionsRef}>
            <p className={css(styles.cont)} onClick={() => handleShow('Conta')}>Minha Conta</p>
            <p className={css(styles.cont)} onClick={() => irPerfil(username)}>Perfil</p>
            <p className={css(styles.cont)} onClick={() => handleShow('Upload')}>Upload</p>
            <p className={css(styles.cont)}>Definições</p>
            <p className={css(styles.cont2)} onClick={() => handleShow2('Start')}>Terminar Sessão</p>
          </div>
        ) : null}
      </header>

      <div className={css(styles.home)}>
        {Object.entries(navs).map(([nav, show]) =>
          show && (
            <React.Fragment key={nav}>
              {nav === 'Inicio' && <Homepage handleShow={handleShow} selecionarMedia={selecionarMedia} videos={videos} radios={radios} podcasts={podcasts} play={play} />}
              {nav === 'Audio' && <Audios handleShow={handleShow} audios={audios} pessoa={pessoa} irPerfil={irPerfil} play={play} />}
              {nav === 'Video' && <Videos handleShow={handleShow} videos={videos} selecionarVideo={selecionarMedia} irPerfil={irPerfil} />}
              {nav === 'Assistir' && <VideoPlayer videos={videos} selecionarVideo={selecionarMedia} urlVideo={urlVideo} mediaRef={mediaRef} indexVideo={indexVideo} irPerfil={irPerfil} />}
              {nav === 'Radio' && <Radios radios={radios} selecionarRadio={selecionarMedia} isPlaying={isPlaying} />}
              {nav === 'Podcast' && <Podcasts podcasts={podcasts} selecionarPodcast={selecionarMedia} isPlaying={isPlaying} irPerfil={irPerfil} />}
              {nav === 'Ouvir' && <AudioPlayer audios={audios} selecionarAudio={selecionarMedia} isPlaying={isPlaying} irPerfil={irPerfil} playlist={playlist} />}
              {nav === 'Conta' && <Conta handleShow={handleShow} username={username} pessoa={pessoa} />}
              {nav === 'Perfil' && <Perfil handleShow={handleShow} username={names} owner={username} audios={audios} videos={videos} podcasts={podcasts} selecionarMedia={selecionarMedia} isPlaying={isPlaying} />}
              {nav === 'Upload' && <Upload handleShow={handleShow} username={username} />}
              {nav === 'Artistas' && <Artistas pessoa={pessoa} audios={audios} videos={videos} podcasts={podcasts} irPerfil={irPerfil} />}
              {nav === 'Grupos' && <Group handleShow={handleShow} name={name} />}
              {nav === 'CriarGrupo' && <CriarGrupo handleShow={handleShow} />}
              {nav === 'GrupoIn' && <GroupIn handleShow={handleShow} nome={grupoName} />}
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
            irPerfil={irPerfil}
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
            irPerfil={irPerfil}
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
            irPerfil={irPerfil}
          />
        )}
        {podcastSelecionado && (
          <Reproducao
            mediaSelecionado={mediaSelecionado}
            pausar={pausar}
            reproduzir={reproduzir}
            avancar={avancar}
            retroceder={retroceder}
            isPlaying={isPlaying}
            mediaRef={mediaRef}
            irPerfil={irPerfil}
          />
        )}
      </footer>
    </Row>
  )
}

const styles = StyleSheet.create({
  row2: {
    background: 'none',
  },

  nav4: {
    transform: 'translate(-308%, -50%)',
    background: 'black',
    borderRight: '2px solid grey',
    paddingLeft: '1%',
    position: 'fixed',
    height: '100%',
    width: '16%'
  },

  header: {
    transform: 'translate(-51%, -490%)',
    fontFamily: 'Cormorant Garamond',
    paddingTop: '1.5%',
    background: 'none',
    position: 'fixed',
    height: '10%',
    width: '50%',
    zIndex: '1000',
  },

  search: {
    background: 'none',
    fontSize: '10px',
  },

  logosearch: {
    background: 'rgba(255, 253, 245, 1)',
    borderRight: 'none'
  },

  textsearch: {
    background: 'rgba(255, 253, 245, 1)',
    borderLeft: 'none'
  },

  popup: {
    position: 'absolute',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'justify',
    background: 'rgb(44,44,43)',
    width: '97%',
    height: '600%',
    color: 'white',
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

  cont1: {
    background: 'none',
    fontSize: '18px',
    color: 'white',
    margin: '0 1% 0 1%',
    padding: '1%',
    ':hover': {
      cursor: 'pointer',
      color: 'rgba(255, 213, 0, 1)',
      background: 'rgb(36,36,36)',
      borderRadius: '5px'
    },
  },

  notUser: {
    transform: 'translate(2500%, -170%)',
    marginRight: '5%',
    background: 'none',
    fontSize: '28px',
    color: 'rgba(255, 253, 245, 1)',
    ':hover': {
      cursor: 'pointer',
      color: 'rgba(255, 213, 0, 1)'
    },

    ':focus': {
      color: 'rgba(255, 213, 0, 1)',
      fontWeight: 'bold'
    }
  },

  definition: {
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

  home: {
    //border: '1px solid red',
    transform: 'translate(-39.5%, -51%)',
    fontFamily: 'Cormorant Garamond',
    paddingTop: '1.3%',
    background: 'none',
    position: 'fixed',
    height: '72%',
    width: '83.5%',
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

  footer: {
    transform: 'translate(-39.5%, 257%)',
    background: 'rgb(10,10,10)',
    paddingTop: '50px',
    position: 'fixed',
    height: '14%',
    width: '84.3%',
    overflow: 'hidden',
  },
})