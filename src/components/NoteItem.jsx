import React, { Children } from 'react';
import classes from './style/NoteItem.module.css';
import DelNoteBtn from './UI/button/DelNoteBtn';

const NoteItem = (props) => {

    return ( 
        <div className={classes.noteItm}>
                {props.number}.{props.note.noteText}
                <div className={classes.Theme}>
                    Theme:{props.note.noteTheme}
                </div>
                <DelNoteBtn onClick={()=>props.del(props.note)}>delete</DelNoteBtn>
        </div>
     );
}
 
export default NoteItem;