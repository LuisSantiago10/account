import dotenv from 'dotenv';
import Server from './db/server';
dotenv.config();

const server = new Server();
server.listen();