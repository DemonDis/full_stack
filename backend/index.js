import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(6000, ()=> console.log('Server up'))