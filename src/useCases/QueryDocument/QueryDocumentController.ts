import { Request, Response } from 'express';
import { IQueryDTO } from '../../providers/IWatsonDiscoveryProvider';
import wDiscoveryConfig from '../../config/WatsonDiscovery.config';
import { QueryDocumentUseCase } from './QueryDocumentUseCase';

export class QueryDocumentController {
  constructor(private queryDocumentUseCase: QueryDocumentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const query : IQueryDTO  = {
      query: request.body.query,
      naturalLanguageQuery: request.body.naturalLanguageQuery,
      passages: request.body.passages ?? wDiscoveryConfig.passages,
      highlight: request.body.highlight ?? wDiscoveryConfig.highlight,
      filter : request.body.filter,
      environmentId: wDiscoveryConfig.enviroment_id,
      collectionId: wDiscoveryConfig.collections_id,
    }
    let response_object = await this.queryDocumentUseCase.execute(query); // Send a message to Watson Discovery
    return response.json(response_object);
  }
}
