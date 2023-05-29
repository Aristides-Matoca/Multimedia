import 'bootstrap/dist/css/bootstrap.min.css'
import { StyleSheet, css } from 'aphrodite'
import Navegator from '../componentes/nav'
import Homepage from '../componentes/homepage'
import Reproducao from '../componentes/reproducao'
import { IoIosNotifications } from "react-icons/io"
import { TbSearch, TbSettings } from "react-icons/tb"
import { InputGroup, InputGroupText, Input, Row} from 'reactstrap'

export default function Home() {
  return (
    <Row className={css(styles.row2)}>
      <nav className={css(styles.nav4)}>
        <Navegator/>
      </nav>

      <header className={css(styles.header)}>
        <InputGroup className={css(styles.search)}>
          <InputGroupText className={css(styles.logosearch)}>
            <TbSearch className={css(styles.logosearch)}/>
          </InputGroupText>
          <Input className={css(styles.textsearch)} placeholder='Pesquise por Sons, Artistas e Álbuns'/>
        </InputGroup>

        <IoIosNotifications className={css(styles.notUser)}/>
        <TbSettings className={css(styles.notUser)}/>
      </header>



      <div className={css(styles.home)}>
        <Homepage/>
      </div>

      <aside className={css(styles.aside)}>
      
      </aside>

      <footer className={css(styles.footer)}>
        <Reproducao/>
      </footer>
    </Row>
  )
}

const styles = StyleSheet.create({
  row2:{
    background:'none',
  },

  nav4:{
    transform: 'translate(-307.2%, -50%)',
    background: 'rgba(255, 253, 245, 1)',
    borderRight: '2px solid grey',
    paddingLeft: '4%',
    position: 'fixed',
    height: '100%',
    width: '16%'
  },

  header:{
    transform: 'translate(-51%, -490%)',
    fontFamily: 'Cormorant Garamond',
    paddingTop: '1.5%',
    background: 'none',
    position: 'fixed',
    height: '10%',
    width: '50%'
  },

  search:{
    background: 'none'
  },

  logosearch:{
    background: 'rgba(255, 253, 245, 1)',
    borderRight: 'none'
  },

  textsearch:{
    background: 'rgba(255, 253, 245, 1)',
    borderLeft: 'none'
  },

  notUser:{
    transform: 'translate(2000%, -110%)',
    marginRight: '8%',
    background: 'none',
    fontSize: '28px',
    ':hover':{
    cursor: 'pointer'
    }
  },

  home:{
    transform: 'translate(-56%, -54%)',
    fontFamily: 'Cormorant Garamond',
    background: 'none',
    position: 'fixed',
    height: '71%',
    width: '57%'
  },

  aside:{
    transform: 'translate(121%, -54%)',
    border: '1px solid black',
    background: 'none',
    position: 'fixed',
    height: '71%',
    width: '22%'
  },

  footer:{
    transform: 'translate(-39.5%, 193%)',
    background: 'rgba(255, 253, 245, 1)',
    paddingTop: '50px',
    position: 'fixed',
    height: '17%',
    width: '84%'
  }
})