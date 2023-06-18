import express from 'express';
import { json } from 'express';
import cors from 'cors';

//import Pessoa from './pessoaDB.js';
import { UsuariosOn, Pessoa, storage } from './config.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;

// Receber da colecção pessoa
app.get("/", async(req, res) => {
    const snapshot = await Pessoa.get();
    //const ids = snapshot.docs.map((doc) => doc.id);
    //const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const list = snapshot.docs.map((doc) => doc.data());
    res.send(list);
})
// Receber da colecção usuáriosOn
app.get("/on", async(req, res) => {
    const snapshot = await UsuariosOn.get();
    //const ids = snapshot.docs.map((doc) => doc.id);
    //const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const list = snapshot.docs.map((doc) => doc.data());
    res.send(list);
})

// Enviar a colecção
// Enviar para Pessoa
app.post("/create", async(req, res)=>{
    const data = req.body
    console.log("Data of Pessoa ", data)
    await Pessoa.add(data)
    res.send({msg: "User Added"})
})
// Enviar para usuáriosOn

app.post("/addUOn", async(req, res)=>{
    const data = req.body
    console.log("Data of Pessoa ", data)
    await UsuariosOn.add(data)
    res.send({msg: "User Added"})
})

app.post("/update", async(req, res)=>{
    const id = req.body.id;
    //console.log("Before:", req.body);
    delete req.body.id;
    const data = req.body;
    await Pessoa.doc(id).update(data);
    //console.log("After:", req.body);
    res.send({msg: "Updated"})
})

app.post("/delete", async(req, res)=>{
    const id = req.body.id;
    await Pessoa.doc(id).delete();
    res.send({msg: "Deleted"});
})

app.listen(port, ()=>console.log("Up & Running *4000"))

export default app;