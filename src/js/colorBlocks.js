let featuredProjects = document.querySelectorAll('.projects-container .project');
let webTools = document.querySelectorAll('.web-tools .project');


featuredProjects.forEach(() => {
  
  


  
})

function generateColors() {
  let colorSelector = getRandomInt(1,4);
  let classOutput;

  switch(colorSelector) {
    case 1: classOutput = 'bg-green';
    break;
    case 2: classOutput = 'bg-blue';
    break;
    case 3: classOutput = 'bg-peach';
    break;
    case 4: classOutput = 'bg-black';
    break;
  }
  return classOutput;
}

featuredProjects.forEach(project => {
  colorBlock = project.querySelector('.color-block'); 
  console.log(colorBlock);
  color = generateColors();
  colorBlock.classList.add(color);
})

webTools.forEach(tool => {
  colorBlock = tool.querySelector('.color-block');
  console.log(colorBlock);
  color = generateColors();
  colorBlock.classList.add(color);
})




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('load', generateColors);