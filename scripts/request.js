async function request() {
// CLOSING STORY-TELLING AND START TUTORIAL
function closeStory() {
    const storyTelling = document.querySelector(".storyTelling");
    const tutorial = document.querySelector(".beginTutorial");

    storyTelling.classList.toggle("closeS");
    tutorial.classList.add("show")
    console.log("clickk")

}
document.querySelector('#closeStory').addEventListener('click', closeStory);


// CLOSING TUTORIAL AND RESTARTING TUTORIAL
function toggleModal() {
    const tutorial = document.querySelector(".beginTutorial");
    tutorial.classList.toggle("show");
    console.log("clickk")
}

    document.querySelector('.tutorialReplay').addEventListener('click', toggleModal);
    document.querySelector('.closeTutorial').addEventListener('click', toggleModal);


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// DELETING EMAILS FOLLOW UP QUESTION
//Closing pop-up screen to NOT delete mails
function returnToMails() {
    const followUpQ = document.querySelector(".followUp");
    const deletMailPopUP = document.querySelector(".deleteMailsPopUp")

    if (followUpQ.classList.contains("openWindow")) {
        deletMailPopUP.classList.add("closeWindow"); 
    }


    console.log("continue to home")
}

//Proceeding to go to loading screen
function proceedToLoading() {
    const followUpQ = document.querySelector(".followUp");
    const loading = document.querySelector(".loading");

    if (followUpQ.classList.contains("openWindow")) {
        followUpQ.classList.remove("openWindow"); 
        loading.classList.add("openWindow"); 
    }


    console.log("continue to loading")
}


//loading screen to finished screen
function LoadingToFinish() {
    const loading = document.querySelector(".loading");
    const finish = document.querySelector(".finished");

    if (loading.classList.contains("openWindow")) {
        loading.classList.remove("openWindow"); 
        finish.classList.add("openWindow"); 
    }

    console.log("continue to finish")
}

//from finished screen return to home
function closeDeletMail() {
    const finish = document.querySelector(".finished");
    const deletMailPopUP = document.querySelector(".deleteMailsPopUp")

    if (finish.classList.contains("openWindow")) {
        deletMailPopUP.classList.add("closeWindow"); 
    }

    console.log("continue to home")
}


document.querySelector('#returnToMails').addEventListener('click', returnToMails);
document.querySelector('#continue').addEventListener('click', proceedToLoading);
document.querySelector('.loading').addEventListener('click', LoadingToFinish);
document.querySelector('#closeDeletePopUp').addEventListener('click', closeDeletMail);
}

export default request;

console.log("request.js workss")