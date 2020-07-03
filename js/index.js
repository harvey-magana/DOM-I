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

let nav = document.querySelector('nav');
let navChildren1 = nav.children[0];
let navChildren2 = nav.children[1];
let navChildren3 = nav.children[2];
let navChildren4 = nav.children[3];
let navChildren5 = nav.children[4];
let navChildren6 = nav.children[5];

navChildren1.innerText = siteContent.nav["nav-item-1"];
navChildren2.innerText = siteContent.nav["nav-item-2"];
navChildren3.innerText = siteContent.nav["nav-item-3"];
navChildren4.innerText = siteContent.nav["nav-item-4"];
navChildren5.innerText = siteContent.nav["nav-item-5"];
navChildren6.innerText = siteContent.nav["nav-item-6"];

let cta = document.querySelector('section', 'cta');
let ctaH1 = document.querySelector('cta', 'h1');

let ctaText = cta.children[0];
ctaText.children[0].innerText = siteContent.cta.h1;

let ctaButton = ctaText.children[1];
ctaButton.innerText = siteContent.cta.button;

let ctaImg = cta.children[1];
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

let mainContent = document.getElementsByClassName('container')[0].children[2];

let featuresH4 = mainContent.children[0].children[0].firstElementChild;
featuresH4.innerText = siteContent['main-content']['features-h4']

let featuresP = mainContent.children[0].children[0].lastElementChild;
featuresP.innerText = siteContent['main-content']["features-content"]

let aboutH4 = mainContent.children[0].children[1].firstElementChild;
aboutH4.innerText = siteContent['main-content']["about-h4"]

let aboutP = mainContent.children[0].children[1].lastElementChild;
aboutP.innerText = siteContent['main-content']["about-content"]

let middleImg = mainContent.children[1];
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesH4 = mainContent.children[2].children[0].firstElementChild;
servicesH4.innerText = siteContent['main-content']["services-h4"];

let servicesP = mainContent.children[2].children[0].lastElementChild;
servicesP.innerText = siteContent['main-content']['services-content'];

let productH4 = mainContent.children[2].children[1].firstElementChild;
productH4.innerText = siteContent['main-content']["product-h4"];

let productP = mainContent.children[2].children[1].lastElementChild;
productP.innerText = siteContent['main-content']['product-content'];

let visionH4 = mainContent.children[2].children[2].firstElementChild;
visionH4.innerText = siteContent['main-content']["vision-h4"];

let visionP = mainContent.children[2].children[2].lastElementChild;
visionP.innerText = siteContent['main-content']['vision-content'];