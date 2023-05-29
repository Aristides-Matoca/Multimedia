import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import { Label, Input, Button, Container} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Login(){
    return (
        <Container className='container'>
            <header className='header1'>
                <FaPlay className='play1'/>
                <h3>ISPMedia</h3>
            </header>

            <h2 className='title1'>Iniciar Sessão no ISPMedia</h2>

            <Label className='label1'>Username</Label>
            <Input className='in1' type='text' placeholder='Username' required/>

            <Label className='label1'>Password</Label>
            <Input className='in1' type='password' placeholder='Password' required/>
                
            <Button className='btn1'>
                <Link className='btn-link' to={'/home'}>Iniciar Sessão</Link>
            </Button>

            <p className='reg'>Não tens uma conta? <Link className='link2' to={"/signin"}>Regista-te no ISPMedia</Link></p>
        </Container>
    )
}