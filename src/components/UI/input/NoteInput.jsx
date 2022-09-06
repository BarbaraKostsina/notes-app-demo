
import classes from './NoteInput.module.css';
import React from 'react';

const NoteInput = React.forwardRef((props, ref) => {
    return ( 
        <div className={classes.noteInp}>
            <input ref={ref} className={classes.Inp} {...props}/>
        </div>
     );
})
 
export default NoteInput;