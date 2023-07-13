import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite'

const Artistas = ({ pessoa, audios, videos, podcasts, irPerfil }) => {
    const [podeTitulo, setPodeTitulo] = useState('Artistas')
    const [autores, setAutores] = useState([]);
    const [autoresVideo, setAutoresVideo] = useState([]);
    const [autoresPodcast, setAutoresPodcast] = useState([]);

    useEffect(() => {//Compara Pessoa com autores de audios
        if (pessoa != null) {
            const verificarAutores = () => {
                const novosAutores = pessoa
                    .filter(people => audios.some(audio => audio.autor === people.username))
                    .map(people => people);

                setAutores(prevAutores => [...new Set([...prevAutores, ...novosAutores])]);
            };
            verificarAutores();
        }
    }, [pessoa, audios]);

    useEffect(() => {//Compara Pessoa com autores de Videos
        if (pessoa != null) {
            const verificarAutores = () => {
                const novosAutores = pessoa
                    .filter(people => videos.some(video => video.autor === people.username))
                    .map(people => people);

                    setAutoresVideo(prevAutores => [...new Set([...prevAutores, ...novosAutores])]);
            };
            verificarAutores();
        }
    }, [pessoa, videos]);

    useEffect(() => {//Adiciona autores de videos com autores de audios
        const adicionarAutores = () => {
          const novosAutores = autoresVideo.filter(item => {
            return !autores.some(autor => autor.username === item.username);
          });
    
          setAutores(prevAutores => [...prevAutores, ...novosAutores]);
        };
    
        adicionarAutores();
      }, [autores, autoresVideo]);
    
    useEffect(() => {//Compara Pessoa com autores de Podcasts
        if (pessoa != null) {
            const verificarAutores = () => {
                const novosAutores = pessoa
                    .filter(people => podcasts.some(podcast => podcast.autor === people.username))
                    .map(people => people);

                    setAutoresPodcast(prevAutores => [...new Set([...prevAutores, ...novosAutores])]);
            };
            verificarAutores();
        }
    }, [pessoa, podcasts]);

    useEffect(() => {//Adiciona autores de podcasts com autores de audios e videos
        const adicionarAutores = () => {
          const novosAutores = autoresPodcast.filter(item => {
            return !autores.some(autor => autor.username === item.username);
          });
    
          setAutores(prevAutores => [...prevAutores, ...novosAutores]);
        };
    
        adicionarAutores();
      }, [autores, autoresPodcast]);

    return (
        <div className={css(styles.container)}>

            <div className={css(styles.playlist)}>
                <span style={{ background: 'none' }}>{podeTitulo}</span>
            </div>

            <div className={css(styles.artistas)}>
                {autores.map((people, index) => (

                    <div key={index} className={css(styles.spans)} onClick={() => irPerfil(people.username)}>
                        <img src={people.foto} className={css(styles.img)} alt="" /> <br />
                        <span className={css(styles.autor)}>{people.username}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artistas;

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        background: 'black',
        width: '101.4%',
        marginLeft: '-0.8%',
        marginBottom: '1%',
    },

    playlist: {
        background: 'linear-gradient(to bottom, #555555, rgba(0, 0, 0, 0.3))',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        borderBottom: '1px solid grey',
        padding: '3% 0 3% 0',
        fontSize: '40px',
        color: 'white'
    },

    artistas: {
        //border: '1px solid red',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '10px',
        color: 'white',
        background: 'black',
        fontSize: '16px',
        padding: '1% 2% 1% 0',
        margin: '0 1.5% 0 1.5%',
    },

    spans: {
        background: 'rgb(36,36,36)',
        width: '75%',
        borderRadius: '5px',
        padding: '2% 1% 0.5% 1%',
        ':hover': {
            textDecoration: 'underline',
            background: 'rgb(157,157,157)',
            borderRadius: '6px',
            cursor: 'pointer'
        },
        ':active': {
            background: 'rgb(157,157,157)'
        }
    },

    img: {
        width: '200px',
        height: '200px',
        background: 'none',
        borderRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        marginBottom: '2%'
    },

    autor: {
        background: 'none',
        fontSize: '14px',
    },
})