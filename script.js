
var currentURL = window.location.href;

// Create a URLSearchParams object
var params = new URLSearchParams(new URL(currentURL).search);

// Get the value of the "cell" parameter
var cellValue = params.get("cell");
// cellValue = 'A1'

// Print the value
if (cellValue) {
  let apiURL = 'https://script.google.com/macros/s/AKfycbyemCrwxJ8FqhJzcTwf6OWCqBofEvXHeHB3X9sC7liAtnxrS1H2P2ktOIkaFp0CipKXMQ/exec'
  fetch(`${apiURL}?cell=${cellValue}`)
    .then(response => response.text())
    .then(data => {
      // console.log(data); // Process the raw text data
      if (data.startsWith('http')) {
        location.href = data
      }
      else {
        console.error(data)
      }  
    })
    .catch(error => {
      console.log('Error:', error);
    });

}