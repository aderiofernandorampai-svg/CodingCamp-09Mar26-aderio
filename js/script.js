// ======================
// GREETING + CLOCK
// ======================

function updateTime(){

const now = new Date();

const hour = now.getHours();

let greet = "Selamat Malam";

if(hour < 12) greet = "Selamat Pagi";
else if(hour < 15) greet = "Selamat Siang";
else if(hour < 18) greet = "Selamat Sore";

document.getElementById("greeting").innerText = greet;

document.getElementById("clock").innerText =
now.toLocaleTimeString("id-ID");

}

setInterval(updateTime,1000);

updateTime();


// ======================
// TIMER
// ======================

let time = 1500;
let timer;

function updateTimer(){

let minutes = Math.floor(time/60);
let seconds = time%60;

document.getElementById("timer").innerText =
minutes + ":" + (seconds<10?"0":"") + seconds;

}

function startTimer(){

timer = setInterval(function(){

if(time<=0){
clearInterval(timer);
alert("Waktu fokus selesai!");
return;
}

time--;
updateTimer();

},1000);

}

function stopTimer(){

clearInterval(timer);

}

function resetTimer(){

clearInterval(timer);

time = 1500;

updateTimer();

}


// ======================
// TODO LIST
// ======================

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function renderTasks(){

let list = document.getElementById("taskList");

list.innerHTML="";

tasks.forEach(function(task,index){

let li = document.createElement("li");

li.innerHTML =
task +
" <button onclick='deleteTask("+index+")'>X</button>";

list.appendChild(li);

});

}

function addTask(){

let input = document.getElementById("taskInput");

let value = input.value.trim();

if(value==="") return;

tasks.push(value);

input.value="";

saveTasks();

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

renderTasks();


// ======================
// QUICK LINKS
// ======================

function openLink(url){

window.open(url);

}


// ======================
// DARK MODE
// ======================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark");

});

updateTimer();