export default function Editbox(props) {
    return (
        <div className="editBox" id="editBox">
            <input type="text" id="editTextBox" placeholder={props.text} />
            <button type="button" className="add-btn" id="addButton" onClick={props.Func}>{props.action}</button>
            <button type="button" className="cancel-btn" id="cancelButton" onClick={hideEditBox}>Cancel</button>
        </div>
    )
}

function hideEditBox(){
    document.getElementById("editBox").classList.remove("show");
}