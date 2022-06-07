import { Router } from 'express';
import { queryDocumentController } from './useCases/QueryDocument';


const routes = Router();

routes.post('/discovery/v1', (request, response) => {
  queryDocumentController.handle(request, response);
});

routes.get('/', (request, response) => {
  response
    .status(200)
    .send({
      api: 'discovery-api',
      version: '1.0.0',
      author: 'Matheus Araujo',
      email: 'matheus.araujo@kukac.com.br',
      github: '/moohbr',
    });
});

export { routes };
