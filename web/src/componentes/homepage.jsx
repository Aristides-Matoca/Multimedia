import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { Row, Nav, NavItem, NavLink } from 'reactstrap';
import Img from '../img/imagem2.png'

export default function Homepage(){
    return (
        <Row className={css(styles.row)}>
            <Nav vertical className={css(styles.nav)}>
                <h2 className={css(styles.title)}>VÍdeos Mais Recentes</h2>
                
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
        </Row>
    )
}

const styles = StyleSheet.create({
    row:{
        background: 'none'
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
    }
})