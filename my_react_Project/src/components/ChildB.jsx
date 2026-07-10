import React from 'react';
import ChildC from './ChildC';

const ChildB = (props) => {
    return (
        <div>
            <h1>Child B Component</h1>
            <p>Name: {props.name}</p>
            <ChildC name = {props.name} age={props.age} />
        </div>
    );
}   

export default ChildB;
