import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { RiHeart3Fill as Heart } from "react-icons/ri"
import { Nav, NavItem, NavLink } from 'reactstrap'
import Img from '../img/imagem1.png'
import { TbPlayerTrackPrevFilled as Prev, TbPlayerTrackNextFilled as Next } from "react-icons/tb"
import { MdVolumeUp as Volume, MdPlayCircle as Play, MdOutlineFileDownload as Download, MdPauseCircle as Pause } from "react-icons/md"
import React, { useState, useRef, useEffect } from 'react'

export default function Reproducao({ audioSelecionado, pausar, reproduzir, avancar, retroceder, isPlaying, audioRef }){
/*
    Funções de áudio------------------------------------------------------------------------------------------------
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
    }*/

    const handleReproduzir = () => {
        reproduzir();
    };

    if (!audioSelecionado) {
        return null;
    }
    
    return(
        <Nav className={css(styles.nav)}>
            
            <audio ref={audioRef} src={audioSelecionado.url} onClick={handleReproduzir} />

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
                <NavLink href="#" className={css(styles.item22)} onClick={retroceder}>
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
                <NavLink href="#" className={css(styles.item22)} onClick={avancar}>
                <Next className={css(styles.item23)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item3)}>
                <NavLink href="#" className={css(styles.item32)}>
                    <Volume className={css(styles.item32)}/>
                </NavLink>
            </NavItem>
            
        </Nav>
    )
}

/*
<input
                type="range"
                value={currentTime}
                min="0"
                max={audioRef.current && audioRef.current.duration}
                onChange={(e) => setCurrentTime(e.target.value)}
            />
*/

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