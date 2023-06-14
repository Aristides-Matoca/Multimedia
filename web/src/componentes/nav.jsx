import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { RxVideo } from "react-icons/rx";
import { FiRadio } from "react-icons/fi";
import { IoAlbums } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { MdMusicNote } from "react-icons/md";
import { FaPlay, FaMicrophone } from 'react-icons/fa'
import { RiPlayListLine, RiHeart3Fill } from "react-icons/ri";
import { BiLibrary, BiHomeAlt, BiPodcast } from "react-icons/bi";
import { Row, Nav, NavItem, NavLink } from 'reactstrap'

import React from 'react';

const Navegator = ({handleShow}) => {

    return(
        <Row className={css(styles.row1)}>
            <Nav vertical className={css(styles.nav1)}>

                <NavItem className={css(styles.logo)} >
                    <NavLink className={css(styles.logo)} disabled href="#">
                        <FaPlay className={css(styles.isp)}/>
                        <h3 className={css(styles.isp)}>ISPMedia</h3>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Inicio')}>
                        <BiHomeAlt className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Início</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Artistas')}>
                        <FaMicrophone className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Artistas</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Audio')}>
                        <MdMusicNote className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Áudio</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Podcast')}>
                        <BiPodcast className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Podcast</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Radio')}>
                        <FiRadio className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Rádio</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Video')}>
                        <RxVideo className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Vídeo</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item2)}>
                    <NavLink className={css(styles.item2)} disabled href="#">
                        <BiLibrary className={css(styles.bib)}/>
                        <h3 className={css(styles.bib)}>Biblioteca</h3>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Albuns')}>
                        <IoAlbums className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Álbuns</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Playlist')}>
                        <RiPlayListLine className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Criar Playlist</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Gostos')}>
                        <RiHeart3Fill className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Gostos</p>
                    </NavLink>
                </NavItem>

                <NavItem className={css(styles.item1)}>
                    <NavLink className={css(styles.item1)} href="#" onClick={() => handleShow('Grupos')}>
                        <HiUserGroup className={css(styles.item12)}/>
                        <p className={css(styles.item12)}>Grupos</p>
                    </NavLink>
                </NavItem>
            </Nav>
        </Row>
    );
};
export default Navegator;

const styles = StyleSheet.create({
    row1: {
        background: 'rgba(255, 253, 245, 1)'
    },
    nav1:{
        background: 'none',
        fontFamily: 'Cormorant Garamond',
    },

    logo:{
        marginTop: '10%',
        background: 'none',
        display: 'inline-flex',
    },

    isp:{
        marginBottom: '30%', 
        background: 'none',
        fontSize: '25px',
        color: 'black'
    },

    item1:{
        display: 'inline-flex',
        background: 'none',
        textAlign: 'left',
        color: 'black',
        fontSize: '18px',
        lineHeight: '80%',
        ':hover':{
            fontSize: '18.5px',
            color: 'rgba(255, 213, 0, 1)'

        },

        ':focus':{
            color: 'rgba(255, 213, 0, 1)',
            fontWeight: 'bold',
        }
    },

    item12:{
        background: 'none',
        paddingRight: '5px'
    },

    item2:{
        display: 'inline-flex',
        background: 'none',
        marginTop: '5px'
    },

    bib:{
        fontSize: '22px',
        textAlign: 'left',
        background: 'none',
        color: 'Cormorant Infant'
    }
})
