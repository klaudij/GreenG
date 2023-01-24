async function tutorialStart() {
  // CLOSING TUTORIAL
  function toggleModal() {
    const tutorial = document.querySelector(".beginTutorial");
    tutorial.classList.toggle("openWindow");
    console.log("clickk");
  }

  document.querySelector(".tutorialReplay").addEventListener("click", toggleModal);
  document.querySelector(".stopTutorial").addEventListener("click", toggleModal);
  document.querySelector(".tutorialIsFinished").addEventListener("click", toggleModal);
  document.querySelector(".closeTutorial").addEventListener("click", toggleModal);


  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////


  // TUTORIAL STEPS
  function stepOneTwo() {
    const stapOne = document.querySelector(".stapOne");
    const stapTwo = document.querySelector(".stapTwo");

    if (stapOne.classList.contains("openWindow")) {
      stapOne.classList.remove("openWindow");
      stapTwo.classList.add("openWindow");
    }

    console.log("1 naar 2");
  }

  function stepTwoThree() {
    const stapTwo = document.querySelector(".stapTwo");
    const stapThree = document.querySelector(".stapThree");

    if (stapTwo.classList.contains("openWindow")) {
      stapTwo.classList.remove("openWindow");
      stapThree.classList.add("openWindow");
    }

    console.log("2 naar 3");
  }

  function stepThreeFour() {
    const stapThree = document.querySelector(".stapThree");
    const stapFour = document.querySelector(".stapFour");

    if (stapThree.classList.contains("openWindow")) {
      stapThree.classList.remove("openWindow");
      stapFour.classList.add("openWindow");
    }

    console.log("3 naar 4");
  }

  function stepFourFive() {
    const stapFour = document.querySelector(".stapFour");
    const stapFive = document.querySelector(".stapFive");

    if (stapFour.classList.contains("openWindow")) {
      stapFour.classList.remove("openWindow");
      stapFive.classList.add("openWindow");
    }

    console.log("4 naar 5");
  }

  function stepFiveSix() {
    const stapFive = document.querySelector(".stapFive");
    const stapSix = document.querySelector(".stapSix");

    if (stapFive.classList.contains("openWindow")) {
      stapFive.classList.remove("openWindow");
      stapSix.classList.add("openWindow");
    }

    console.log("5 naar 6");
  }

  document.querySelector(".button1").addEventListener("click", stepOneTwo);
  document.querySelector(".button2").addEventListener("click", stepTwoThree);
  document.querySelector(".button3").addEventListener("click", stepThreeFour);
  document.querySelector(".button4").addEventListener("click", stepFourFive);
  document.querySelector(".button5").addEventListener("click", stepFiveSix);

  // Restart Tut
  function restartTut() {
    const stapOne = document.querySelector(".stapOne");
    const stapTwo = document.querySelector(".stapTwo");
    const stapThree = document.querySelector(".stapThree");
    const stapFour = document.querySelector(".stapFour");
    const stapFive = document.querySelector(".stapFive");
    const stapSix = document.querySelector(".stapSix");

    stapOne.classList.add("openWindow");

    if (stapTwo.classList.contains("openWindow")) {
      stapTwo.classList.remove("openWindow");
    }
    if (stapThree.classList.contains("openWindow")) {
      stapThree.classList.remove("openWindow");
    }
    if (stapFour.classList.contains("openWindow")) {
      stapFour.classList.remove("openWindow");
    }
    if (stapFive.classList.contains("openWindow")) {
      stapFive.classList.remove("openWindow");
    }
    if (stapSix.classList.contains("openWindow")) {
      stapSix.classList.remove("openWindow");
    }

    console.log("aflsuiten");
  }

  document.querySelector("#tutorial").addEventListener("click", restartTut);
  
}

export default tutorialStart;
