import React from 'react';
import './QA.css'

const QA = () => {
    return (
        <div className='QA-section'>
            <h1 className='header-title'>Quastion & Answer Section</h1>
            <div>
                <h2>1.What is the different props vs state?</h2>
                <h4>Props are read only. Props can not modified.  But state can be modified usung this. setstate. <br />State can be change. State changes can be asynchronous. This is the main difference props and state.</h4>
            </div>
            <div>
                <h2>2.How useState works?</h2>
                <h4>UseState is a hook function. The function contain two state. First is current state and second <br /> is update state. When you pass the current state to this function and it returns a variable with the current state value  and <br /> another function to update this value. This is the main works usestate.</h4>
            </div>
        </div>
    );
};

export default QA;