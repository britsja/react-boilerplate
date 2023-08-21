import React from "react";

function Note(props) {

    function handleClick(event) {
        const targetTitle = event.target.name;        
        props.deleteNote(prevValue => {            
            return prevValue.filter((item) => {                
                return item.title !== targetTitle;
            })
        })
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button name={props.title} onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default Note;