import {projectData} from '../data/project-datails.js'

let projectHtml = '';

projectData.forEach(project => {
    projectHtml += `<a href="https://github.com/nishant0kumar/nishant0kumar.github.io">
    <div class="box1 card">
      <img src="images/${project.image}" alt="first project" class="image_project">
      <div class="project_description">
        <p class="project-title"><span>${project.name}</span></p>
        <p class="pro-des">${project.productDescreption}</p>
        <p class="resource"><span>${project.languageUsed}</span></p>
        <div class="progress-bar">
      <progress id="progressBar" max="100" value="${project.progress}"></progress>
    </div>
        <!-- <p class="status-of-pro"></p> -->
      </div>
    </div>
  </a>`
});

console.log(projectHtml)

document.querySelector('.all_content').innerHTML = projectHtml;