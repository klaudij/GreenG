// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'
// import '../styles/popup.scss'
// import '../styles/starrynight.scss'

/* IMPORT */ 
// import CONFIG from './config.js'
// import request from '.request.js';

// We can use node_modules directely in the browser!
import * as d3 from 'd3';



console.log('Hello, world!');


function closeStory() {
    const storyTelling = document.querySelector(".storyTutorial");
    const tutorial = document.querySelector(".tutorialll");

    storyTelling.classList.toggle("closeS");
    tutorial.classList.add("show")
    console.log("clickk")

}
// closeStory()
document.querySelector('#closeStory').addEventListener('click', closeStory);


function toggleModal() {
    const tutorial = document.querySelector(".tutorialll");
    tutorial.classList.toggle("show");
    console.log("clickk")
}

    document.querySelector('#tutorialReplay').addEventListener('click', toggleModal);
    document.querySelector('.closeTutorial').addEventListener('click', toggleModal);



//////////////////////////////////////////////////

var amountOfEmails = '';
var sizeOfInbox = '';

// window.onload = function() {
//   document.getElementById('button').addEventListener('click', function() {
//     chrome.identity.getAuthToken({interactive: true}, function(token) {
//       let init = {
//         method: 'GET',
//         async: true,
//         headers: {
//           Authorization: 'Bearer ' + token,
//           'Content-Type': 'application/json'
//         },
//         'contentType': 'json'
//       };
//       fetch(
//         'https://gmail.googleapis.com/gmail/v1/users/me/profile',
//         init)
//         .then((response) => response.json())
//         .then(async function(data){
//           amountOfEmails = data.messagesTotal;
//         })
//         .then(async function() {
//           emails = await listAllEmails(token, 'category:promotions')
//         }).then(async function(){
//           sizeOfInbox = await getSizeOfEmails(token, emails)
//           document.getElementById('amountOfEmails').innerHTML = amountOfEmails
//           document.getElementById('sizeOfInbox').innerHTML = `${parseFloat(sizeOfInbox / 1048576).toFixed(2)}MB`
//           document.getElementById('uitstoot').innerHTML = `${parseFloat((sizeOfInbox / 1048576) * 2.26 / 1000).toFixed(2)} kilograms of CO2 per year`
//         });
//     });
//   });

//   document.getElementById("driveButton").addEventListener('click', function(){
//     chrome.identity.getAuthToken({interactive: true}, async function(token) {
//       await getDriveInfo(token)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         var amountOfData = parseFloat(data.storageQuota.usageInDrive) + parseFloat(data.storageQuota.usageInDriveTrash)
//         document.getElementById('driveSize').innerHTML = `${parseFloat(amountOfData / 1073741824).toFixed(2)}GB in your drive`
//         document.getElementById('driveUitstoot').innerHTML = `${parseFloat((amountOfData / 1048576) * 2.26 / 1000).toFixed(2)} kilogram of CO2 per year`
//       })
//     });
//   })
// };
