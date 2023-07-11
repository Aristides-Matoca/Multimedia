import 'bootstrap/dist/css/bootstrap.min.css'
import './signin.css'
import { Label, Input, Button, Container} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"


export default function SignIn({onLogin}){

    const api = "http://localhost:4000";

    const [dadosUsuario, setDadosUsuario] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    function validatePassword(password) {
        // Define the conditions for a valid password
        const minLength = 8; // Minimum length
        const hasUppercase = /[A-Z]/.test(password); // At least one uppercase letter
        const hasLowercase = /[a-z]/.test(password); // At least one lowercase letter
        const hasNumber = /[0-9]/.test(password); // At least one number
        const hasSpecialChar = /[!@#$%^&*]/.test(password); // At least one special character
      
        // Check if the password meets all the conditions
        return (
          password.length >= minLength &&
          hasUppercase &&
          hasLowercase &&
          hasNumber &&
          hasSpecialChar
        );
    }

    function validateEmail(email) {
        const emailPattern = /^(20((1[2-9]\d{5})|(2[0-3]\d{5}))|[a-z]+\.[a-z]+)@isptec\.co\.ao$/

        return (emailPattern.test(email));
    }

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
        if(dadosUsuario != null){
            dadosUsuario.forEach(obj => {
                if (obj.username === username || obj.email === email) {
                const copia = { ...obj };
                usuarios.push(copia);
                }
            });
        }
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

        let pass = validatePassword(password);
        let em = validateEmail(email);
        const nExiste = verificarUsuario();

        onLogin(username);

        if(!em){
            alert("Só são aceites membros do ISPTEC.");
            navigate('/signin');
        } else if(!pass){
            alert("A password tem de ter pelo menos 8 caracteres, 1 letra maiúscula e minúscula, número e caractere especial.");
            navigate('/signin');
        }
        else{
            if(!nExiste){
                // Verificar existência de usuários com o mesmo username ou email 
                // MUDAR AQUI, APRESENTA A MENSAGEM AO USUÁRIO
                alert("Username ou email já exitem.");
                navigate('/signin');
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
                navigate('/home');
                })
                .catch(error => {
                console.error('Error creating user:', error);
                });
            }  
        }      
      };
    

    return (
        <Container className='container2'>
            <Link className='link2' to={"/"}>
                <header className='header2'>
                    <FaPlay className='play2'/>
                    <h3>ISPMedia</h3>
                </header>
            </Link>

            <h2 className='title2'>Regista-te e sintonize a sua paixão</h2>

            <Label className='label2'>Username</Label>
            <Input className='in2' type='text' placeholder='Username' value={username} onChange={handleUsernameChange} required/>

            <Label className='label2'>Email</Label>
            <Input className='in2' type='email' placeholder='your.email@example.com' required value={email} onChange={handleEmailChange}/>

            <Label className='label2'>Password</Label>
            <Input className='in2' type='password' placeholder='Palavra-passe' required value={password} onChange={handlePasswordChange}/>

            <Button className='btn1' onClick={handleFormSubmit}>
                Iniciar Sessão
            </Button>

            <p className='reg2'>Já tens uma conta? <Link className='link2' to={"/login"}>Iniciar Sessão</Link></p>
        </Container>
    )
}