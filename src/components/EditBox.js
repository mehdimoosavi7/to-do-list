import React  from 'react';
import { useEffect, useState } from "react";
import { Modal, Button } from 'bootstrap';

export default function Editbox(props) {
    const [inputText, setInputText] = useState(props.task ? props.task.name : "");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    useEffect(() => {
        setInputText(props.task ? props.task.name : "")
    },[props.task])
    
    return (
        <>
            {/* <div className={'overlay-section ' + (props.isVisible ? "show" : "" )} onClick={props.hideEditBox}></div> */}
            {/* <div className={(props.isVisible ? "show " : "") + "editBox"}>
                <h4 className='editBox-title'>{props.task ? "Edit selected task" : "Add a new task"}</h4>
                <div className='editbox-close' onClick={props.hideEditBox}>
                    <span>x</span>
                </div>
                <input type="text" placeholder={inputText} value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
                <div className='buttons'>
                    <button type="button" className="add-btn" onClick={(e) => props.Func(props.task.id, inputText)}>{props.task ? "Edit" : "Add"}</button>
                    <button type="button" className="cancel-btn" onClick={(props.hideEditBox)}>Cancel</button>
                </div>
            </div> */}

            <Modal show={show} onHide={handleClose} className={(props.isVisible ? "show " : "") + "editBox"}>
                <Modal.Header>
                    <Modal.Title>{props.task ? "Edit selected task" : "Add a new task"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder={inputText} value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="add-btn" onClick={(e) => props.Func(props.task.id, inputText)}>{props.task ? "Edit" : "Add"}</Button>
                    <Button variant="secondary" className="cancel-btn" onClick={(props.hideEditBox)}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
