import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite'
import user from '../img/user.jpg'

const Artistas = ({ pessoa, audios, videos, podcast, irPerfil }) => {
    const [newPessoa, setNewPessoa] = useState([])
    const podeTitulo = 'Artistas'

    useEffect(() => {
        if (pessoa != null) {
            const pessoaActualizada = pessoa.map(p => {
                if (p.foto === null) {
                    return { ...p, foto: user };
                }
                return p;
            });
            setNewPessoa(pessoaActualizada);
        }
    }, []);

    return (
        <div className={css(styles.container)}>

            <div className={css(styles.playlist)}>
                <span style={{ background: 'none' }}>{podeTitulo}</span>
            </div>

            <div className={css(styles.info)} style={{ background: 'none' }}>

                <div className={css(styles.spans)}>
                    <span style={{ background: 'none' }}>#</span>
                    <span style={{ marginLeft: '4%', background: 'none' }}>Título</span>
                </div>
                <span style={{ background: 'none', marginRight: '-1.5%' }}>Reproduzir</span>
            </div>

            {newPessoa.map((pessoa, index) => (
                <div key={index} className={css(styles.radios)}>

                    <div className={css(styles.spans)}>
                        <span style={{ background: 'none' }}>{index + 1}</span>
                        <img src={pessoa.foto} className={css(styles.img)} alt="" />

                        <div className={css(styles.titles)}>
                            <span className={css(styles.autor)} onClick={() => irPerfil(pessoa.username)}>{pessoa.username}</span>
                        </div>
                    </div>
                </div>
            ))}
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

    autor: {
        background: 'none',
        fontSize: '14px',

        ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },

    radioname: {
        background: 'none',
        fontSize: '14px',
    },

    icone: {
        background: 'none',
        fontSize: '29px',
        ':hover': {
            cursor: 'pointer'
        }
    }
})