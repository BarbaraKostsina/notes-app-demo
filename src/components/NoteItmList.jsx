import React from 'react';
import NoteItem from './NoteItem';
import classes from './style/NoteItmList.module.css'

const NoteItmList = ({notes, del}) => {
    
    return ( 
  <div className={classes.Itm}>
      {notes.map((note, index)=>
           <NoteItem del={del} number={index + 1} note={note}  key={note.id}/>
      )}
  </div>
      
     );
}
 
export default NoteItmList;