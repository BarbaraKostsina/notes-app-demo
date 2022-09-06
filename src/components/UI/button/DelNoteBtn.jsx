import React from 'react';
import classes from './DelNoteBtn.module.css';

const DelNoteBtn = ({children,...props}) => {
    return ( 
        <div className={classes.BtnDiv}>
            <button {...props} className={classes.delBtn}>
                {children}
            </button>
        </div>
     );
}
 
export default DelNoteBtn;