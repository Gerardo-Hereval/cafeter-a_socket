import Server from './clases/server';
import { router } from './routes/router';
import cors from 'cors';

import bodyParser from 'body-parser';



const server= new Server();

//BodyPaser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors ({origin:true, credentials:true}));

//rutas de servicios
server.app.use('/', router);

 server.start(()=>{
     console.log(`Servidor corriendo en el puerto ${server.port}`);

 });