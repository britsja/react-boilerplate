import React from "react";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
return (
  <div>
    <CreateArea />
    {notes.map(noteItem => (
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