import React  from 'react';
import { useEffect, useState } from "react";

export default function Editbox(props) {
    const [inputText, setInputText] = useState(props.task ? props.task.name : "");

    useEffect(() => {
        setInputText(props.task ? props.task.name : "")
    },[props.task])
    
    return (
        <>
            <div className={'overlay-section ' + (props.isVisible ? "show" : "" )} onClick={props.hideEditBox}></div>
            <div className={(props.isVisible ? "show " : "") + "modal fade"} tabIndex={-1} role='dialog' id='taskModal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title'>{props.task ? "Edit selected task" : "Add a new task"}</h4>
                            <button type='button' className='close' data-dismiss='modal' aria-label='close' onClick={props.hideEditBox}>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <input type="text" placeholder={inputText} value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className="add-btn" onClick={(e) => props.Func(props.task.id, inputText)}>{props.task ? "Edit" : "Add"}</button>
                            <button type="button" className="cancel-btn" onClick={(props.hideEditBox)} data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
