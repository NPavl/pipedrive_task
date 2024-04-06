import { ApiClient, DealsApi } from 'pipedrive';
const defaultClient = new ApiClient();

defaultClient.authentications.api_key.apiKey = process.env.PIPEDRIVE_API_KEY;

async function getSelectedDeals() {
    try {
        console.log('Sending request...');

        const api = new DealsApi(defaultClient);

        const params = {
            // Filter examples:
            // 'status': 'open', // Get only open deals
            // 'user_id': 123, // Get deals for a specific user
            // 'org_id': 456 // Get deals for a specific organization
            // 'ids': '1,2,3' // Get deals with specific IDs
         };

        const response = await api.getDeals(params);

        console.log('Got selected deals successfully!', response);
    } catch (err) {
        const errorToLog = err.context?.body || err;

        console.log('Getting selected deals failed', errorToLog);
    }
}

getSelectedDeals();
