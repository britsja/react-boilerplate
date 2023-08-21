import React, { useState } from 'react';

function CreateArea(props) {
    
    const [inputValue, setInputValue] = useState({
        title: "",
        content: ""
    });

    function handleClick(event) {
        event.preventDefault();
        const title = event.target.form.title.value;
        const content = event.target.form.content.value;
        
        setInputValue({title: title, content: content});
       
        props.createNote((prevValue) => {            
            return [...prevValue, inputValue]
        })
        setInputValue("");
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setInputValue(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} value={inputValue.title} name="title" placeholder='Title' />
                <textarea onChange={handleChange} value={inputValue.content} name="content" placeholder='Take a note...' rows="3" />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;