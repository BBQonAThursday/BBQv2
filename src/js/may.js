

document.addEventListener('load', checkAgeStorage);
var modal = document.querySelector('.popup-container');
var form = document.querySelector('.age-verification-form');
var ageInput = document.querySelector('.age-selector');
var tooYoung = document.querySelector('.too-young');


 form.addEventListener("submit", checkAge);





function checkAge(e){
  e.preventDefault();
  
  var birthDate = ageInput.value;
  console.log(birthDate);

  var userBirthDate = new Date(birthDate);

	// set current day on 01:00:00 hours GMT+0100 (CET)
	var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';

	// calculate age comparing current date and birthday
	var myAge = ~~((Date.now(currentDate) - userBirthDate) / (31557600000));

	if(myAge < 18) {
          
           failedSubmission(myAge);
    } else{
     successfulSubmission(myAge);
	}
}

function failedSubmission(date) {
  console.log('you are not over 18');
  sessionStorage.setItem('age', date);
  sessionStorage.setItem('ageVerified', false);
  tooYoung.classList.remove('hide');
  disable(ageInput);
}

function successfulSubmission(date) {
  console.log('you are over 18');
  sessionStorage.setItem('age', date);
  sessionStorage.setItem('ageVerified', true);
  modal.classList.add('hide');
}

function disable(el) {
  
  el.setAttribute('disabled', 'true');
  
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

function buildPopUp() {
  const PopUpHTML = ` 
  <article class="popup-container">
  <div class="popup-block">
    <div class="popup-content">
      <h2 class="h2">Welcome to</h2>
      <h1 class="h1 popup-directive">Knuckleheads</h1>
      <p class="lede body--regular">You must be 18 years of age or older to purchase CBD products. Please enter your
        birth date to view our site.</p>
    <p class="error too-young">You are too young to use our website.</p>
    
    <form class="age-verification-form">
      <input type="date" class="age-selector">
      <input type="submit" value="Verify Age" class="kh-button">
    </form>
    <p class="body--small disclaimer">By entering this site you are agreeing to the <a href="/policies/terms-of-service">Terms of Service</a> and <a href="/policies/privacy-policy">Privacy Policy</a></p>
    </div>
    <div class="popup-image">
      <img class="img" src="https://cdn.shopify.com/s/files/1/0284/3852/8074/files/store-sign.jpg?v=1592178175">
    </div>
  </div>
</article>`;
const page = document.querySelector('.project--container');
page.insertAdjacentHTML("beforeend", PopUpHTML);

  
  console.log('page container found');
   
};
if(!sessionStorage.getItem('age')) {
 buildPopUp();  
}