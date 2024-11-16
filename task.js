// const formElements = document.querySelector("form");

// let tasks = [];

// formElements.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const inputValue = document.getElementById("input").value;

//   const task = {
//     id: Math.random(),
//     title: inputValue,
//     date: Date(),
//   };

//   tasks.unshift(task);

//   localStorage.setItem("task", JSON.stringify(tasks));

// });

const formElement = document.querySelector("form");
// for error

let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  const getTasksFromLS = localStorage.getItem("tasks");
  if (!getTasksFromLS) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return;
  }
  if (getTasksFromLS.length !== 0) {
    tasks = JSON.parse(getTasksFromLS);
  }
});
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("input").value;
  const dateOfCreate = new Date().toLocaleString()
  
  const task = {
    id: Math.random(),
    title,
    dateOfCreate,
  };
  tasks.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  formElement.reset();
  presentForm();
}); //////////////////////////////////////
const presentForm = () => {
  const section = document.querySelector(".section2");
  section.innerHTML = "";
  tasks.forEach((task, index) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
    <h4>${task.title}</h4>
    <p>Created on: ${task.dateOfCreate}</p>
    <button onclick="editTask(${index})">Edit</button>
    <button onclick="deleteTask(${index})">Delete</button>
    `;
    section.appendChild(container);
  });
};

function editTask(index) {
  const title = prompt('Edit bookmark title:', tasks[index].title);
  const dateOfCreate = tasks[index].dateOfCreate;
  // prompt('Edit bookmark title:', tasks[index].title);
  if (title && dateOfCreate) {
      tasks[index] = { title, dateOfCreate};
      presentForm();
  }
}
function deleteTask(index){
  tasks.splice(index, 1);
  presentForm();
}

// const deleteButton = document.getElementById("delete");
// function editTask (index) {
//   const editButton = document.getElementById("edit").addEventListener("click", (index)=>{
//     const title = prompt('Edit Task :', tasks[index].title);
//   });
 
//  }