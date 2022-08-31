function Form(props) {

    const noteCreateHandler = (event) => {
        event.preventDefault();
        if (props.title) {
            const newNote = {
                id: Date.now(),
                title: props.title,
                isComplete: false
            }

            props.setNotes([newNote, ...props.notes])
            props.setTitle('')
        }
        else {
            alert('You have entered empty title')
        }
    }

    const updateHandler = (event) => {
        event.preventDefault()
        // setNotes()
        if (props.title) {
            const newNotesArray = props.notes.map((note) => {
                if (note.id === props.editableNote.id) {
                    note.title = props.title
                }
                return note
            })

            props.setNotes(newNotesArray);
            props.setEditMode(false)
            props.setEditableNote(null)
            props.setTitle('')
        } else {
            alert('You are non-focused')
        }
    }
    return (
        <div>
            <form onSubmit={(event) => props.editMode ? updateHandler(event) : noteCreateHandler(event)}>
                <input onChange={(event) => props.setTitle(event.target.value)} type="text" value={props.title} placeholder='Enter a valid note title' />
                <button type="submit">{props.editMode ? 'Update Note' : 'Add Note'}</button>
            </form>
            
        </div>
    )
}

export default Form