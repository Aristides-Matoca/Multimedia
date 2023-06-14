import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem, NavLink } from 'reactstrap';
import Img from '../img/imagem2.png'

export default function Homepage(){
    return (
        <Row className={css(styles.row)}>
            <Nav vertical className={css(styles.nav1)}>
                <h2 className={css(styles.title)}>Vídeos Mais Recentes</h2>
                
                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Beyonce"/> <br/>
                            4 <br/>
                            Beyonce
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Ariana"/> <br/>
                            Thank u, Next <br/>
                            Ariana Grande
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Kendrick"/> <br/>
                            damn <br/>
                            Kendrick Lamar
                        </NavLink>
                    </NavItem>
                </Nav>
                
                <h2 className={css(styles.title)}>Top Áudios</h2>
                <Nav className={css(styles.nav)}>
                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Beyonce"/> <br/>
                            4 <br/>
                            Beyonce
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Ariana"/> <br/>
                            Thank u, Next <br/>
                            Ariana Grande
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item1)}>
                        <NavLink href="#" className={css(styles.item11)}>
                            <img className={css(styles.img)} src={Img} alt="Kendrick"/> <br/>
                            Damn <br/>
                            Kendrick Lamar
                        </NavLink>
                    </NavItem>
                </Nav>
            </Nav>

            <Nav className={css(styles.nav2)}>
                <Nav vertical className={css(styles.nav0)}>
                    <h3 className={css(styles.tops)}>Top Albuns</h3>
                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            1<img src={Img} alt="Beyonce" className={css(styles.img2)}/> 4 Beyonce 2022
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            2<img src={Img} alt="Ariana" className={css(styles.img2)}/> Thank u, Next Ariana Grande 2019
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            3<img src={Img} alt="Kendrick" className={css(styles.img2)}/> Damn Kendrick Lamar 1999
                        </NavLink>
                    </NavItem>
                </Nav>

                <Nav vertical className={css(styles.nav0)}>
                    <h3 className={css(styles.tops)}>Top Artistas</h3>
                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            1<img src={Img} alt="Beyonce" className={css(styles.img2)}/> 10M de Seguidores Beyonce
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            2<img src={Img} alt="Ariana" className={css(styles.img2)}/> 8M de Seguidores Ariana Grande
                        </NavLink>
                    </NavItem>

                    <NavItem className={css(styles.item2)}>
                        <NavLink href="#" className={css(styles.item21)}>
                            3<img src={Img} alt="Kendrick" className={css(styles.img2)}/> 5M de Seguidores Kendrick Lamar
                        </NavLink>
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
        paddingLeft: '27px',
        width: '65%'
    },

    nav:{
        background: 'none',
        paddingLeft: '27px',
    },

    title:{
        marginLeft: '87px',
        background: 'none',
        textAlign: 'left',
        fontSize: '27px'
    },

    item1:{
        background: 'none',
        marginLeft: '60px',
        width: '23%',
    },


    item11:{
        background: 'none',
        height: '80%',
        color: 'black',
        width: '100%',
    },
    
    img:{
        transform: 'translate(-8.5%, -5%)',
        width: '120%',
        height: '91%',
        background: 'none',
        borderRadius: '10px',
        border: '1px solid grey',
        marginBottom: '-10px'
    },

    nav2:{
        transform: 'translate(28.5%, 0%)',
        background: 'none',
        width: '25%'
    },

    nav0:{
        background: 'none',
        width: '100%'
    },

    tops:{
        background: 'none',
        fontSize: '23px',
        textAlign: 'left'
    },

    item2:{
        background: 'rgba(255, 253, 245, 1)',
        borderRadius: '10px',
        marginBottom: '4%',
        textAlign: 'left',
        fontSize: '12px',
    },

    item21:{
        background: 'none',
        color: 'black'
    },

    img2:{
        width: '13%',
        height: '10%',
        background: 'none',
        borderRadius: '10px',
        margin: '0 10px 0 10px'
    }
})