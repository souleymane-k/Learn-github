'use strict';

function getDogImage(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/1`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText + "-" + response.url);
  })
    .then(reponseJson => 
      displayResults(reponseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong: 404 ${err.message}`)
      })
      
//${error.message}  
}
/**alert('Something went wrong. Try again later.') */
function displayResults(responseJson) {
  console.log(responseJson);
  $('#imgView').empty()
  //replace the existing image with the new one
  for (let i=0; i<responseJson.message.length; i++){
    console.log(responseJson.message[i])

   $('#imgView').append(
     `
    <img src="${responseJson.message[i]}" class="results-img">
     
     `  
   )
  
  }

  //display the results section
  $('.results').removeClass('hidden');

}

/**retrutn between 1-50 */
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
 
     let dogName = $('.enter').val();
     $('.enter').val("");
    if(dogName){
      getDogImage(dogName);
    }else{
      alert('Enter Breed Name')
    };
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  
});
