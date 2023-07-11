import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem } from 'reactstrap';
import Img from '../img/imagem2.png'
import audiologo from '../img/audiologo.png'
import React, { useState, useEffect } from 'react'

export default function Homepage({handleShow, selecionarMedia, videos, radios}){
    const [selectedVideos, setSelectedVideos] = useState([])
    const [selectedRadios, setSelectedRadios] = useState([])

    useEffect(() => {
        if(videos != null){
            // Embaralhar o array original e selecionar os primeiros 4 vídeos
            const shuffledArray = [...videos].sort(() => 0.5 - Math.random());
            const selected = shuffledArray.slice(0, 4);
            setSelectedVideos(selected)
        }
    }, [videos]);

    useEffect(() => {
        if(radios != null){
            const shuffledArray = [...radios].sort(() => 0.5 - Math.random());
            const selected = shuffledArray.slice(0, 3);
            setSelectedRadios(selected)
        }
    }, [radios]);

    const handleClick = (index, pos) => {

        if(pos == 2){
            handleShow('Assistir')
        }
    
        selecionarMedia(index, pos, 11);
        setTimeout(() => {
          selectMedia(index, pos);
        }, 100);
    };
    
    const selectMedia = (index, pos) => {
        selecionarMedia(index, pos, 11);
    };

    return (
        <Row className={css(styles.row)}>
            <Nav vertical className={css(styles.nav1)}>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Vídeos</h2>
                    <span className={css(styles.vermais)} onClick={() => handleShow('Video')}>Ver mais</span>
                </div>
                
                <Nav className={css(styles.nav)}>
                    {selectedVideos.map((video, index) => (
                        <NavItem key={index} className={css(styles.item1)} onClick={() => handleClick(index, 2)}>
                            <div className={css(styles.foto)}>
                                <img className={css(styles.img)} src={video.imageDownloadURL} alt="Image"/> <br/>
                            </div>
                            {video.description}<br />
                            {video.description}
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Áudios</h2>
                    <span className={css(styles.vermais)}onClick={() => handleShow('Audio')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={audiologo} alt="Audio"/> <br/>
                        <span className={css(styles.name)}>4<br/> Beyonce</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={audiologo} alt="Audio"/> <br/>
                        <span className={css(styles.name)}>Thank u, Next<br/> Ariana Grande</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={audiologo} alt="Audio"/>
                        <span className={css(styles.name)}>Damn<br/> Kendrick Lamar</span>
                        
                    </NavItem>
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Rádios</h2>
                    <span className={css(styles.vermais)}onClick={() => handleShow('Radio')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    {selectedRadios.map((radio, index) => (
                        <NavItem key={index} className={css(styles.item3)} onClick={() => handleClick(index, 3)}>
                            <img className={css(styles.img3)} src={radio.imageDownloadURL} alt="Image"/> <br/>
                            <span className={css(styles.name)}>{radio.titulo}</span>
                        </NavItem>
                    ))}
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Podcasts</h2>
                    <span className={css(styles.vermais)}onClick={() => handleShow('Podcast')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Podcast"/> <br/>
                        <span className={css(styles.name)}>Podcast 1</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Podcast"/> <br/>
                        <span className={css(styles.name)}>Podcast 2</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Podcast"/>
                        <span className={css(styles.name)}>Podcast 3</span>
                        
                    </NavItem>
                </Nav>
            </Nav>

            <Nav className={css(styles.nav2)}>
                <Nav vertical className={css(styles.nav0)}>
                    <h3 className={css(styles.tops)}>Albuns novos</h3>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>1</span> <img src={Img} alt="Album 1" className={css(styles.img2)}/>
                        <span className={css(styles.spans)}>Soundtrack</span> <span className={css(styles.spans)}>Guardians</span> 
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>2</span> <img src={Img} alt="Album 2" className={css(styles.img2)}/> 
                        <span className={css(styles.spans)}>Soundtrack</span> <span className={css(styles.spans)}>Spiderman</span> 
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>3</span> <img src={Img} alt="Album 2" className={css(styles.img2)}/>
                        <span className={css(styles.spans)}>New Album</span> <span className={css(styles.spans)}>New Singer</span> 
                    </NavItem>
                </Nav>

                <Nav vertical className={css(styles.nav0)}>
                    <h3 className={css(styles.tops)}>Top Albuns</h3>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>1</span> <img src={Img} alt="Album 1" className={css(styles.img2)}/>
                        <span className={css(styles.spans)}>4</span> <span className={css(styles.spans)}>Beyonce</span> 
                        <span className={css(styles.spans)}>2022</span>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>2</span> <img src={Img} alt="Album 2" className={css(styles.img2)}/> 
                        <span className={css(styles.spans)}>Thank U, Next</span> <span className={css(styles.spans)}>Ariana Grande</span> 
                        <span className={css(styles.spans)}>2019</span>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>3</span> <img src={Img} alt="Album 2" className={css(styles.img2)}/>
                        <span className={css(styles.spans)}>Damn</span> <span className={css(styles.spans)}>Kendrick Lamar </span> 
                        <span className={css(styles.spans)}>1999</span>
                    </NavItem>
                </Nav>

                <Nav vertical className={css(styles.nav0)}>
                    <h3 className={css(styles.tops)}>Top Artistas</h3>
                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>1</span> <img src={Img} alt="Artista 1" className={css(styles.img2)}/>
                        <span className={css(styles.spans)}>10M de Seguidores </span> <span className={css(styles.spans)}>Beyonce </span> 
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>2</span> <img src={Img} alt="Artista 2" className={css(styles.img2)}/>
                        <span className={css(styles.spans)}>08M de Seguidores </span> <span className={css(styles.spans)}>Ariana Grande </span> 
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <span className={css(styles.spans)}>3</span> <img src={Img} alt="Artista 3" className={css(styles.img2)}/>
                        <span className={css(styles.spans)}>05M de Seguidores </span> <span className={css(styles.spans)}>Kendrick Lamar </span> 
                    </NavItem>
                </Nav>
            </Nav>
        </Row>
    )
}

const styles = StyleSheet.create({
    row:{
        background: 'none'
    },

    nav1:{
        background: 'none',
        padding: '0 0.5% 0 0.1%',
        width: '75%',
        borderRight: '1px solid grey'
    },

    divtitles:{
        background: 'black',
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2% 1.6% 0 1.5%',
        color: 'white'

    },

    title:{
        background: 'black',
        textAlign: 'left',
        fontSize: '27px',
    },

    vermais:{
        background: 'none',
        ':hover':{
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },

    nav:{
        background: 'black',
        padding: '2% 1.5% 2% 1.5%',
        margin: '-0.5% 0 1% 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
    },

    item1:{
        background: 'rgb(36,36,36)',
        padding: '1% 1.5% 0.5% 1.5%',
        marginTop: '-1%',
        width: '18.3%',
        borderRadius: '5px',
        ':hover':{
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    foto:{
        width: '100%',
        height: '100%',
        background: 'none',
        borderRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        marginBottom: '5%',
    },

    img:{
        width: '100%',
        height: '100%',
        background: 'none',
        borderRadius: '5px',
    },

    item3:{
        background: 'rgb(36,36,36)',
        width: '30%',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'inherit',
        ':hover':{
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    img3:{
        width: '33%',
        height: '100%',
        background: 'none',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    },

    name: {
        background: 'none',
        marginLeft: '6%',
        fontSize: '17px'
    },

    nav2:{
        transform: 'translate(2%, 0%)',
        background: 'none',
        width: '25%',
    },

    nav0:{
        background: 'none',
        width: '100%',
        color: 'white',
    },

    tops:{
        background: 'none',
        fontSize: '23px',
        textAlign: 'left',
        color: 'white',
        paddingLeft: '2%'
    },

    item2:{
        padding: '2%',
        background: 'black',
        borderRadius: '7px',
        marginBottom: '3%',
        fontSize: '12px',
        height: '20%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    img2:{
        width: '13%',
        height: '93%',
        borderRadius: '6px',
        margin: '0 10px 0 10px'
    },

    spans:{
        background: 'none',
    }
})