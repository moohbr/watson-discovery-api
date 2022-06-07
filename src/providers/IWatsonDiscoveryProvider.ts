export interface IQueryDTO { // Query to Watson Discovery
  environmentId: string;
  collectionId: string;
  count?: number;
  filter?: string;
  query?: any;
  naturalLanguageQuery?: string;
  passages?: boolean;
  highlight?: boolean;
}

export interface IQueryResponseDTO { // Response from Watson Discovery
  results: any;
  passages?: any;
};


export interface IWatsonDiscoveryProvider {
  queryDocument(request: IQueryDTO): Promise<IQueryResponseDTO>; // Send a message to Watson Discovery
}