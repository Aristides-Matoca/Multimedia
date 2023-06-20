import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { RiHeart3Fill as Heart } from "react-icons/ri"
import { Nav, NavItem, NavLink } from 'reactstrap'
import Img from '../img/imagem1.png'
import { TbPlayerTrackPrevFilled as Prev, TbPlayerTrackNextFilled as Next } from "react-icons/tb"
import { MdVolumeUp as Volume, MdPlayCircle as Play, MdOutlineFileDownload as Download, MdPauseCircle as Pause } from "react-icons/md"
import React, {useState, useEffect, useRef} from 'react'

export default function Reproducao({ audioSelecionado, pausar, reproduzir, avancar, retroceder, isPlaying, audioRef }){

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, [audioRef]);

    useEffect(() => {//UseEfect para avançar para próxima musica de forma automatica
            if (formatTime(currentTime) === formatTime(duration)) {
                setTimeout(() => {
                handleClickAvanco();
            }, 100);
        }
    }, [currentTime, duration]);

    const handleTimeUpdate = () => {
        if (!isSeeking) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (event) => {
        const seekTime = parseFloat(event.target.value);
        setCurrentTime(seekTime);
        audioRef.current.currentTime = seekTime;
    };

    const handleVolumeChange = (event) => {
        const volumeValue = parseFloat(event.target.value);
        setVolume(volumeValue);
        audioRef.current.volume = volumeValue;
      };


    //Avancar e recuar medias
    const handleClickAvanco = () => {
        avancar();
        
        setTimeout(() => {
          playMedia();
        }, 100);
    };

    const handleClickRecuo = () => {
        retroceder();
        
        setTimeout(() => {
          playMedia();
        }, 100);
    };
    
    const playMedia = () => {
        reproduzir();
    };

    if (!audioSelecionado) {
        return null;
    }
    
    return(
        <Nav className={css(styles.nav)}>
            
            <audio ref={audioRef} src={audioSelecionado.url} />
            
            <div>
                <span>{formatTime(currentTime)}</span>
                <input type="range" min={0} max={duration} value={currentTime}
                    onChange={handleSeek}
                    onMouseDown={() => setIsSeeking(true)}
                    onMouseUp={() => setIsSeeking(false)}
                />
                <span>{formatTime(duration)}</span>
            </div>

            <NavItem className={css(styles.item1)}>
                <NavLink className={css(styles.foto)} disabled href="#">
                    <img className={css(styles.img)} href="#" src={Img} alt="Foto qualquer" />
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item1)}>
                <NavLink href="#" className={css(styles.item11)}>
                    {audioSelecionado.nome} <br/>
                    {audioSelecionado.nome}
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
                <NavLink href="#" className={css(styles.item22)} onClick={() => handleClickRecuo()}>
                    <Prev className={css(styles.item23)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item22)}>

                    {isPlaying ? (
                        <Pause className={css(styles.item23)} onClick={pausar}/> 
                    ) : (
                        <Play className={css(styles.item23)} onClick={reproduzir}/>
                    )}
                    
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item22)} onClick={() => handleClickAvanco()}>
                <Next className={css(styles.item23)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item3)}>
                <NavLink href="#" className={css(styles.item32)}>
                    <Volume className={css(styles.item32)}/>
                </NavLink>
            </NavItem>

            <div>
                <input type="range" min={0} max={1} step={0.05}
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
            
        </Nav>
    )
}

    /*//Reproduz músicas de forma aleatória, tem de estar na componenete Home
    const [posicaoAtual, setPosicaoAtual] = useState(0);

    const avancar = () => {
        setPosicaoAtual((prevPosicao) => {
            const novaPosicao = prevPosicao + 1;
            setAudioSelecionado(audios[posicaoAtual]);
            return novaPosicao >= audios.length ? 0 : novaPosicao;
        });
    };

    const retroceder = () => {
        setPosicaoAtual((prevPosicao) => {
            const novaPosicao = prevPosicao - 1;
            setAudioSelecionado(audios[posicaoAtual]);
            return novaPosicao < 0 ? audios.length - 1 : novaPosicao;
        });
    };*/

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
        paddingLeft: '1%',
        fontSize: '25px'
    },

    item32:{
        background: 'none',
        color: 'white'
    }
})