import { goalData } from "../data/dataGoal.js";

let goalHtml = '';

console.log(goalData);

goalData.forEach(project => {
    goalHtml += `
    <div class="box1 card" id="frame">
      <div class="project_description">
        <p class="project-title"><span>${project.goalDes}</span></p>
        <p class="pro-des">${project.date}</p>
        <!-- <p class="status-of-pro"></p> -->
        <p class="arrow"><i class="fa-solid fa-arrow-right-long"></i></p>
      </div>
    </div>
    `;
});

/* document.querySelector('.width-divide-2').innerHTML = goalHtml; */