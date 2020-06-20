import { Keys } from './WidenAuthKeys.mjs';
let widenAuthKeys = Keys();

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", widenAuthKeys.BearerToken);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.widencollective.com/v2/assets/search?query=bs:({Signature Series}) cat:(Documents (Residential)) dt:({Installation Guide})&expand=embeds,thumbnails,metadata,metadata_info&offset=0&limit=100", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));