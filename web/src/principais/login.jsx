import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'
import { Form, Label, Input, Button, Container} from 'reactstrap'
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

            <Form className='form1'>
                <Label className='label1'>Nome</Label>
                <Input className='in1' type='text' placeholder='Nome' required/>

                <Label className='label1'>Palavra-passe</Label>
                <Input className='in1' type='password' placeholder='Palavra-passe' required/>

                <Button className='btn1'>Iniciar Sessão</Button>
            </Form>

            <p className='reg'>Não tens uma conta? <Link className='link2' to={"/signin"}>Regista-te no ISPMedia</Link></p>
        </Container>
    )
}