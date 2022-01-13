import React, { Component, useContext } from 'react';
import { FirstName } from '../App';

const ComB = () => {
    const fname=useContext(FirstName)
    return ( 
        <span>{fname}</span>

     );
}
 
export default ComB;