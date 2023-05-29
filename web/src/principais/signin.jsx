import 'bootstrap/dist/css/bootstrap.min.css'
import './signin.css'
import { Form, Label, Input, Button, Container} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
//import app from '../backend/index'
//import mime from 'mime';
//import Mime from 'mime/Mime.js';

import axios from 'axios';


export default function SignIn(){

    const api = "http://localhost:4000";

    const [dadosUsuario, setDadosUsuario] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Busca dados 
        axios
          .get(api+'/') 
          .then(response => {
            setDadosUsuario(response.data);   
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    function verificarUsuario() {
        const usuarios = [];

        dadosUsuario.forEach(obj => {
            if (obj.username.toLowerCase() === username.toLowerCase() || obj.email === email) {
              const copia = { ...obj };
              usuarios.push(copia);
            }
          });

        return usuarios.length === 0;
      }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
    const handleFormSubmit = event => {
        event.preventDefault();

        // Verificar existência de usuários com o mesmo username ou email 
        const nExiste = verificarUsuario();
        if(!nExiste){
            // MUDAR AQUI, APRESENTA A MENSAGEM AO USUÁRIO
            alert("Usuário já existe!");
        }
        else{
            // Criar um novo usuário
            axios
            .post(api+'/create', { username, email, password })
            .then(response => {
            const createdUser = response.data;
            console.log('Created user:', createdUser);
            setUsername('');
            setEmail('');
            setPassword('');
            })
            .catch(error => {
            console.error('Error creating user:', error);
            });
        }        

      };

    return (
        <Container className='container2'>
            <header className='header2'>
                <FaPlay className='play2'/>
                <h3>ISPMedia</h3>
            </header>

            <h2 className='title2'>Regista-te e sintonize a sua paixão</h2>

            <Form className='form2'>
                <Label className='label2'>Username</Label>
                <Input className='in2' type='text' placeholder='Username' value={username} onChange={handleUsernameChange} required/>

                <Label className='label2'>Email</Label>
                <Input className='in2' type='email' placeholder='your.email@example.com' required value={email} onChange={handleEmailChange}/>

                <Label className='label2'>Palavra-passe</Label>
                <Input className='in2' type='password' placeholder='Palavra-passe' required value={password} onChange={handlePasswordChange}/>

                <Button className='btn2' onClick={handleFormSubmit}>Registar</Button>
            </Form>

            <p className='reg2'>Já tens uma conta? <Link className='link2' to={"/login"}>Iniciar Sessão</Link></p>
        </Container>
    )
}