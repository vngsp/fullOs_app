import express from 'express'
import helmet from 'helmet'
import cors from 'cors';
import { setupPassport } from './configs/passport';
import { mainRouter } from './routes';

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

setupPassport();

server.use('/', mainRouter);

server.listen(1000, () => {
    console.log('Server running on PORT 1000');
})