let allcards = document.querySelectorAll(".main-ele");
let allpages = document.querySelectorAll(".main-pages");
let allpagesbackbtn = document.querySelectorAll(".main-pages .back");
let thoughts = document.querySelector(".thought h1");
// todopage
let todoform = document.querySelector(".todo-form");
let todoinput = document.querySelector(".todo-area .addtask form input");
let todotext = document.querySelector(".todo-area .addtask form textarea");
let dlttask = document.querySelector(".todo-area .deletetask");

allcards.forEach(function (elem) {
  elem.addEventListener("click", function () {
    allpages[elem.id].style.display = "block";
  });
});

allpagesbackbtn.forEach(function (back) {
  back.addEventListener("click", () => {
    allpages[back.id].style.display = "none";
  });
});

// todopage

var currenttask = JSON.parse(localStorage.getItem("currenttask")) || [];

window.addEventListener("DOMContentLoaded", () => {
  rendertask();
});

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  currenttask.push({
    task: todoinput.value,
    detail: todotext.value,
  });

  localStorage.setItem("currenttask", JSON.stringify(currenttask));
  rendertask();

  todoform.reset();
});

function rendertask() {
  dlttask.innerHTML = "";
  currenttask.forEach(function (task, index) {
    const div = document.createElement("div");
    div.classList.add("tasklists");
    div.innerHTML = `
    <details>
    <summary>
    <h5>${task.task}</h5>
    </summary>
    <p>${task.detail}</p></details>
   
    <button data-index="${index}">Mark's as Complete</button>
    `;

    dlttask.appendChild(div);
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".todo-area .deletetask .tasklists button");

  if (btn) {
    let clickedIndex = Number(btn.dataset.index);
    currenttask.splice(clickedIndex, 1);

    // update localStorage
    localStorage.setItem("currenttask", JSON.stringify(currenttask));

    // re-render UI
    rendertask();
  }
});
fetch("https://dummyjson.com/quotes/random")
  .then((res) => res.json())

  .then((data) => {
    thoughts.textContent = data.quote;
  });
let weekform = document.querySelector(".weekly-table");
var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function weekcard() {
  weekdays.forEach((name) => {
    let dayname = document.createElement("div");
    dayname.classList.add("week-days");
    let weekname = document.createElement("div");
    weekname.classList.add("week-name");
    let heading = document.createElement("h2");
    heading.innerText = name;
    weekname.appendChild(heading);

    let textfiels = document.createElement("div");
    textfiels.innerHTML = `
    <textarea name="" id="" placeholder="Enter weekly goal...." rows="2" cols="19"></textarea>
  
    `;

   dayname.appendChild(weekname);
   dayname.appendChild(textfiels);
   weekform.appendChild(dayname)
  });
}

weekcard();
