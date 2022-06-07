import { WatsonDiscoveryProvider } from '../../providers/Implementations/WatsonDiscoveryProvider';
import { QueryDocumentController } from './QueryDocumentController';
import { QueryDocumentUseCase } from './QueryDocumentUseCase';

const watsonDiscoveryProvider = new WatsonDiscoveryProvider();

const queryDocumentUseCase = new QueryDocumentUseCase(watsonDiscoveryProvider);

const queryDocumentController = new QueryDocumentController(queryDocumentUseCase);

export { queryDocumentUseCase, queryDocumentController };