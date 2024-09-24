import { projectData } from '../data/project-datails.js';

let projectHtml = '';

projectData.forEach(project => {
    projectHtml += `
    <div class="box1 card" id="frame-${project.productId}">
      <div class="project-icon">
        <img src="images/${project.image}" alt="first project" class="image_project">
      </div>
      <div class="project_description">
        <p class="project-title"><span>${project.name}</span></p>
        <p class="pro-des">${project.productDescreption}</p>
        <!-- <p class="status-of-pro"></p> -->
        <p class="arrow"><i class="fa-solid fa-arrow-right-long"></i></p>
      </div>
    </div>
    `;
});

document.querySelector('.all_content').innerHTML = projectHtml;

projectData.forEach(project => {
    document.getElementById(`frame-${project.productId}`).addEventListener('click', () => frame(project.productId));
});

let link ;

function frame(projectId) {
    projectData.forEach(project => {
      if (project.productId === projectId) {
        link = project.link;
        document.querySelector('.frame-js').innerHTML = `
        <iframe src=${link} class="item-frame" frameborder="0" height="800px" width="450px"></iframe>
        <div class="close-button" id="close-${project.productId}" >
          <button>X</button>
        </div>
        `
        document.getElementById(`close-${project.productId}`).addEventListener('click', closeFrame);
      }
    })
}

function closeFrame(event) {
  event.stopPropagation();
  document.querySelector('.frame-js').innerHTML = '';
}