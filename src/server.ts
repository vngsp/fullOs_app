import express from 'express'
import helmet from 'helmet'
import mainRouter from './routes';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors())

server.use('/', mainRouter);

const PORT = process.env.PORT || 1000;

server.listen(PORT, () => {
    console.log(`Server on at ${PORT}`);
})