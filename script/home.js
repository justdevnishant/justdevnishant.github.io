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


let text = `<h3 style="text-align: center; color: yellow;">Rock Paper Scissor Game</h3>
<div class="back-ground">
  <button class="game-button" onclick="playGame('Rock');">✊</button>
  <button class="game-button" onclick="playGame('Paper');">✋</button>
  <button class="game-button" onclick="playGame('Scissor');">✌️</button>
</div>
<p class="js-choice result">Your and Computer choice</p>
<p class="js-result result win">Result</p>
<p class="js-score result">Score</p>
<div class="button-centre">
  <button class="reset" onclick="
  resetScore();
">Reset Score</button>
</div>`

console.log(text);

document.querySelector('.js-game-render').innerHTML = text;