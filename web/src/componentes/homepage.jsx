import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem } from 'reactstrap';
import Img from '../img/imagem2.png'
import React from 'react';

export default function Homepage({handleShow, selecionarMedia}){

    const handleClick = (index, pos) => {
    
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
                    <span className={css(styles.vermais)}onClick={() => handleShow('Video')}>Ver mais</span>
                </div>
                
                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item1)}>
                        <img className={css(styles.img)} src={Img} alt="Beyonce"/> <br/>
                        4 <br/>
                        Beyonce
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <img className={css(styles.img)} src={Img} alt="Ariana"/> <br/>
                        Thank u, Next <br/>
                        Ariana Grande
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <img className={css(styles.img)} src={Img} alt="Kendrick"/> <br/>
                        damn <br/>
                        Kendrick Lamar
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <img className={css(styles.img)} src={Img} alt="Kendrick"/> <br/>
                        damn <br/>
                        Other
                    </NavItem>
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Áudios</h2>
                    <span className={css(styles.vermais)}onClick={() => handleShow('Audio')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Beyonce"/> <br/>
                        <span className={css(styles.name)}>4<br/> Beyonce</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Ariana"/> <br/>
                        <span className={css(styles.name)}>Thank u, Next<br/> Ariana Grande</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Kendrick"/>
                        <span className={css(styles.name)}>Damn<br/> Kendrick Lamar</span>
                        
                    </NavItem>
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Rádios</h2>
                    <span className={css(styles.vermais)}onClick={() => handleShow('Radio')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item3)} onClick={() => handleClick(0, 3)}>
                        <img className={css(styles.img3)} src={Img} alt="Radio Mais"/> <br/>
                        <span className={css(styles.name)}>Radio Mais</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)} onClick={() => handleClick(1, 3)}>
                        <img className={css(styles.img3)} src={Img} alt="Radio Escola"/> <br/>
                        <span className={css(styles.name)}>Radio Escola</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)} onClick={() => handleClick(2, 3)}>
                        <img className={css(styles.img3)} src={Img} alt="Radio LAC"/>
                        <span className={css(styles.name)}>Radio LAC</span>
                        
                    </NavItem>
                </Nav>

                <div className={css(styles.divtitles)}>
                    <h2 className={css(styles.title)}>Podcasts</h2>
                    <span className={css(styles.vermais)}onClick={() => handleShow('Podcast')}>Ver mais</span>
                </div>

                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Podcast 1"/> <br/>
                        <span className={css(styles.name)}>Podcast 1</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Podcast 2"/> <br/>
                        <span className={css(styles.name)}>Podcast 2</span>
                    </NavItem>

                    <NavItem className={css(styles.item3)}>
                        <img className={css(styles.img3)} src={Img} alt="Podcast 3"/>
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
        padding: '0 2.5% 0 27px',
        width: '71.5%',
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
        margin: '-0.5% 0 1.5% 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
    },

    item1:{
        background: 'rgb(36,36,36)',
        padding: '1% 1.5% 2% 1.5%',
        width: '20%',
        borderRadius: '5px',
        ':hover':{
            background: 'rgb(157,157,157)',
            cursor: 'pointer'
        }
    },

    img:{
        width: '100%',
        height: '91%',
        background: 'none',
        borderRadius: '5px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
        marginBottom: '5%'
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
        transform: 'translate(11%, 0%)',
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