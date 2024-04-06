import fetch from 'node-fetch';

function createDeal(data, callback) {
    const apiToken = process.env.API_TOKEN;

    fetch('https://api.pipedrive.com/v1/deals?api_token=' + apiToken, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'New Deal',
            ...data
        })
    })
    .then(response => response.json())
    .then(data => {
        callback(null, data);
    })
    .catch(error => {
        callback(error, null);
    });
}

const iframeData = {
    title: 'New Deal',
    value: 10000,
    currency: 'USD',
    user_id: null,
    person_id: null,
    org_id: 1,
    stage_id: 1,
    status: 'open',
    expected_close_date: '2024-07-04',
    probability: 60,
    lost_reason: null,
    visible_to: 1,
    add_time: '2024-04-06',
}

createDeal(iframeData, (error, result) => {
    if (error) {
        console.error('Error creating a deal in Pipedrive', error);
    } else {
        console.log('A new deal was created in Pipedrive:', result);
    }
});
