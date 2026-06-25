// config.js — PRODUCTION TEMPLATE FOR S3 DEPLOYMENT
//
// This is the production counterpart to the GitHub Pages / dev config.js.
// Rename this file to config.js when deploying to your S3 bucket.
//
// KEY DIFFERENCE FROM DEV: devMode is false. This ensures the developer
// bypass panel (test accounts + manual MatterId override) never renders,
// and the real ShareFile folder IDs baked into TEST_ACCOUNTS in portal.html
// for local testing are stripped out entirely rather than just hidden.
//
// Fill in the same real values you're using in your GitHub Pages config.js
// for sfProxyUrl, shareFile credentials, and all logicApps URLs below.

window.MT_CONFIG = {
  devMode: false,

  sfProxyUrl: 'https://mt-sharefile-proxy-eudbfhfydhaad3fr.eastus-01.azurewebsites.net/api/sharefile-proxy?code=wbm05NflhJtnEP60cxcfFxKg3j92K5nx6tWZxhG2vn8tAzFugPeBTA==',

  shareFile: {
    clientId:     'PQtPcg3Y5lPYzAOtUp64e5h5dp3UEAu0',
    clientSecret: '4NsCF8ThWEE2L4up0mhpzN8NKevoxrA8pT4nOoXgxhvIHKKM'
  },

  logicApps: {
    appointmentsUrl:  'https://prod-18.northcentralus.logic.azure.com:443/workflows/a9237874b54145aa9f0be2480d532edc/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=jgryGO2-eAqX-CY9-wHrGZftdTcB71hIIrUWlI5_jpk',
    caseUrl:          'https://prod-27.northcentralus.logic.azure.com:443/workflows/3ad1f9f76fb646c28da08e833d4a2d24/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=hAqGyzcdJ-w_yHcpYXyezLgJ0Xu5ylGFszd9hlryWps',
    tasksUrl:         'https://prod-03.northcentralus.logic.azure.com:443/workflows/a822cb93b49b48669203067a8bfda3a8/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=mYFd3qwxZqyoYzXC6wESxBQ4-VKwR25TNzSVlrkFPPY',
    issuesUrl:        'https://prod-17.northcentralus.logic.azure.com:443/workflows/c2eab391c9b64cdaa6817c8604afd4d4/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=aus9CpC7tbuVwxHTaKXSAcS9cP6aowkNA5t2xwg9ez4',
    mbsUrl:           'https://prod-01.northcentralus.logic.azure.com:443/workflows/a22158cc747041fcb94fbb42c08c64de/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=OEjDd8a8FTWb5sFmIBycl_1LH_iisR3Qk3QESsbnUwA',
    matterLookupUrl:  'https://prod-27.northcentralus.logic.azure.com:443/workflows/e449b938a9484721979f1e9c32d9dff2/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=_cSO6OgYgIo-QPZ1e_HEKCQlUc6zV_jqlnP0axVWrvQ'
  }
};
