import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import { RiHeart3Fill as Heart } from "react-icons/ri";
import { Nav, NavItem, NavLink } from 'reactstrap'
import Img from '../img/imagem1.png'
import { TbPlayerTrackPrevFilled as Prev, TbPlayerTrackNextFilled as Next } from "react-icons/tb";
import { MdVolumeUp as Volume, MdPlayCircle as Play, MdOutlineFileDownload as Download } from "react-icons/md";

export default function Reproducao(){
    return(
        <Nav className={css(styles.nav)}>
            <NavItem className={css(styles.item1)}>
                <NavLink className={css(styles.foto)} href="#">
                    <img className={css(styles.img)} href="#" src={Img} alt="Foto qualquer" />
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item1)}>
                <NavLink href="#" className={css(styles.item11)}>
                    4 <br/>
                    Beyonce
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
                <NavLink href="#" className={css(styles.item22)}>
                    <Prev className={css(styles.item22)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item22)}>
                    <Play className={css(styles.item22)}/>
                </NavLink>
            </NavItem>

            <NavItem className={css(styles.item2)}>
                <NavLink href="#" className={css(styles.item22)}>
                <Next className={css(styles.item22)}/>
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

const styles = StyleSheet.create({
    nav:{
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
        color: 'black',
        height: '100%',
        width: '100%'
    },

    item1:{
        background: 'none',
        fontSize: '20px',
        color: 'black'
    },

    item11:{
        transform: 'translate(-300%, -20%)',
        background: 'none',
        color: 'black'
    },

    item2:{
        transform: 'translate(-300%, 0%)',
        background: 'none',
        color: 'black',
        fontSize: '25px'
    },

    item21:{
        background: 'none',
        color: 'black'
    },

    item22:{
        transform: 'translate(150%, 0%)',
        background: 'none',
        color: 'black'
    },

    item3:{
        background: 'none',
        paddingLeft: '20%',
        fontSize: '25px'
    },

    item32:{
        background: 'none',
        color: 'black'
    }
})