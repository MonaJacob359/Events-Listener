const darkmodeButton = document.getElementById('darkmodeButton');
const body = document.body;
const heading = document.querySelector('h1');
heading.style = 'color:red';
darkmodeButton.addEventListener('click', () => {
//   document.body.classList.toggle('darkMode');
//   darkmodeButton.innerText = 'Light Mode'; 
if (body.classList.contains('darkMode')){
    document.body.classList.remove('darkMode');
    darkmodeButton.innerText = 'Dark Mode';
heading.style = 'color:red';
} else{
    document.body.classList.add('darkMode');
    darkmodeButton.innerText = 'Light Mode';
   heading.style = 'color:blue';

};
});