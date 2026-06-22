// config.js — EXCLUDED FROM GIT (listed in .gitignore)
// This file holds sensitive keys and signed URLs that must never be
// committed to a public repo.
//
// SETUP:
// 1. Copy this file to your local portal folder and to your web server
// 2. Replace each placeholder below with your real signed Logic App URL
// 3. Never commit this file — it is in .gitignore
//
// To deploy: upload config.js directly to GitHub Pages via the web UI
// (drag & drop into the repo) WITHOUT committing it through your normal
// Git workflow, OR host it separately and reference it via a full URL.
//
// PRODUCTION NOTE:
// Once this portal moves to your own web hosting (off GitHub Pages),
// config.js no longer needs the drag-and-drop workaround — just place it
// alongside portal.html on the server and keep it outside any public Git
// repo entirely. For extra hardening, consider routing every Logic App
// call through the same Azure Function proxy used for ShareFile, so the
// signed URLs never reach the browser at all.

window.MT_CONFIG = {
  sfProxyUrl: 'https://mt-sharefile-proxy-eudbfhfydhaad3fr.eastus-01.azurewebsites.net/api/sharefile-proxy?code=wbm05NflhJtnEP60cxcfFxKg3j92K5nx6tWZxhG2vn8tAzFugPeBTA==',

    // ShareFile OAuth app credentials — from your ShareFile OAuth app registration.
  // These are as sensitive as a password: anyone with both values can mint
  // tokens posing as your portal. Never paste these into portal.html.
  shareFile: {
    clientId:     'PQtPcg3Y5lPYzAOtUp64e5h5dp3UEAu0',
    clientSecret: '4NsCF8ThWEE2L4up0mhpzN8NKevoxrA8pT4nOoXgxhvIHKKM'
  },
  // Each Logic App's full HTTP-trigger URL, including the ?sig=... query string.
  // Leave any entry as YOUR-LOGIC-APP-URL/... if that Logic App isn't built yet —
  // the portal falls back to mock data automatically when a call fails.
  logicApps: {
    appointmentsUrl:  'https://prod-18.northcentralus.logic.azure.com:443/workflows/a9237874b54145aa9f0be2480d532edc/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=jgryGO2-eAqX-CY9-wHrGZftdTcB71hIIrUWlI5_jpk',
    caseUrl:          'https://prod-27.northcentralus.logic.azure.com:443/workflows/3ad1f9f76fb646c28da08e833d4a2d24/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=hAqGyzcdJ-w_yHcpYXyezLgJ0Xu5ylGFszd9hlryWps',
    tasksUrl:         'https://prod-03.northcentralus.logic.azure.com:443/workflows/a822cb93b49b48669203067a8bfda3a8/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=mYFd3qwxZqyoYzXC6wESxBQ4-VKwR25TNzSVlrkFPPY',
    issuesUrl:        'https://prod-17.northcentralus.logic.azure.com:443/workflows/c2eab391c9b64cdaa6817c8604afd4d4/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=aus9CpC7tbuVwxHTaKXSAcS9cP6aowkNA5t2xwg9ez4',
    mbsUrl:           'https://prod-01.northcentralus.logic.azure.com:443/workflows/a22158cc747041fcb94fbb42c08c64de/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=OEjDd8a8FTWb5sFmIBycl_1LH_iisR3Qk3QESsbnUwA',
    matterLookupUrl:  'https://prod-27.northcentralus.logic.azure.com:443/workflows/e449b938a9484721979f1e9c32d9dff2/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=_cSO6OgYgIo-QPZ1e_HEKCQlUc6zV_jqlnP0axVWrvQ'
  }
};
