function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must enter something!");
  } else {
    let date = " Due: " + prompt("Enter a deadline for your task: ");
    inputBox.value += date;
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (clic) {
    if (clic.target.tagName === "LI") {
      clic.target.classList.toggle("checked");
      saveData();
    } else if (clic.target.tagName === "SPAN") {
      clic.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
