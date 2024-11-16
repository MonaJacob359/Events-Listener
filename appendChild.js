const body = document.body;

const mainElement = document.createElement('main');
const buttonElement = document.createElement('button')
buttonElement.innerText = 'click me';
body.appendChild(mainElement);
mainElement.appendChild(buttonElement);
buttonElement.addEventListener('click', () => {
  console.log("Hello Mona");
})