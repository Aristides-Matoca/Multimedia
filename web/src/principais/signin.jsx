import 'bootstrap/dist/css/bootstrap.min.css'
import './signin.css'
import { Label, Input, Button, Container } from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import React, { useState, useEffect } from 'react';
import axios from 'axios';   

export default function SignIn({ handleShow, handleLogin }) {

    const api = "http://localhost:5001";

    const [dadosUsuario, setDadosUsuario] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    //const [foto, setFoto] = useState(user)

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
        const emailPattern = /^[a-z]+\.[a-z]+@isptec\.co\.ao$/
        const emal = /^20(20|21|22|23)\d{4}@isptec\.co\.ao$/;
        const ema = /^20(1[2-9]|20)\d{4}@isptec\.co\.ao$/;

        return emailPattern.test(email) || emal.test(email) || ema.test(email);
    }

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
        handleLogin(username)

        let pass = validatePassword(password);
        let em = validateEmail(email);
        const nExiste = verificarUsuario();

        if (!em) {
            alert("Só são aceites membros do ISPTEC.");
            setTimeout(() => {
                handleShow('SignIn')
            }, 100);
        } else if (!pass) {
            alert("A password tem de ter pelo menos 8 caracteres, 1 letra maiúscula e minúscula, número e caractere especial.");
            setTimeout(() => {
                handleShow('SignIn')
            }, 100);
        }
        else {
            if (!nExiste) {
                // Verificar existência de usuários com o mesmo username ou email 
                // MUDAR AQUI, APRESENTA A MENSAGEM AO USUÁRIO
                alert("Username ou email já exitem.");
                setTimeout(() => {
                    handleShow('SignIn')
                }, 100);
            }
            else {
                // Criar um novo usuário
                axios
                    .post(api + '/create', { username, email, password, upload: "true" })
                    .then(response => {
                        const createdUser = response.data;
                        console.log('Created user:', createdUser);
                        setUsername('');
                        setEmail('');
                        setPassword('');
                        setTimeout(() => {
                            handleShow('Home')
                        }, 100);
                    })
                    .catch(error => {
                        console.error('Error creating user:', error);
                    });
            }
        }
    };


    return (
        <Container className='container2'>
            <header className='header2' onClick={() => handleShow('Start')}>
                <FaPlay className='play2' />
                <h3>ISPMedia</h3>
            </header>

            <h2 className='title2'>Regista-te e sintonize a sua paixão</h2>

            <Label className='label2'>Username</Label>
            <Input className='in2' type='text' placeholder='Username' value={username} onChange={handleUsernameChange} required />

            <Label className='label2'>Email</Label>
            <Input className='in2' type='email' placeholder='your.email@example.com' required value={email} onChange={handleEmailChange} />

            <Label className='label2'>Password</Label>
            <Input className='in2' type='password' placeholder='Palavra-passe' required value={password} onChange={handlePasswordChange} />

            <Button className='btn1' onClick={handleFormSubmit}>Iniciar Sessão</Button>

            <p className='reg2'>Já tens uma conta? <span className='span' onClick={() => handleShow('Login')}>Iniciar Sessão</span></p>
        </Container>
    )
}