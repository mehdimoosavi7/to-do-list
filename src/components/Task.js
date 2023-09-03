import React  from 'react';
export default function Task(props) {
  return (
    <>
      <div className="task">
        <span className='task-name'>{props.name}</span>
        <input type="checkbox" className="task-check" checked={props.state} onChange={props.checkFunc}/>
        <span className="edt-task" onClick={props.editFunc}>Edit</span>
        <span className="rmv-task" onClick={props.deleteFunc}>
          Delete
        </span>
      </div>
    </>
  );
}


