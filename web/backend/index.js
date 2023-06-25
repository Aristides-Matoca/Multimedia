import express from 'express';
import { json } from 'express';
import cors from 'cors';

//import Pessoa from './pessoaDB.js';
import { UsuariosOn, Pessoa, storage, Audios, Videos, Grupos } from './config.js';

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

app.get("/audio", async(req, res) => {
    const snapshot = await Audios.get();
    //const ids = snapshot.docs.map((doc) => doc.id);
    //const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const list = snapshot.docs.map((doc) => doc.data());
    res.send(list);
})

app.get("/listaG", async(req, res) => {
    const snapshot = await Grupos.get();
    //const ids = snapshot.docs.map((doc) => doc.id);
    //const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const list = snapshot.docs.map((doc) => doc.data());
    res.send(list);
})

app.get("/listaG/", async (req, res) => {
    const groupName = req.params.name;
    const snapshot = await Grupos.where("nome", "==", groupName).get();
    const groupDoc = snapshot.docs[0];
    const groupId = groupDoc.id;

    const elementsSnapshot = await Grupos.doc(groupId).collection("membros").get();
    const elementsList = elementsSnapshot.docs.map((doc) => doc.data());

    res.send(elementsList);  
  })

app.get("/video", async(req, res) => {
    const snapshot = await Videos.get();
    //const ids = snapshot.docs.map((doc) => doc.id);
    //const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const list = snapshot.docs.map((doc) => doc.data());
    res.send(list);
})

/*app.get("/podcasts", async(req, res) => {
    const snapshot = await Podcast.get();
    //const ids = snapshot.docs.map((doc) => doc.id);
    //const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    const list = snapshot.docs.map((doc) => doc.data());
    res.send(list);
})*/

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

// Enviar ficheiro 

app.post("/audios", async(req, res)=>{
    const data = req.body
    console.log("Data of upload ", data)
    await Audios.add(data);
    res.send({msg: "File Added"})
})

app.post("/grupos", async(req, res)=>{
    const data = req.body
    console.log("Grupo criado ", data)
    await Grupos.add(data);
    res.send({msg: "File Added"})
})

app.post("/videos", async(req, res)=>{
    const data = req.body
    console.log("Data of upload ", data)
    await Videos.add(data);
    res.send({msg: "File Added"})
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