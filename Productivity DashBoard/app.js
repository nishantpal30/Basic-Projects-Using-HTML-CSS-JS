let allcards = document.querySelectorAll(".main-ele");
let allpages = document.querySelectorAll(".main-pages");
let allpagesbackbtn = document.querySelectorAll(".main-pages .back");
// todopage
let todoform = document.querySelector(".todo-form");
let todoinput = document.querySelector(".todo-area .addtask form input");
let todotext = document.querySelector(".todo-area .addtask form textarea")
let dlttask = document.querySelector(".todo-area .deletetask")
let tsklist = document.querySelector(".deletetask .tasklists");

allcards.forEach(function(elem){
    elem.addEventListener("click",function(){
allpages[elem.id].style.display="block";
    })
})

allpagesbackbtn.forEach(function(back){
    
    back.addEventListener("click" , ()=>{
        allpages[back.id].style.display="none";
    })
})

// todopage

let currenttask=[];
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    currenttask.push(
    {
        task:todoinput.value ,
        detail: todotext.value
    }
    
)
 rendertask();
// console.log(currenttask)
todoform.reset();
})

function rendertask(){
    dlttask.innerHTML = "";
currenttask.forEach(function(task)
    {
    const div = document.createElement("div");
    div.classList.add("tasklists");
    div.innerHTML=`
    <h5>${task.task}</h5>
    <button>Mark's as Complete</button>
    `;

    dlttask.appendChild(div);
    
});
}

tsklist.addEventListener("click",()=>{
    
    renderdetails();
})
function renderdetails(){
    // dlttask.innerHTML = "";
currenttask.forEach(function(task)
    {
    const div = document.createElement("div");
    div.classList.add("taskdetails");
    div.innerHTML=`
    <p>${task.detail}</p>
    `;

    dlttask.appendChild(div);
    
});
}

