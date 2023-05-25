import 'bootstrap/dist/css/bootstrap.min.css'
import './signin.css'
import { Form, Label, Input, Button, Container} from 'reactstrap'
import { FaPlay } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function SignIn(){
    return (
        <Container className='container2'>
            <header className='header2'>
                <FaPlay className='play2'/>
                <h3>ISPMedia</h3>
            </header>

            <h2 className='title2'>Regista-te e sintonize a sua paixão</h2>

            <Form className='form2'>
                <Label className='label2'>Nome</Label>
                <Input className='in2' type='text' placeholder='Nome' required/>

                <Label className='label2'>Email</Label>
                <Input className='in2' type='email' placeholder='your.email@example.com' required/>

                <Label className='label2'>Palavra-passe</Label>
                <Input className='in2' type='password' placeholder='Palavra-passe' required/>

                <Label className='label2'>Confirmar a Palavra-passe</Label>
                <Input className='in2' type='password' placeholder='Confirmar a Palavra-passe' required/>

                <Button className='btn2'>Registar</Button>
            </Form>

            <p className='reg2'>Já tens uma conta? <Link className='link2' to={"/login"}>Iniciar Sessão</Link></p>
        </Container>
    )
}