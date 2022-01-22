/* Your JS here. */
// console.log('Hello World!')

// resizing nav bar reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  var winScrollAmount = document.documentElement.scrollTop || document.body.scrollTop;
  if (winScrollAmount > 100) {
    document.getElementById("header").style.padding = "0px 0px";
    document.getElementById("aboutMeTag").style.fontSize = "25px";
    document.getElementById("myProjectsTag").style.fontSize = "25px";
    document.getElementById("contactMeTag").style.fontSize = "25px";
  } else {
    document.getElementById("header").style.padding = "20px 0px";
    document.getElementById("aboutMeTag").style.fontSize = "30px";
    document.getElementById("myProjectsTag").style.fontSize = "30px";
    document.getElementById("contactMeTag").style.fontSize = "30px";
  }

  var scrlProp = (winScrollAmount / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  if (scrlProp >= 7 && scrlProp < 50) {
    document.getElementById("aboutMeTag").style.background = "skyblue";
    document.getElementById("myProjectsTag").style.removeProperty('background');
    document.getElementById("contactMeTag").style.removeProperty('background');
  } else if (scrlProp >= 50 && scrlProp < 80) {
    document.getElementById("aboutMeTag").style.removeProperty('background');
    document.getElementById("myProjectsTag").style.background = "skyblue";
    document.getElementById("contactMeTag").style.removeProperty('background');
  } else if (scrlProp >= 80) {
    document.getElementById("aboutMeTag").style.removeProperty('background');
    document.getElementById("myProjectsTag").style.removeProperty('background');
    document.getElementById("contactMeTag").style.background = "skyblue";
  } else {
    document.getElementById("aboutMeTag").style.removeProperty('background');
    document.getElementById("myProjectsTag").style.removeProperty('background');
    document.getElementById("contactMeTag").style.removeProperty('background');
  }
}

var compModal = document.getElementById("compModal");
var personModal = document.getElementById("personModal");
var soccerModal = document.getElementById("soccerModal");

var compButton = document.getElementById("compIcon");
var personButton = document.getElementById("personIcon");
var soccerButton = document.getElementById("soccerIcon");

var compClose = document.getElementById("compCloseButton");
var personClose = document.getElementById("personCloseButton");
var soccerClose = document.getElementById("soccerCloseButton");

compButton.onclick = function() {
  compModal.style.display = "flex";
}

personButton.onclick = function() {
  personModal.style.display = "flex";
}

soccerButton.onclick = function() {
  soccerModal.style.display = "flex";
}

compClose.onclick = function() {
  compModal.style.display = "none";
}

personClose.onclick = function() {
  personModal.style.display = "none";
}

soccerClose.onclick = function() {
  soccerModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == compModal || event.target == personModal || event.target == soccerModal) {
    compModal.style.display = "none";
    personModal.style.display = "none";
    soccerModal.style.display = "none";
  }
}

// portion that controls the carousel
var iter = 1;
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
var createLabDiv = document.getElementById("CreateLab");
var forwardLabDiv = document.getElementById("ECE391");
var cs225fpDiv = document.getElementById("CS225FP");
prevButton.onclick = function() {
  if (iter === 1) {
    iter = 3;
  } else {
    iter -= 1;
  }
  updateCarousel();
}

nextButton.onclick = function() {
  if (iter === 3) {
    iter = 1;
  } else {
    iter += 1;
  }
  updateCarousel();
}

function updateCarousel() {
  if (iter === 1) {
    createLabDiv.style.display = "flex";
    forwardLabDiv.style.display = "none";
    cs225fpDiv.style.display = "none";
  } else if (iter === 2) {
    createLabDiv.style.display = "none";
    forwardLabDiv.style.display = "flex";
    cs225fpDiv.style.display = "none";
  } else {
    createLabDiv.style.display = "none";
    forwardLabDiv.style.display = "none";
    cs225fpDiv.style.display = "flex";
  }
}
