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
// Project popup code starts here
const projectData = [
  {
    id: 0,
    name: 'Tonic',
    tag: { sector: 'Caopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './assets/image/work_image_1.png',
    technologies: ['Html', 'CSS', 'Javascript', 'Python'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    tag: { sector: 'Caopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './assets/image/work_image_2.png',
    technologies: ['Html', 'CSS', 'Javascript', 'Ruby'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
  {
    id: 2,
    name: 'Tonic',
    tag: { sector: 'Caopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './assets/image/work_image_3.png',
    technologies: ['Html', 'CSS', 'Javascript', 'Python'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    tag: { sector: 'Caopy', type: 'Band End Dev', year: 2015 },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './assets/image/work_image_4.png',
    technologies: ['Html', 'CSS', 'Javascript', 'Ruby', 'Python', 'Node'],
    live_link: 'www.google.com',
    source_link: 'www.google.com',
  },
];

function insertTechList(data) {
  let techList = '';
  function insertTech(data) {
    techList += `<li class="langs">${data}</li>`;
  }
  data.technologies.map(insertTech);
  return techList;
}

(function loadProjectData() {
  let htmlSkeletonToInsert = '';
  function insertData(data, index) {
    const techList = insertTechList(data)
    htmlSkeletonToInsert += `<div class="card">
    <div>
        <img class="work-image" src="${data.image}" alt="Work image one">
    </div>
    <div>
        <h3 class="title work-title">
        ${data.name}
        </h3>
        <div class="work-info">
            <ul>
                <li class="first-li">${data.tag.sector}</li>
                <li>${data.tag.type}</li>
                <li>${data.tag.year}</li>
            </ul>
        </div>
        <p class="work-description">
        ${data.description}
        </p>
        <div class="work-tag">
            <ul>
            ${techList}
            </ul>
        </div>
        <div class="project-link-div">
            <a href="#" class="project-link" data-value="${index}">
                See project
            </a>
        </div>
    </div>
</div>
    `;
  }
  projectData.map(insertData);
  document.getElementById('portfolio-section').innerHTML = htmlSkeletonToInsert;
})();

function closeProjectPopup() {
  document.getElementById('project-popup').style.display = 'none';
};
const closeElemPopup = document.getElementById('close-project-popup');
closeElemPopup.addEventListener('click', closeProjectPopup);

const triggerElem = document.getElementsByClassName('project-link');
for (let i = 0; i < triggerElem.length; i += 1){
  triggerElem[i].addEventListener('click', (e) => { openProjectPopup(e) });
}

function openProjectPopup(e) {
  e.preventDefault();
  console.log(e)
  const targetIndex = e.target.attributes[2].value;
  const techList = insertTechList(projectData[targetIndex]);

  const elemToInsert = `<h3 class="title work-title">
    ${projectData[targetIndex].name}
    </h3>
    <div class="work-info">
    <ul class="work-tag-popup">
        <li class="first-li">${projectData[targetIndex].tag.sector}</li>
        <li class="second-li">${projectData[targetIndex].tag.type}</li>
        <li class="second-li">${projectData[targetIndex].tag.year}</li>
    </ul>
    </div>
    <img src="${projectData[targetIndex].image}" alt="" id="project-popup-image">
    <div class="work-tag-button-wrapper">
    <p class="work-description work-description-popup">
    ${projectData[targetIndex].details}
    </p>
    <div class="work-tag-wrapper">
    <div class="work-tag tech-tag-popup">
    <ul class="card-lang">
    ${techList}
    </ul>
    </div>
    <div class="project-link-div project-link-div-sec">
    <a href="${projectData[targetIndex].live_link}" class="project-link live-link" target="_blank">
        See Live
        <img src="./assets/image/line-link-icon.svg" alt="" class="link-link-icon">
        </a>
    <a href="${projectData[targetIndex].live_link}" class="project-link live-link" target="_blank">
        See Source
        <img src="./assets/image/github-source-icon.png" alt="" class="link-link-icon">
    </a>
    </div>
    </div>
    </div>`;

  document.getElementsByClassName('popup-wrapper')[0].innerHTML = elemToInsert;
  document.getElementById('project-popup').style.display = 'block';
}
