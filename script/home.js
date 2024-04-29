import {projectData} from '../data/project-datails.js'

let projectHtml = '';

projectData.forEach(project => {
    projectHtml += `<div class="row-slider">
    <div class="card-container">
      <img src="images/${project.image}" alt="PRoejects">
      <p>${project.name}</p>
    </div>
  </div>`
});

console.log(projectHtml)

document.querySelector('.js-all-content').innerHTML = projectHtml;