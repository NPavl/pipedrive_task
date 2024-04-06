import { ApiClient, DealsApi } from 'pipedrive';
const defaultClient = new ApiClient();

defaultClient.authentications.api_key.apiKey = process.env.API_TOKEN;

export async function addDeal() {
    try {
        console.log('Sending request...');

        const api = new DealsApi(defaultClient);

        const data = {
            title: 'Deal of the century',
            value: 10000,
            currency: 'USD',
            user_id: null,
            person_id: null,
            org_id: 1,
            stage_id: 1,
            status: 'open',
            expected_close_date: '2024-04-11',
            probability: 60,
            lost_reason: null,
            visible_to: 1,
            add_time: '2024-02-06',
        }
        const response = await api.addDeal(data);

        console.log('Deal was added successfully!', response);
    } catch (err) {
        const errorToLog = err.context?.body || err;

        console.log('Adding failed', errorToLog);
    }
}


addDeal();