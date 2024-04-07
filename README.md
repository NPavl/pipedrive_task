# Pipedrive API: Add Deal Base Sample

[Test pipedrive link for 'Add a deal' *the request requires a personal api key*](https://npavl.github.io/pipedrive_task/index.html)

## Required Dependencies

```
npm i 
or 
npm install pipedrive 
npm install mocha chai sinon --save-dev
npm install jsdom --save-dev
npm install http-server --save-dev  
```

## All Description from web form iframe.html (create a deal): 

- to be continue .....

**problem** Google Chrome Dev tools error when passing parameters to a web form
- iframe.mjs / Not allowed to load local resource: file:///.../node_modules/pipedrive/dist/index
Try to fix ...

## Description script add_deal_baseSample.mjs:

This script (`add_deal_baseSample.mjs`) demonstrates how to add a new deal to Pipedrive using their API.

### Steps:

- Import necessary modules:
   ```
   javascript
   import { ApiClient, DealsApi } from 'pipedrive';
   ```

- Create a new instance of the API client defaultClient to interact with the Pipedrive API.

 ```
const defaultClient = new ApiClient();
 ```

- Set the API key for authentication. The API key should be stored in the API_TOKEN environment variable for secure storage of sensitive information such as API keys.

 ```
defaultClient.authentications.api_key.apiKey = process.env.API_TOKEN;
 ```

- Define an asynchronous function addDeal() that adds a new deal.

 ```
async function addDeal() {
    // Deal addition code
}
 ```
- Create an instance of DealsApi which will be used to send a request to add a deal.

```
const api = new DealsApi(defaultClient);
```
- Create a data object containing information about the new deal, such as title, value, currency, etc.

```
const data = {
    // New deal data
};
```
- Send a request to add the deal using the addDeal() method of the api object. We use await to wait for a response from the server.

```
const response = await api.addDeal(data);
```
- If the deal addition is successful, log a message indicating success and display the server response.

```
console.log('Deal was added successfully!', response);
```

- If there is an error while adding the deal, log an error message and display error information.

```
  catch (err) {
    const errorToLog = err.context?.body || err;
    console.log('Adding failed', errorToLog);
}
```

- Finally, call the addDeal() function to initiate the process of adding a deal.

```
addDeal();
```

## Run tests From Git Bash terminal 
**tests don't work correctly!**

```
npm test
```

## LINKS: 

- [API v1 Reference](https://developers.pipedrive.com/docs/api/v1/Deals#getDealPersons)
- [Get all deals](https://developers.pipedrive.com/docs/api/v1/Deals#getDeals)
- [Add a deal](https://developers.pipedrive.com/docs/api/v1/Deals#addDeal)
- [Postman](https://pipedrive.readme.io/docs/run-pipedrive-api-in-postman-or-insomnia)
- [How to get deals from Pipedrive's API (Node.js)](https://developers.pipedrive.com/tutorials/get-deals-pipedrive-api?step=5)
- [How to create a deal via Pipedrive's API (Node.js)](https://developers.pipedrive.com/docs/api/v1/Deals#addDeal)
- [Create-a-deal-pipedrive](https://developers.pipedrive.com/tutorials/create-a-deal-pipedrive-api?step=7)
  [pipedrive - client-nodejs sample ](https://github.com/pipedrive/client-nodejs)
