import React, { useState } from "react";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {

const [myNotes, setMyNotes] = useState(notes);

const myKey = myNotes.length;

return (
  <div>
    <CreateArea createNote={setMyNotes} currentKey={myKey} showNotes={myNotes}/>
    {myNotes.map(noteItem => (
      <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
    ))}
  </div>
)
};

export default App;