import DiscoveryV1 from 'ibm-watson/discovery/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import {
  IWatsonDiscoveryProvider,
  IQueryResponseDTO,
  IQueryDTO,
} from '../IWatsonDiscoveryProvider';
import wDiscoveryConfig from '../../config/WatsonDiscovery.config';

export class WatsonDiscoveryProvider implements IWatsonDiscoveryProvider {
  private discovery: DiscoveryV1;  
  private response_object: IQueryResponseDTO;

  constructor() {
    this.discovery = new DiscoveryV1({
      version: wDiscoveryConfig.version, 
      authenticator: new IamAuthenticator({
        apikey: wDiscoveryConfig.api_key,
      }),
      serviceUrl: wDiscoveryConfig.url, 
    });
    this.response_object = { // Default response, case error
        results: undefined,
        passages: undefined,
        };
  }

  async queryDocument(query: IQueryDTO): Promise<IQueryResponseDTO> {
    await this.discovery
      .query({
        environmentId: wDiscoveryConfig.enviroment_id,
        collectionId: query.collectionId,
        count: query.count,
        filter: query.filter,
        query: query.query,
        naturalLanguageQuery: query.naturalLanguageQuery,
        passages: query.passages,
        highlight: query.highlight,
      })
      .then((response) => {
        this.response_object = {
            results: response.result,
            passages: response.result.passages,
        };
        return this.response_object;
      })
      .catch((error) => {
        console.log(error);
        const response_object = { // Default response, case error
                results: 'Error, please contact the administrator. Error code: ' + error.code,
                passages: 'Error, please contact the administrator. Error code: ' + error.code,
        };
        return response_object;
      });
    return this.response_object;
  }
}
