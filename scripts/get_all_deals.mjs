import { ApiClient, DealsApi } from 'pipedrive';
const defaultClient = new ApiClient();

defaultClient.authentications.api_key.apiKey = process.env.API_TOKEN;

export async function getDeals() {
    try {
        console.log('Sending request...');

        const api = new DealsApi(defaultClient);

        const response = await api.getDeals();

        console.log('Got deals successfully!', response);
    } catch (err) {
        const errorToLog = err.context?.body || err;

        console.log('Getting deals failed', errorToLog);
    }
}

getDeals();