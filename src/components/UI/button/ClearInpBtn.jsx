import React from 'react';
import classes from './ClearInpBtn.module.css';
const ClearInpBtn = ({children,...props}) => {
    return ( 
        <button {...props} className={classes.delBtn}>
        {children}
        </button>
     );
}
 
export default ClearInpBtn;