import React  from 'react';
import { useEffect, useState } from "react";

import { Modal } from 'bootstrap';

export default function Editbox(props) {
    const [inputText, setInputText] = useState(props.task ? props.task.name : "");

    useEffect(() => {
        setInputText(props.task ? props.task.name : "")
    },[props.task])

    
    useEffect(() => {
        let editModal = new Modal(document.getElementById("taskModal"));
        if(!props.isVisible)
            return;
        editModal.show();
    },[props.isVisible])
    
    return (
        <>
            {/* <div className={'overlay-section ' + (props.isVisible ? "show" : "" )} onClick={props.hideEditBox}></div> */}
            <div className="modal fade" tabIndex={-1} role='dialog' id='taskModal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>{props.task ? "Edit selected task" : "Add a new task"}</h4>
                            <button type='button' className='close' data-bs-dismiss='modal' onClick={props.hideEditBox}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <input type="text" placeholder={inputText} value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className="add-btn" onClick={(e) => props.Func(props.task.id, inputText)} data-bs-dismiss="modal">{props.task ? "Edit" : "Add"}</button>
                            <button type="button" className="cancel-btn" data-bs-dismiss="modal" onClick={props.hideEditBox}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
