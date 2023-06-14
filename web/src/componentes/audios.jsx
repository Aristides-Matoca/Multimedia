import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem, NavLink } from 'reactstrap';
import Img from '../img/imagem2.png'

export default function Audios({handleShow}){
    return (
        <Row className={css(styles.row)}>
            <Nav vertical className={css(styles.nav1)}>
                <h2 className={css(styles.title)}>Playlists mais ouvidas</h2>
                
                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)} onClick={() => handleShow('Ouvir')}>
                            <img className={css(styles.img)} src={Img} alt="Beyonce"/>
                            PlayList 1
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Ariana"/>
                            PlayList 2
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Kendrick"/>
                            PlayList 3
                        </NavLink>
                    </NavItem>
                </Nav>
                
                <h2 className={css(styles.title)}>Álbuns mais ouvidos</h2>
                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Beyonce"/>
                            Álbum 1
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Ariana"/>
                            Álbum 2
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Kendrick"/>
                            Álbum 3
                        </NavLink>
                    </NavItem>
                </Nav>

                <h2 className={css(styles.title)}>Artistas mais ouvidos</h2>
                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Beyonce"/><br />
                            Beyonce
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Ariana"/><br />
                            Kendrick Lamar
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Kendrick"/><br />
                            Ariana Grande
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Kendrick"/><br />
                            Other
                        </NavLink>
                    </NavItem>
                </Nav>

                <h2 className={css(styles.title)}>Artistas mais ouvidos</h2>
                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Beyonce"/><br />
                            Beyonce
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Ariana"/><br />
                            Kendrick Lamar
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Kendrick"/><br />
                            Ariana Grande
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            <img className={css(styles.img2)} src={Img} alt="Kendrick"/><br />
                            Other
                        </NavLink>
                    </NavItem>
                </Nav>
            </Nav>
        </Row>
    )
}

const styles = StyleSheet.create({
    row:{
        background: 'none',
    },

    nav1:{
        background: 'none',
        paddingLeft: '27px',
        width: '100%',
        //border: '1px solid black',
    },

    nav:{
        background: 'none',
        width: '100%',
        height: '11.5%',
        marginBottom: '2%',
    },

    title:{
        marginLeft: '1.9%',
        background: 'none',
        textAlign: 'left',
        fontSize: '27px',
    },

    item1:{
        marginLeft: '20px',
        background: 'none',
        width: '26%',
        height: '100%',
        marginRight: '5%'
    },


    item11:{
        border: '1px solid grey',
        background: 'none',
        height: '100%',
        color: 'black',
        width: '100%',
        display: 'inline-flex',
        borderRadius: '5px',
        ':hover':{
            background: 'rgba(255, 253, 245, 1)',
            textDecoration: 'underline'
        }
    },

    img:{
        transform: 'translate(-19%, -12%)',
        width: '33%',
        height: '129%',
        background: 'none',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        border: '1px solid grey',
    },

    item2:{
        marginLeft: '20px',
        background: 'none',
        width: '19%',
        height: '100%',
        marginRight: '3.8%'
    },

    item21:{
        background: 'none',
        color: 'black',
        height: '230%',
        borderRadius: '5px',
        ':hover':{
            textDecoration: 'underline'
        }
    },

    img2:{
        width: '100%',
        height: '100%',
        background: 'none',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px',
        border: '1px solid grey',
        ':hover':{
            background: 'rgba(255, 253, 245, 1)'
        }
    },
})