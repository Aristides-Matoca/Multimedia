import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { RiHeart3Fill as Heart } from "react-icons/ri"
import { Nav, NavItem, NavLink } from 'reactstrap'
import { TbPlayerTrackPrevFilled as Prev, TbPlayerTrackNextFilled as Next } from "react-icons/tb"
import { MdVolumeUp as Volume, MdPlayCircle as Play, MdOutlineFileDownload as Download, MdPauseCircle as Pause } from "react-icons/md"
import React, {useState, useEffect} from 'react'
//import firebase from 'firebase/app';
import firebase from 'firebase';
import axios from 'axios'
import 'firebase/storage'

export default function Reproducao({ mediaSelecionado, pausar, reproduzir, avancar, retroceder, isPlaying, mediaRef }){

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [volume, setVolume] = useState(0.75);

    useEffect(() => {
        if (mediaRef.current) {
            mediaRef.current.addEventListener('timeupdate', handleTimeUpdate);
            mediaRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (mediaRef.current) {
                mediaRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                mediaRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, [mediaRef]);

    useEffect(() => {//UseEfect para avançar para próxima a media de forma automatica
        if(mediaSelecionado.tipo === 'Áudio'){
            if (formatTime(currentTime) === formatTime(duration)) {
                if(formatTime(duration) != '00:00'){
                    setTimeout(() => {
                        handleClickAvanco();
                    }, 100);
                }
            }
        }
        
    }, [currentTime, duration]);

    const handleTimeUpdate = () => {
        if (!isSeeking) {
            setCurrentTime(mediaRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        setDuration(mediaRef.current.duration);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (event) => {
        const seekTime = parseFloat(event.target.value);
        setCurrentTime(seekTime);
        mediaRef.current.currentTime = seekTime;
    };

    const handleVolumeChange = (event) => {
        if(mediaSelecionado.tipo === 'Áudio' || mediaSelecionado.tipo === 'Radio'){
            const volumeValue = parseFloat(event.target.value);
            setVolume(volumeValue);
            mediaRef.current.volume = volumeValue;
        }
        else{
            setVolume(0);
            mediaRef.current.volume = 0;
        }
    };

    const fazerDownloadProvisorio = (mediaSelecionado) => {
        const audioWindow = window.open('', '_blank');

        const audioElement = document.createElement('audio');
        audioElement.src = mediaSelecionado.audioURL;
        audioElement.controls = true;

        audioWindow.document.body.appendChild(audioElement);
    };

    const fazerDownload = async (mediaSelecionado) => {
        console.log(mediaSelecionado.audioURL)
        try {
            /*const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(mediaSelecionado.audioURL);

            const url = await fileRef.getDownloadURL();
            console.log('Link 2 ' + url)
            const link = document.createElement('a');
            link.href = url;
            link.download = `${mediaSelecionado.legenda} - ${mediaSelecionado.titulo}`;
            link.click();*/

            /*const response = await fetch(mediaSelecionado.url);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = mediaSelecionado.nome + ' - ' + mediaSelecionado.titulo;
            link.click()


            const url = mediaSelecionado.audioURL;
            console.log('Link 2: ' + url);

            const link = document.createElement('a');
            link.href = url;
            link.download = `${mediaSelecionado.legenda} - ${mediaSelecionado.titulo}`;
            link.setAttribute('download', '')
            link.click();


            const url = mediaSelecionado.audioURL;
            console.log('Link 2: ' + url);

            const response = await fetch(url);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `${mediaSelecionado.legenda} - ${mediaSelecionado.titulo}`;
            link.click();*/
            const response = await axios({
                url: mediaSelecionado.audioURL,
                method: 'GET',
                responseType: 'blob',
            });
            
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.download = `${mediaSelecionado.legenda} - ${mediaSelecionado.titulo}`;
            link.click();


        } catch (error) {
            console.error('Erro ao fazer o download:', error);
        }
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

    if (!mediaSelecionado) {
        return null;
    }
    
    return(
        <Nav className={css(styles.nav)}>
            {mediaSelecionado.tipo === 'Vídeo' ? (
                <video ref={mediaRef} src={mediaSelecionado.videoURL} muted style={{display: 'none'}} />
            ) : (
                <audio ref={mediaRef} src={mediaSelecionado.audioURL} />
            )}

            <NavItem className={css(styles.item1)}>
                <NavLink href="#" className={css(styles.foto)} disabled>
                    <img className={css(styles.img)} href="#" src={mediaSelecionado.imageDownloadURL} alt="Image" />
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.titles)}>
                {mediaSelecionado.titulo} <br />
                <span className={css(styles.artista)}>{mediaSelecionado.titulo}</span>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <Heart className={css(styles.item21)}/>
            </NavItem>
 
            <NavItem className={css(styles.item2)}>
                <Prev className={css(styles.item23)} onClick={() => handleClickRecuo()}/>
            </NavItem>
            
            {mediaSelecionado.tipo == 'Radio' || mediaSelecionado.tipo == 'Áudio' ? (
                <NavItem className={css(styles.item2)}>
                    {isPlaying ? (
                        <Pause className={css(styles.iconPlay)} onClick={pausar}/> 
                    ) : (
                        <Play className={css(styles.iconPlay)} onClick={reproduzir}/>
                    )}
                </NavItem>
            ) : (
                <NavItem className={css(styles.item2)}>
                    <Play className={css(styles.disable)}/> 
                </NavItem>
            )}

            <NavItem className={css(styles.item2)}>
                <Next className={css(styles.item23)} onClick={() => handleClickAvanco()}/>
            </NavItem>

            {mediaSelecionado.tipo != 'Áudio' ? (
               <NavItem className={css(styles.item2)}>
                    <Download className={css(styles.disableDown)} />
                </NavItem>
            ) : (
                <NavItem className={css(styles.item2)}>
                    <Download className={css(styles.item21)} onClick={() => fazerDownload(mediaSelecionado)}/>
                </NavItem>
            )}
            
            {mediaSelecionado.tipo == 'Vídeo' || mediaSelecionado.tipo == 'Radio' ? (
                <div className={css(styles.progress)}>
                    <input type="range" min={0} max={0} className={css(styles.range)} disabled />
                </div>
            ) : (
                <div className={css(styles.progress)}>
                    <span className={css(styles.time)}>{formatTime(currentTime)}</span>
                    <input type="range" min={0} max={duration} value={currentTime}
                        onChange={handleSeek}
                        onMouseDown={() => setIsSeeking(true)}
                        onMouseUp={() => setIsSeeking(false)}
                        className={css(styles.range)}
                    />
                    <span className={css(styles.time)}>{formatTime(duration)}</span>
                </div>
            )}

            {mediaSelecionado.tipo == 'Vídeo' ? (
                <NavItem className={css(styles.item3)}>
                    <NavLink href="#" className={css(styles.item32)}>
                        <Volume className={css(styles.icone)}/>
                        <input type="range" min={0} max={1} step={0.05} disabled
                            value={volume}
                            onChange={handleVolumeChange}
                            className={css(styles.volume)} 
                        />
                    </NavLink>
                </NavItem>
            ) : (
                <NavItem className={css(styles.item3)}>
                    <NavLink href="#" className={css(styles.item32)}>
                        <Volume className={css(styles.icone)}/>
                        <input type="range" min={0} max={1} step={0.05}
                            value={volume}
                            onChange={handleVolumeChange}
                            className={css(styles.volume)}
                        />
                    </NavLink>
                </NavItem>
            )}
        </Nav>
    )
}

const styles = StyleSheet.create({
    nav:{
        transform: 'translate(0%, -49%)',
        color: 'white',
        background: 'none',
        fontFamily: 'Cormorant Garamond',
        height: '190%',
    },

    foto:{
        marginTop: '0.7%',
        borderRadius: '8px',
        background: 'rgb(36,36,36)',
        height: '85%',
        width: '8%',
        overflow: 'hidden',
        position: 'fixed'
    },

    img:{
        background: 'none',
        height: '100%',
        width: '100%'
    },

    item1:{
        background: 'none',
        fontSize: '18px',
        color: 'white',
        width: '10.7%',
    },

    titles:{
        margin: '2.2% 0 0 -2%',
        background: 'none',
        textAlign: 'justify',
        fontSize: '16px',
        color: 'white',
        width: '20%',
        overflow: 'hidden',
    },

    artista:{
        fontSize: '14px',
        background: 'none',
        ':hover':{
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },

    item2:{
        transform: 'translate(330%, 20%)',
        background: 'none',
        color: 'white',
        fontSize: '25px',
        height: '40%',
        margin: '0.5% 0 0 0%',
        width: '4.2%',
    },

    item21:{
        background: 'none',
        color: 'white',
        ':hover':{
            color: 'rgba(255, 213, 0, 1)'
        },
    },

    disableDown:{
        background: 'none',
        color: 'white',
        opacity: '0.6'
    },

    disable:{
        background: 'none',
        color: 'white',
        fontSize: '40px',
        opacity: '0.6'
    },

    iconPlay:{
        background: 'none',
        color: 'white',
        fontSize: '40px',
        ':hover':{
            color: 'rgba(255, 213, 0, 1)',
        }
    },

    item23:{
        background: 'none',
        color: 'white',
        ':hover':{
            color: 'rgba(255, 213, 0, 1)',
        }
    },

    progress:{
        transform: 'translate(-41.5%, 275%)',
        background: 'none',
        height: '22%',
        width: '42%'
    },

    time:{
        fontSize: '12px',
        background: 'none',
        paddingTop: '100%'
    },

    range:{
        width: '86%',
        height: '25%',
        margin: '0 1% 0 1%'
    },

    item3:{
        transform: 'translate(580%, -72%)',
        background: 'none',
        fontSize: '25px',
        height: '100%',
    },

    item32:{
        background: 'none',
        color: 'white',
        paddingTop: '15%'
    },

    icone: {
        background: 'none',
        color: 'white',
    },

    volume:{
        transform: 'translate(0%, -70%)',
        height: '5.1px',
    }
})