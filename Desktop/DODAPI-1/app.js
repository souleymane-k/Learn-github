'use strict';

function getDogImage(number) {
  fetch('https://dog.ceo/api/breeds/image/random/'+ number)
    .then(response => response.json())
    .then(reponseJson => 
      console.log(reponseJson));
      
  
}

function displayResults(responseJson) {
  console.log(responseJson);


   $('#imgView').html(
     `
    <img src="${responseJson.message}" class="results-img">
     
     `  
   )

  //display the results section
  $('.results').removeClass('hidden');

}

/**retrutn between 1-50 */
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
     let  numberDogs = $('.enter').val();
             $('.enter').val("");
    if(numberDogs >=1 && numberDogs<=50){
      console.log(getDogImage(numberDogs));
    }else{
     alert('Enter Number Between 1-50')
    };
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  
});
