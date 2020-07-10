const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let nav = document.querySelectorAll('nav a');

nav.forEach((element, i) => {
  element.style.color = 'green';
  element.textContent = siteContent.nav[`nav-item-${i + 1}`]
});

let history = document.createElement('a');
let investors = document.createElement('a');

history.setAttribute('href', '#')

/*
nav.appendChild(history)
history.innerText = 'History';
history.style.color = 'green';

investors.setAttribute('href', '#');
investors.style.color = 'green';
investors.innerText = 'Investors';
nav.prepend(investors);
*/

let cta = document.querySelector('section', 'cta');

let ctaText = cta.children[0];
ctaText.children[0].innerText = siteContent.cta.h1;

let ctaButton = ctaText.children[1];
ctaButton.innerText = siteContent.cta.button;

let ctaImg = cta.children[1];
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

let mainContent = document.getElementsByClassName('main-content');
let mainContentArr = Array.from(mainContent);
mainContentArr.forEach((element, i) => {
  element.children[0].children[0].firstElementChild.innerText = siteContent['main-content']['features-h4'];
  element.children[0].children[0].lastElementChild.innerText = siteContent['main-content']["features-content"];
  element.children[0].children[1].firstElementChild.innerText = siteContent['main-content']["about-h4"];
  element.children[0].children[1].lastElementChild.innerText = siteContent['main-content']["about-content"];
  element.children[1].setAttribute('src', siteContent['main-content']['middle-img-src']);
  element.children[2].children[0].firstElementChild.innerText = siteContent['main-content']["services-h4"];
  element.children[2].children[0].lastElementChild.innerText = siteContent['main-content']['services-content'];
  element.children[2].children[1].firstElementChild.innerText = siteContent['main-content']["product-h4"];
  element.children[2].children[1].lastElementChild.innerText = siteContent['main-content']['product-content'];
  element.children[2].children[2].firstElementChild.innerText = siteContent['main-content']["vision-h4"];
  element.children[2].children[2].lastElementChild.innerText = siteContent['main-content']['vision-content'];
});

//let contactContent = document.getElementsByClassName('container')[0].children[3];

let contactContent = document.getElementsByClassName('contact');
let contactArr = Array.from(contactContent);
let addressBreak = document.createElement('br');

contactArr.forEach((element) => {
  element.firstElementChild.textContent = siteContent['contact']["contact-h4"];
  element.children[1].textContent = siteContent["contact"]["address"].substring(0, 18);
  element.children[1].textContent = siteContent["contact"]["address"].substring(19);
  element.children[2].textContent = siteContent['contact']["phone"];
  element.children[3].textContent = siteContent['contact']['email'];
});

contactArr[0].children[1].appendChild(addressBreak);
let address1 = contactArr[0].children[1].textContent = siteContent["contact"]["address"].substring(0, 18);
addressBreak.append(address1);

let footer = document.getElementsByClassName('container')[0].lastElementChild;
footer.innerText = siteContent["footer"]["copyright"];

ctaButton.setAttribute('onClick', 'myFunction()');

function myFunction(){
  console.log("Clickity-click!");
  if(document.getElementsByTagName('body')[0].style.backgroundColor === ""){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'pink'
  } else {
    document.getElementsByTagName('body')[0].style.backgroundColor = ""
  }
}


