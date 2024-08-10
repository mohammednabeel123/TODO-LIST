const addTask = document.getElementById("add-task");
const addTaskContainer = document.getElementById("add-task-container");
const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("task-container");

//event listener for the plus button

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkbtn = document.createElement("button");
  checkbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkbtn.classList.add("checkTask");
  task.appendChild(checkbtn);

  let deletebtn = document.createElement("button");
  deletebtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deletebtn.classList.add("deleteTask");
  task.appendChild(deletebtn);

  if (inputTask.value === "") {
    alert("please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkbtn.addEventListener("click", function () {
    if (li.style.textDecoration === "line-through") {
      // Undo line-through
      li.style.textDecoration = "none";
      li.style.color = "black"; // Adjust color as needed
    } else {
      // Apply line-through
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }
  });

  deletebtn.addEventListener("click", function (e) {
    task.remove();
  });
});
