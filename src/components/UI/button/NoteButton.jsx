import React, { Children } from 'react';
import classes from './NoteButton.module.css';

const NoteButton = ({children, ...props}) => {
    return (  
  
            <button {...props} className={classes.saveBtn}>
                {children}
            </button>
 
    );
}
 
export default NoteButton;