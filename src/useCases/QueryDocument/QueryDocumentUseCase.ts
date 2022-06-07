import {
  IQueryDTO,
  IQueryResponseDTO,
  IWatsonDiscoveryProvider,
} from './../../providers/IWatsonDiscoveryProvider';

export class QueryDocumentUseCase {
  constructor(private watsonDiscoveryProvider: IWatsonDiscoveryProvider) {}

  async execute(query: IQueryDTO): Promise<IQueryResponseDTO> {
    return await this.watsonDiscoveryProvider.queryDocument(query);
  }
}
