import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import { Label, Input, Button, Container } from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login({ handleShow, handleLogin }) {

  const api = "http://localhost:4000";

  const [dadosUsuario, setDadosUsuario] = useState(null);

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Busca dados 
    axios
      .get(api + '/')
      .then(response => {
        setDadosUsuario(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  function verificarUsuario() {
    const usuarios = [];
    if (dadosUsuario != null) {
      dadosUsuario.forEach(obj => {
        if (obj.username === username && obj.password === password) {
          const copia = { ...obj };
          usuarios.push(copia);
        }
      });
    }

    return usuarios.length === 0;
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    handleLogin(username)

    // Verificar existência de usuários com o mesmo username ou email 
    const nExiste = verificarUsuario();
    if (nExiste) {
      // MUDAR AQUI, APRESENTA A MENSAGEM AO USUÁRIO
      alert("Usuário não existe!");
      setTimeout(() => {
        handleShow('Login')
      }, 100);
    }
    else {
      // Criar um novo usuário
      axios
        .post(api + '/addUOn', { username })
        .then(response => {
          const createdUser = response.data;
          console.log('Created user:', createdUser);
          setUsername('');
          setPassword('');
          setTimeout(() => {
            handleShow('Home')
          }, 100);
        })
        .catch(error => {
          console.error('Error creating user:', error);
        });
    }

  };

  return (
    <Container className='container'>
      <header className='header1' onClick={() => handleShow('Start')}>
        <FaPlay className='play1' />
        <h3>ISPMedia</h3>
      </header>

      <h2 className='title1'>Iniciar Sessão no ISPMedia</h2>

      <Label className='label1'>Username</Label>
      <Input className='in1' type='text' placeholder='Username' value={username} onChange={handleUsernameChange} required />

      <Label className='label1'>Password</Label>
      <Input className='in1' type='password' placeholder='Palavra-passe' value={password} onChange={handlePasswordChange} required />

      <Button className='btn1' onClick={handleFormSubmit}>Iniciar Sessão</Button>

      <p className='reg'>Não tens uma conta? <span className='span' onClick={() => handleShow('SignIn')}>Regista-te</span></p>
    </Container>
  )
}