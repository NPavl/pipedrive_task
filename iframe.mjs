require('dotenv').config();
import { ApiClient, DealsApi } from 'pipedrive';

const defaultClient = new ApiClient();
defaultClient.authentications.api_key.apiKey = process.env.API_TOKEN;

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  // Get form values
  const dealTitle = document.getElementById('title').value;
  const dealValue = document.getElementById('value').value;
  const dealCurrency = document.getElementById('currency').value;
  const userID = document.getElementById('userID').value;
  const personID = document.getElementById('personID').value;
  const orgID = document.getElementById('orgID').value;
  const stageID = document.getElementById('stageID').value;
  const status = document.getElementById('status').value;
  const expectedCloseDate = document.getElementById('expectedCloseDate').value;
  const probability = document.getElementById('probability').value;
  const lostReason = document.getElementById('lostReason').value;
  const visibleTo = document.getElementById('visibleTo').value;
  const addTime = document.getElementById('addTime').value;

  // Create object with deal data
  const dealData = {
    title: dealTitle,
    value: dealValue,
    currency: dealCurrency,
    user_id: userID,
    person_id: personID,
    org_id: orgID,
    stage_id: stageID,
    status: status,
    expected_close_date: expectedCloseDate,
    probability: probability,
    lost_reason: lostReason,
    visible_to: visibleTo,
    add_time: addTime
  };

  // Send data through Pipedrive API
  try {
    console.log('Sending request...');

    // Create API instance for deals
    const api = new DealsApi(defaultClient);

    // Send request to add deal
    const response = await api.addDeal(dealData);

    console.log('Deal was added successfully!', response);
  } catch (err) {
    const errorToLog = err.context?.body || err;
    console.log('Adding failed', errorToLog);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to form submit button
  const addDealForm = document.getElementById('addDealForm');
  addDealForm.addEventListener('submit', handleSubmit);
});
