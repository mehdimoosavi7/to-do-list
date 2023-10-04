import React  from 'react';
import "./App.scss";
import { useState } from "react";
import Search from "./components/Search";
import Task from "./components/Task";
import Editbox from "./components/EditBox";

function App() {
  let [editBoxState, setEditBoxState] = useState({isVisible: false, editId: undefined});
  
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
  
  const [value, setValue] = useState('');

  const showEditBox = (id) => {
    setEditBoxState({isVisible: true, editId: id});
  };

  function hideEditBox(){
    setEditBoxState({isVisible: false, id: undefined})
  } 
  
  const addTask = (i,name) => {
    var id = tasks.length + 1;
    var done = false;
    setTasks((arr) => [...arr, {id, name, done}]);
    setEditBoxState({isVisible: false})
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
  
  const updateTask = (id,name) => {
    const renamedTasks = tasks.map(task => {
      if(task.id === id) {
        task.name = name
      }
      return task
    })
    setTasks(renamedTasks);
    setEditBoxState({isVisible: false})
  };

  return (
    <div className="App">
      <div className="container">
        <div className='row'>
          <h2 className='to-do-title'>To do list</h2>
        </div>
        <Editbox Func={tasks.find(t => t.id === editBoxState.editId) ? updateTask : addTask} hideEditBox={hideEditBox} isVisible={editBoxState.isVisible} task={tasks.find(t => t.id === editBoxState.editId) ? tasks[editBoxState.editId-1] : ""}/>
        <div className="row content">
          <div className="col-12 col-md-4">
            <div className='sidebar'>
              <Search value={value} func={(e) => setValue(e.target.value)} />
              <button className="add-btn" onClick={showEditBox} data-toggle="modal" data-target="#taskModal">
                Add a new task
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h4 className="title">In Progress Tasks</h4>
            <div className="tasks">
              {tasks.filter(item => {
                if(!value || item.name.includes(value)){
                  return true
                }
                return undefined
              }).map((i, v) =>
                !i.done && <Task key={i.id} name={i.name} deleteFunc={() => {removeTask(i.id)}} editFunc={() => {showEditBox(i.id, i.name)}} state={i.done ? true : false} checkFunc={() => {checkTask(i.id)}}/>
              )}
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h4 className="title">Done Tasks</h4>
            <div className="tasks">
              {tasks.filter(item => {
                if(!value || item.name.includes(value)){
                  return true
                }
                return undefined
              }).map((i, v) =>
                i.done && <Task key={i.id} name={i.name} deleteFunc={() => {removeTask(i.id)}} editFunc={() => {showEditBox(i.id,i.name)}} state={i.done ? true : false} checkFunc={() => {checkTask(i.id)}} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
