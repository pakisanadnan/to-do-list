function addTask() {
    var input = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (input.value !== "") {
      var taskItem = document.createElement("li");
      taskItem.textContent = input.value;
  
      taskItem.onclick = function() {
        this.classList.toggle("completed");
      };
  
      taskList.appendChild(taskItem);
      input.value = "";
    }
  }