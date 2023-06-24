import express from 'express';
import { json } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const port = 5173;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
  // Proxy endpoint
  app.get('/proxy', async (req, res) => {
    try {
        const url = req.query.url; // Assuming the dynamic URL is passed as a query parameter named 'url'
        if (!url) {
          return res.status(400).send('Missing URL parameter');
        }
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error');
    }
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
  });