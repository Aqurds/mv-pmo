// Define state in constant
const State = ['open', 'close'];

// Mobile menu toggle function, will act on parameter.
// Also apply text blur effect based on figma design.
function toggleMobileMenu(state) {
  const textBlurElem = document.getElementsByClassName('section-intro')[0];
  const textBlueLogo = document.getElementById('logo-div');
  const classApplicable = 'text-filter';
  if (state === State[0]) {
    document.getElementById('mobile-menu').style.display = 'block';
    textBlurElem.classList.add(classApplicable);
    textBlueLogo.classList.add(classApplicable);
  } else if (state === State[1]) {
    document.getElementById('mobile-menu').style.display = 'none';
    textBlurElem.classList.remove(classApplicable);
    textBlueLogo.classList.remove(classApplicable);
  }
}

// Open mobile menu
document.getElementById('logo-icon').addEventListener('click', () => { toggleMobileMenu(State[0]); });

// Close mobile menu by clicking on close button and menu items
const closeElem = document.getElementsByClassName('close-mobile-menu');

for (let i = 0; i < closeElem.length; i += 1) {
  closeElem[i].addEventListener('click', () => { toggleMobileMenu(State[1]); });
}
//window poppup
// Project popup code starts here
const projectData = [
  {
    id: 0,
    name: "Tonic",
    tag: {sector: "Caopy", type: "Band End Dev", year: 2015},
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "./assets/image/work_image_1.png",
    technologies: ["Html", "CSS", "Javascript", "Python"],
    live_link: "www.google.com",
    source_link: "www.google.com"
  },
  {
    id: 1,
    name: "Multi-Post Stories",
    tag: {sector: "Caopy", type: "Band End Dev", year: 2015},
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "./assets/image/work_image_2.png",
    technologies: ["Html", "CSS", "Javascript", "Ruby"],
    live_link: "www.google.com",
    source_link: "www.google.com"
  },
  {
    id: 2,
    name: "Tonic",
    tag: {sector: "Caopy", type: "Band End Dev", year: 2015},
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "./assets/image/work_image_3.png",
    technologies: ["Html", "CSS", "Javascript", "Python"],
    live_link: "www.google.com",
    source_link: "www.google.com"
  },
  {
    id: 3,
    name: "Multi-Post Stories",
    tag: {sector: "Caopy", type: "Band End Dev", year: 2015},
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "./assets/image/work_image_4.png",
    technologies: ["Html", "CSS", "Javascript", "Ruby"],
    live_link: "www.google.com",
    source_link: "www.google.com"
  }
];
