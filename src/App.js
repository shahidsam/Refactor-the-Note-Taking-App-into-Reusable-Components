import {useState} from 'react'
import './App.css';
import FORM from './components/Form'
import Note from './components/Note';

function App() {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="App">
      <FORM
        notes = {notes}
        setNotes = {setNotes}
        title = {title}
        setTitle = {setTitle}
        editableNote = {editableNote}
        setEditableNote = {setEditableNote}
        editMode = {editMode}
        setEditMode = {setEditMode}
      />
      <Note
        notes = {notes}
        setNotes = {setNotes}
        title = {title}
        setTitle = {setTitle}
        editableNote = {editableNote}
        setEditableNote = {setEditableNote}
        editMode = {editMode}
        setEditMode = {setEditMode}
      />
    </div>
  );
}

export default App;
