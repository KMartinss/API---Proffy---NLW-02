import express from 'express';
import routes from './routes';
import cors from 'cors';

//GET: Buscar ou listar uma informação
//POST: Criar alguma informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

// Corpo (Request body): Dados para a criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
//localhost:3333
