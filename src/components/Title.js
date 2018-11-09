import React from 'react';

const Title = props =>
    <div>
        <h1>{props.title}</h1>
        <p>Długość listy: {props.number}</p>
    </div>
    
export default Title;