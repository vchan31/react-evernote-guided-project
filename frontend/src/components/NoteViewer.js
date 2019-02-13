import React, { Fragment } from 'react';

const NoteViewer = (props) => {
	const notes = props.allProps.notes
	// console.log("noteview props:", props)

	const selectedNoteId = props.allProps.selectedNote
	// console.log(selectedNoteId)
	const selectedNote = notes.find(function(note){return note.id ==selectedNoteId})
	// console.log(selectedNote)
  return (
    <Fragment>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button onClick={()=> props.handleEditClick()}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
