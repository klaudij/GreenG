async function storyAdnFollowQ() {
// CLOSING STORY-TELLING AND START TUTORIAL
function closeStory() {
    const storyTelling = document.querySelector(".storyTelling");
    const tutorial = document.querySelector(".beginTutorial");

    storyTelling.classList.toggle("closeWindow");
    tutorial.classList.add("openWindow")

}
document.querySelector('#closeStory').addEventListener('click', closeStory);


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function openDeleteScreen(){
    const deletMailPopUP = document.querySelector(".deleteMailsPopUp")
    deletMailPopUP.classList.add("openWindow")


}

document.querySelector("#DeleteMails").addEventListener("click", openDeleteScreen);


// DELETING EMAILS FOLLOW UP QUESTION
//Closing pop-up screen to NOT delete mails
function returnToMails() {
    const deletMailPopUP = document.querySelector(".deleteMailsPopUp")

    if(deletMailPopUP.classList.contains("openWindow")) {
        deletMailPopUP.classList.remove("openWindow"); 
    }
}

//Proceeding to go to loading screen
function proceedToLoading() {
    const followUpQ = document.querySelector(".followUp");
    const loading = document.querySelector(".loading");

    if (followUpQ.classList.contains("openWindow")) {
        followUpQ.classList.remove("openWindow"); 
        loading.classList.add("openWindow"); 
    }
}


//loading screen to finished screen
function LoadingToFinish() {
    const loading = document.querySelector(".loading");
    const finish = document.querySelector(".finished");

    if (loading.classList.contains("openWindow")) {
        loading.classList.remove("openWindow"); 
        finish.classList.add("openWindow"); 
    }
}

//from finished screen return to home
function closeDeletMail() {
    const finish = document.querySelector(".finished");
    const deletMailPopUP = document.querySelector(".deleteMailsPopUp")

    if (finish.classList.contains("openWindow")) {
        deletMailPopUP.classList.remove("openWindow"); 
    }
}

document.querySelector("#DeleteMails").addEventListener("click", openDeleteScreen);
document.querySelector('#returnToMails').addEventListener('click', returnToMails);
document.querySelector('#continue').addEventListener('click', proceedToLoading);
document.querySelector('.loading').addEventListener('click', LoadingToFinish);
document.querySelector('#closeDeletePopUp').addEventListener('click', closeDeletMail);
}

export default storyAdnFollowQ;
