import { useState } from "react";

export default function Editbox(props) {
    const [inputText, setInputText] = useState(props.task ? "" : "Add new task"); 
    // console.log(inputText);
    return (
        <div className={(props.isVisible ? "show " : "") + "editBox"} id="editBox">
            <input type="text" id="editTextBox" placeholder={inputText} value={props.task ? props.task.name : "Add new task"} onChange={(e) => {setInputText(e.target.value)}} />
            <button type="button" className="add-btn" id="addButton" onClick={props.Func}>{props.task ? "Edit" : "Add"}</button>
            <button type="button" className="cancel-btn" id="cancelButton" onClick={props.hideEditBox}>Cancel</button>
        </div>
    )
}
