import 'bootstrap/dist/css/bootstrap.min.css';
import { StyleSheet, css } from 'aphrodite';
import { Row, Nav, NavItem } from 'reactstrap';
import Img from '../img/imagem2.png';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

export default function Group({ handleShow, name, username }) {
  const api = 'http://172.20.10.3:5001';
  const [grupos, setGrupos] = useState([]);
  const [gruposC, setGruposC] = useState([]);
  const [gruposA, setGruposA] = useState([]);
  const [gruposP, setGruposP] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api + '/listaG');
        const gruposData = response.data;
        const g = [];
        const gA = [];
        const gP = [];
        var owners = []
        var membros = []
  
        if (gruposData != null) {
          gruposData.forEach(obj => {
          owners.push(obj.owners)
          membros.push(obj.membros)
          });
        }
        
        for(let i = 0; i < owners.length ; i++){             
          if (owners[i].owner === username) {
            g.push(gruposData[i]);
          } else {
            for(let i = 0; i < membros.length ; i++){             
              if (membros[i].membro === username) {
                if ( gP.indexOf(gruposData[i]) == -1){
                  gP.push(gruposData[i]);
                }
              } 
            }
            gA.push(gruposData[i]);         
          }
        }
        setGruposC(g);
        setGruposA(gA);
        setGruposP(gP);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleRemoveGroup = async (noMe) => {
 
    try {
      await axios.post(api + '/deleteGrupo', { noMe })
      .then(response => {
      const createdUser = response.data;
      alert('Eliminado!');
      })
      setGrupos(grupos.filter((grupo) => grupo.nome !== noMe));
    } catch (error) {
      console.error('Error:', error);
    }

  };

  function alter(noMe){
    var pedidos = []
    for(let i = 0; i < grupos.length ; i++){             
      if (grupos[i].nome == noMe) {
        pedidos = grupos[i].pedidos
      } 
    }

    pedidos.push(username)

      axios
      .post(api + '/updateGrupo', { noMe, pedidos })
      .then(response => {
      const createdUser = response.data;
      alert('Adicionado!');
      })
      .catch(error => {
      console.error('Error creating user:', error);
      });    
  }

  return (
    <Row className={css(styles.row)}>
      <Nav vertical className={css(styles.nav1)}>
        <Nav vertical className={css(styles.nav11)}>
          <div className={css(styles.divtitles)}>
            <h2 className={css(styles.title)}>Grupos</h2>
          </div>

          <Nav className={css(styles.nav)}>
                <NavItem className={css(styles.item1)} onClick={() => handleShow('CriarGrupo')}>
                  <span className={css(styles.name)}>Criar Grupo</span>
                </NavItem>
          </Nav>
        </Nav>
        <Nav vertical className={css(styles.nav11)}>
          <div className={css(styles.divtitles)}>
            <h2 className={css(styles.title)}>Grupos criados por ti</h2>
          </div>

          <Nav className={css(styles.nav)}>
            {gruposC.map((item) => (
              <NavItem className={css(styles.item1)} key={item.id} >
                <div className={css(styles.ii)} onClick={() => handleShow('GrupoIn')}>
                  <img className={css(styles.img)} src={item.imageURL} alt="Beyonce" />
                </div>
                <span className={css(styles.name)} onClick={() => handleShow('GrupoIn')}>{item.nome}</span>
                <button onClick={() => handleRemoveGroup(item.nome)}>Remover</button>
              </NavItem>
            ))}
          </Nav>
        </Nav>

        <Nav vertical className={css(styles.nav11)}>
          <div className={css(styles.divtitles)}>
            <h2 className={css(styles.title)}>Meus Grupos</h2>
          </div>

          <Nav className={css(styles.nav)}>
            {gruposP.map((item) => (
              <NavItem className={css(styles.item1)} key={item.id} >
                <div className={css(styles.ii)} onClick={() => handleShow('GrupoIn')}>
                  <img className={css(styles.img)} src={item.imageURL} alt="Beyonce" />
                </div>
                <span className={css(styles.name)} onClick={() => handleShow('GrupoIn')}>{item.nome}</span>
                <button >Entrar</button>
              </NavItem>
            ))}
          </Nav>
        </Nav>

        <Nav vertical className={css(styles.nav11)}>
          <div className={css(styles.divtitles)}>
            <h2 className={css(styles.title)}>Grupos Existentes</h2>
          </div>

          <Nav className={css(styles.nav)}>
            {gruposA.map((item) => (
              <NavItem className={css(styles.item1)} key={item.id} >
                <div className={css(styles.ii)} onClick={() => handleShow('GrupoIn')}>
                  <img className={css(styles.img)} src={item.imageURL} alt="Beyonce" />
                </div>
                <span className={css(styles.name)} onClick={() => handleShow('GrupoIn')}>{item.nome}</span>
                <button onClick={() => alter(item.nome)}>Adicionar</button>
              </NavItem>
            ))}
          </Nav>
        </Nav>
      </Nav>
    </Row>
  );
}

const styles = StyleSheet.create({
  row:{
      background: 'none',
      color: 'white'
  },

  nav1:{
      background: 'none',
      paddingLeft: '27px',
      width: '75%',
      height: '100%',
      justifyContent: 'space-between',
  },
  nav11:{
    background: 'none',
    paddingLeft: '27px',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
},
  nav0:{
      transform: 'translate(15%, 0%)',
      background: 'none',
      width: '25%',
  },

  divtitles:{
      background: 'black',
      borderTopLeftRadius: '6px',
      borderTopRightRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1% 1.6% 0 1.5%',

  },
  itemm:{
    background: 'rgba(255, 253, 245, 1)',
    borderRadius: '10px',
    marginBottom: '4%',
    textAlign: 'left',
    fontSize: '12px',
  },

  imgm:{
      width: '13%',
      height: '10%',
      background: 'none',
      borderRadius: '10px',
      margin: '0 10px 0 10px'
  },

  itemm1:{
      background: 'none',
      color: 'black'
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
      borderBottomLeftRadius: '6px',
      borderBottomRightRadius: '6px',
  },

  item1:{
      background: 'rgb(36,36,36)',
      width: '30%',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'inherit',
      ':hover':{
          background: 'rgb(157,157,157)',
          cursor: 'pointer'
      }
  },

  img:{
      width: '100%',
      height: '100%',
  },

  ii:{
    width: '50%',
    height: '15vh',
    background: 'none',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
},

  name: {
      background: 'none',
      marginLeft: '6%',
      fontSize: '22px'
  },

  nav2:{
      width: '100%',
      background: 'black',
      //height: '56%',
      padding: '1% 1.5% 2% 1.5%',
      margin: '0% 0 -1.5% 0',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '10px',
      borderRadius: '6px',
  },
  tops:{
    background: 'none',
    fontSize: '23px',
    textAlign: 'left',
    color: 'white'
  },

  row2:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1% 1.5% 1% 1.5%',
      background: 'none'
  },

  item2:{
      background: 'rgb(36,36,36)',
      width: '20%',
      //height: '100%',
      borderRadius: '5px',
      padding: '1% 1.5% 2% 1.5%',
      ':hover':{
          textDecoration: 'underline',
          background: 'rgb(157,157,157)',
          cursor: 'pointer'
      }
  },

  img2:{
      width: '100%',
      height: '80%',
      background: 'none',
      borderRadius: '5px',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
      marginBottom: '5%'
  },
})
