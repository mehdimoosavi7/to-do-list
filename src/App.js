import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Task from "./components/Task";
import Editbox from "./components/EditBox";

function App() {
  let [editBoxState, setEditBoxState] = useState({isVisible: false, id: undefined});
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "task1",
      done: false,
    },
    {
      id: 2,
      name: "task2",
      done: true,
    },
    {
      id: 3,
      name: "task3",
      done: true,
    },
    {
      id: 4,
      name: "task4",
      done: false,
    },
  ]);

  const showEditBox = (id) => {
    //document.getElementById("editBox").classList.add("show");
    setEditBoxState({isVisible: true, id: id});
  };
  
  const addTask = (newTask) => {
    var name = document.getElementById("editTextBox").value;
    var id = tasks.length + 1;
    var done = false;
    setTasks((arr) => [...arr, {id, name, done}]);
  };
  
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  
  const checkTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) task.done = !task.done
      return task
    })
    setTasks(updatedTasks);
  };
  
  const editTask = (id,name) => {
    document.getElementById("editTextBox").value = name;
    document.getElementById("addButton").innerText = "Edit";
    Editbox.Func = {updateTask};
    document.getElementById("editBox").classList.add("show");
  };
  
  const updateTask = (id) => {
    // console.log("mej");
    // var name = document.getElementById("editTextBox").value;
    // const renamedTasks = tasks.map(task => {
    //   if(task.id === id) task.name = name
    //   return task
    // })
    // setTasks(renamedTasks);
  };

  const searchTask = () => {
    var searchText = document.getElementById("searchText").value;
    const filteredTasks = tasks.filter((task) => {
      // task.name.match(searchText)
      return Object.values(task).join('').toLowerCase().includes(searchText.toLowerCase())
  })
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Editbox action={"Add Task"} text={"Add"} Func={addTask} isVisible={editBox.isVisible} id={editbox.id}/>
        </div>
        <div className="row">
          <div className="col-4">
            <div>
              <Search func={searchTask} />
              <button className="add-btn" id="addButton" onClick={showEditBox}>
                Add a new task
              </button>
            </div>
          </div>
          <div className="col-4">
            <h4 className="title">In Progress Tasks</h4>
            <div className="tasks">
              {tasks.map((i, v) =>
                !i.done && <Task key={i.id} name={i.name} done={i.done} deleteFunc={() => {removeTask(i.id)}} editFunc={() => {editTask(i.id,i.name)}} state={i.done ? true : false} checkFunc={() => {checkTask(i.id)}}/>
              )}
            </div>
          </div>
          <div className="col-4">
            <h4 className="title">Done Tasks</h4>
            <div className="tasks">
              {tasks.map((i, v) =>
                i.done && <Task key={i.id} name={i.name} done={i.done} deleteFunc={() => {removeTask(i.id)}} editFunc={() => {editTask(i.id,i.name)}} state={i.done ? true : false} checkFunc={() => {checkTask(i.id)}} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;