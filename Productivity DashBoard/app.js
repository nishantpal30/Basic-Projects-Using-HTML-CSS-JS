let allcards = document.querySelectorAll(".main-ele");
let allpages = document.querySelectorAll(".main-pages");
let allpagesbackbtn = document.querySelectorAll(".main-pages .back");
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
  currenttask.forEach(function (task , index) {
    const div = document.createElement("div");
    div.classList.add("tasklists");
    div.innerHTML = `
    <details>
    <summary>
    <h5>${task.task}</h5>
    </summary>
    <p>${task.detail}</p></details>
   
    <button data-index="${index}">Mark's as Complete</button>
    `
   
    ;

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
}
);

