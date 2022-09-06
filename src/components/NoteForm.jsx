import React, { useState } from 'react';
import NoteButton from './UI/button/NoteButton';
import NoteInput from './UI/input/NoteInput';
import ClearInpBtn from './UI/button/ClearInpBtn';
import ThemeInput from './UI/input/ThemeInput';
import classes from './style/NoteForm.module.css'

const NoteForm = ({create}) => {
    const [note, setNote] = useState({noteText:'', noteTheme:''});

    /*    also an empty note is created when click on 
          "save note" button if inputs are empty*/
          
    const addNewNote=(e)=>{
        e.preventDefault();      
        const newNote={
          ...note, id: Date.now()
        }
          create(newNote);
          setNote({noteText:'', noteTheme:''});
          
      }

      const clearInput=(d)=>{  
        d.preventDefault();
        setNote({noteText:'', noteTheme:''}); 
      }
      
    return ( 

        <form>
            <NoteInput 
              value={note.noteText}
              onChange={e=>setNote({...note, noteText:e.target.value})}
              type='text'  
              placeholder='type your text'
              maxLength='300'
              data-validate
              />

              <ThemeInput
              value={note.noteTheme}
              onChange={e=>setNote({...note, noteTheme:e.target.value})}
              type='text'  
              placeholder='type note theme'
              maxLength='20'
              data-validate
              />
        
            <div className={classes.noteBtns}>
                <NoteButton onClick={addNewNote}>
                  save note
                </NoteButton>
              <ClearInpBtn onClick={clearInput}>
                clear
                </ClearInpBtn>
            </div>
        </form>
     );
}
 
export default NoteForm;

