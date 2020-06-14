import { Keys } from './WidenAuthKeys.mjs';
let widenAuthKeys = Keys();
var modal = document.querySelector('.popup-container');
var form = document.querySelector('.age-verification-form');
var ageInput = document.querySelector('.age-selector');
var notVerified = document.querySelector('.not-verified');
var tooYoung = document.querySelector('.too-young');

document.addEventListener('load', checkAgeStorage);
form.addEventListener("submit", checkAge);




function checkAge(e){
  e.preventDefault();
  
  var birthDate = ageInput.value;
  console.log(birthDate);

  var userBirthDate = new Date(birthDate);

	// set current day on 01:00:00 hours GMT+0100 (CET)
	var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';

	// calculate age comparing current date and borthday
	var myAge = ~~((Date.now(currentDate) - userBirthDate) / (31557600000));

	if(myAge < 18) {
          
           failedSubmission(myAge);
        }else{
          
          successfulSubmission(myAge);
	}
}

function failedSubmission(date) {
  console.log('you are not over 18');
  localStorage.setItem('ageVerified', false);
}

function successfulSubmission(date) {
  console.log('you are over 18');
  sessionStorage.setItem('age', date);
  sessionStorage.setItem('ageVerified', true);
  modal.classList.add('hide');
}

function checkAgeStorage() {

  
  if ('age' in sessionStorage){
    console.log('age prop exists');
    console.log(sessionStorage.getItem('age'));
    let ageTest = sessionStorage.getItem('ageVerified');

    if(ageTest === true) {
      modal.classList.add('hide');
    } else {
      modal.classList.remove('hide');
      form.classList.add('hide');

    }
}
else {
  console.log('age has not been established. Displaying popup.');
  modal.classList.remove('hide');
}
}

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