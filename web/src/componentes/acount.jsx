import 'bootstrap/dist/css/bootstrap.min.css'
import { Label, Input, Button, Container} from 'reactstrap'
import { StyleSheet, css } from 'aphrodite'

export default function Conta(){
    return (
        <Container className={css(styles.cont)}>

            <h2 className=''>Minha Conta</h2>

            <Label className=''>Username</Label>
            <Input className='' type='text' placeholder='Username' required/>

            <p>Alterar a palavra-passe</p>
            <Label className=''>Password</Label>
            <Input className='' type='password' placeholder='Password' required/>
                
            <Button className=''>Salvar</Button>
        </Container>
    )
}

const styles = StyleSheet.create({
    cont:{
        background: 'none'
    },
})