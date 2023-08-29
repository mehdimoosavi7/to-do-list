import { useEffect, useState } from "react";

export default function Editbox(props) {
    const [inputText, setInputText] = useState(props.task ? props.task.name : ""); 
    
    useEffect(() => {
        setInputText(props.task ? props.task.name : "")
        console.log("task: " + props.task)
    },[props.task])
    
    return (
        <div className={(props.isVisible ? "show " : "") + "editBox"} id="editBox">
            <input type="text" id="editTextBox" placeholder={inputText} value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
            <button type="button" className="add-btn" id="addButton" onClick={() => props.Func()}>{props.task ? "Edit" : "Add"}</button>
            <button type="button" className="cancel-btn" id="cancelButton" onClick={props.hideEditBox}>Cancel</button>
        </div>
    )
}
