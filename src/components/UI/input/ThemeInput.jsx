import React from 'react';
import classes from './NoteInput.module.css';
const ThemeInput = React.forwardRef((props, ref) => {
    return ( 
        <div className={classes.noteInp}>
            <input ref={ref} className={classes.Inp} {...props}/>
        </div>
     );
})
 
export default ThemeInput;