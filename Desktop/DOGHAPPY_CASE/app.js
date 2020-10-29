'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/hound/images')
    .then(response => response.json())
    .then(reponseJson => 
      displayResults(reponseJson))
      .catch()
      
  
}

function displayResults(responseJson) {
  console.log(responseJson);
   
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">
     `) 
    //message.push('responseJson');   
//});
  //display the results section
  $('.results').removeClass('hidden');
 // return (responseJson.message).map(response=> displayResults(response)).join('');

}
/**Right; I think that `getDogImages` should either take in a number of dog images to show, or read the user input to decide how many dog images to show. Then it can make the `fetch` call to the API route, and call `displayResults` with the results; `displayResults` can map over the results and put each one into the DOM. */


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  
});