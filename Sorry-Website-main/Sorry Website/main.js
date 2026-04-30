
const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");
const firstPage = document.querySelector(".first-page");
const lovePage = document.querySelector(".love-page");
const reasonsPage = document.querySelector(".reasons-page");
const promisesPage = document.querySelector(".promises-page");
const continueBtn = document.querySelector(".continue-btn");
const reasonsContinueBtn = document.querySelector(".reasons-continue-btn");
const promisesContinueBtn = document.querySelector(".promises-continue-btn");
let isFirstSlide = true;
let firstSlideNoCount = 0;
let apologyStep = 0;

function showFirstPage() {
  firstPage.classList.remove("hidden");
  lovePage.classList.add("hidden");
  reasonsPage.classList.add("hidden");
  promisesPage.classList.add("hidden");
}

function showLovePage() {
  firstPage.classList.add("hidden");
  lovePage.classList.remove("hidden");
  reasonsPage.classList.add("hidden");
  promisesPage.classList.add("hidden");
}

function showReasonsPage() {
  firstPage.classList.add("hidden");
  lovePage.classList.add("hidden");
  reasonsPage.classList.remove("hidden");
  promisesPage.classList.add("hidden");
}

function showPromisesPage() {
  firstPage.classList.add("hidden");
  lovePage.classList.add("hidden");
  reasonsPage.classList.add("hidden");
  promisesPage.classList.remove("hidden");
}

function renderApologyStep() {
  firstPage.classList.remove("hidden");
  lovePage.classList.add("hidden");
  reasonsPage.classList.add("hidden");
  promisesPage.classList.add("hidden");

  yesBtn.style.display = "";
  noBtn.style.display = "";
  btnGrp.style.display = "flex";
  yesBtn.style.position = "";
  yesBtn.style.left = "";
  yesBtn.style.top = "";
  yesBtn.style.zIndex = "";

  if (apologyStep === 0) {
    question.innerHTML = "Maaf koridiye!!!";
    gif.src = "images/sorry.png";
    gif.style.height = "300px";
    gif.style.width = "400px";
    yesBtn.innerHTML = "Thik ase";
    noBtn.innerHTML = "Nohoy";
    return;
  }

  if (apologyStep === 1) {
    question.innerHTML = "Soch lo acche se!";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Accha thik hai";
    noBtn.innerHTML = "Nahi Sochna";
    return;
  }

  if (apologyStep === 2) {
    question.innerHTML = "Ak baar ar soch lo";
    gif.src = "images/sadlife.gif";
    yesBtn.innerHTML = "Chalo maan gai";
    noBtn.innerHTML = "Final no";
    return;
  }

  if (apologyStep === 3) {
    question.innerHTML = "Plss maan jao naa";
    gif.src = "images/run.gif";
    yesBtn.innerHTML = "Nohoy";
    noBtn.innerHTML = "Hoy";
    return;
  }

  question.innerHTML = "Hehehe, I knew it!";
  gif.src = "images/love.gif";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

function finishApology() {
  apologyStep = 4;
  renderApologyStep();
}

noBtn.addEventListener("click", () => {
  if (isFirstSlide) {
    firstSlideNoCount += 1;
    question.innerHTML = `Pl${"s".repeat(firstSlideNoCount)} sunn lo`;
    yesBtn.innerHTML = "Bolo";
    noBtn.innerHTML = "Nohoy";
    return;
  }

  if (apologyStep === 0) {
    apologyStep = 1;
    renderApologyStep();
    return;
  }

  if (apologyStep === 1) {
    apologyStep = 2;
    renderApologyStep();
    return;
  }

  if (apologyStep === 2) {
    apologyStep = 3;
    renderApologyStep();
    return;
  }

  if (apologyStep === 3) {
    finishApology();
  }
});

yesBtn.addEventListener("click", () => {
  if (isFirstSlide) {
    isFirstSlide = false;
    firstSlideNoCount = 0;
    showLovePage();
    return;
  }

  if (apologyStep === 0 || apologyStep === 1 || apologyStep === 2) {
    finishApology();
    return;
  }

  if (apologyStep === 3) {
    return;
  }
});

continueBtn.addEventListener("click", () => {
  showReasonsPage();
});

reasonsContinueBtn.addEventListener("click", () => {
  isFirstSlide = false;
  firstSlideNoCount = 0;
  // Show Promises page next instead of jumping to apology immediately
  showPromisesPage();
});

promisesContinueBtn.addEventListener("click", () => {
  isFirstSlide = false;
  firstSlideNoCount = 0;
  apologyStep = 0;
  renderApologyStep();
});

yesBtn.addEventListener("mouseover", () => {
  if (apologyStep !== 3) {
    return;
  }

  const yesBtnRect = yesBtn.getBoundingClientRect();
  const margin = 24;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const maxX = Math.max(margin, screenWidth - yesBtnRect.width - margin);
  const maxY = Math.max(margin, screenHeight - yesBtnRect.height - margin);
  const randomX = Math.floor(Math.random() * (maxX - margin + 1)) + margin;
  const randomY = Math.floor(Math.random() * (maxY - margin + 1)) + margin;

  yesBtn.style.position = "fixed";
  yesBtn.style.left = `${Math.min(randomX, maxX)}px`;
  yesBtn.style.top = `${Math.min(randomY, maxY)}px`;
  yesBtn.style.zIndex = "20";
});

showFirstPage();




