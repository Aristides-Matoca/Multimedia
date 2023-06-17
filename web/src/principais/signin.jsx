import 'bootstrap/dist/css/bootstrap.min.css'
import './signin.css'
import { Label, Input, Button, Container} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function SignIn(){
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
            <Input className='in2' type='text' placeholder='Username' required/>

            <Label className='label2'>Email</Label>
            <Input className='in2' type='email' placeholder='your.email@example.com' required/>

            <Label className='label2'>Password</Label>
            <Input className='in2' type='password' placeholder='Password' required/>

            <Label className='label2'>Confirmar a Password</Label>
            <Input className='in2' type='password' placeholder='Confirmar a Password' required/>

            <Button className='btn2'>
                <Link className='btn-link' to={'/home'}>Iniciar Sessão</Link>
            </Button>

            <p className='reg2'>Já tens uma conta? <Link className='link2' to={"/login"}>Iniciar Sessão</Link></p>
        </Container>
    )
}