import React from 'react';
import '../App.css';

const Bottom = (props) => {

    const {addNumber} = props;
    return (
        <div className='sub_container'>
            Bottom
            <button onClick={addNumber}>증가</button>
        </div>
    );
};

export default Bottom;