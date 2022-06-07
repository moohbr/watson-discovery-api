import * as dotenv from 'dotenv';

dotenv.config();

const VCAP_SERVICES_JSON = process.env.VCAP_SERVICES ?? ''; // VCAP_SERVICES if running on Cloud Foundry
const VCAP_SERVICES = JSON.parse(VCAP_SERVICES_JSON) ?? {}; // VCAP_SERVICES if running on Cloud Foundry



export default {
  enviroment_id: process.env.WATSON_DISCOVERY_ENVIRONMENT_ID ?? '', 
  api_key: VCAP_SERVICES['discovery'][0]['credentials']['apikey'] ?? '',
  url: VCAP_SERVICES['discovery'][0]['credentials']['url'] ?? '',
  version: process.env.WATSON_DISCOVERY_VERSION ?? '',
  collections_id: process.env.WATSON_DISCOVERY_COLLECTIONS_ID ?? '',
  passages: process.env.WATSON_DISCOVERY_PASSAGES ?? '',
  highlight: process.env.WATSON_DISCOVERY_HIGHLIGHT ?? '',
};
