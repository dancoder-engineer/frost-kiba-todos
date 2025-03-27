let src = null
let nextTask = 5

function dragstartHandler(ev) {
    src = ev.srcElement
  }

  function dragoverHandler(ev){
    ev.preventDefault();
  }

  function dropHandler(ev, divName) {
    ev.preventDefault();
    box = document.querySelector(divName)
    box.appendChild(src)
    console.log(ev.target)
  }

  function addTask(){
    
    if(document.querySelector("#createInput").value){
      let newTask = document.querySelector("#task1").cloneNode(true)
      newTask.id = taskId="task" + nextTask
      nextTask++
      box = document.querySelector("#todo")
      newTask.innerHTML = '<img src="frostTower.png" draggable="false" class="taskPic">' + document.querySelector("#createInput").value
      document.querySelector("#createInput").value = ""
      box.appendChild(newTask)
    }
  }