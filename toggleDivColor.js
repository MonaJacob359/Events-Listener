const divElement = document.getElementById('toggleDivColor');
const pElement = document.getElementById('boxColorName');
divElement.addEventListener('click', () => {
    if(divElement.style.backgroundColor === "blue"){
        divElement.style.backgroundColor = "red";
        pElement.innerHTML = `The box color is red`;
        pElement.style.color = "red";
        pElement.style.fontSize = '2vw ';
          } else {
            divElement.style.backgroundColor = "blue";
            pElement.innerHTML = `The box color is blue`;
            pElement.style.color = "blue";
        pElement.style.fontSize = '2vw';
        };
});

// const divElement = document.getElementById('toggleDivColor');
// divElement.addEventListener('click', () => {
//   if((divElement.style ="background-color:blue")){
//     divElement.style = "background-color:pink";
//   } else {
//     divElement.style = "background-color:pink";

//   }
// });