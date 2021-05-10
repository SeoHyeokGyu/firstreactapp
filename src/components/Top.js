import React from 'react';
import '../App.css';

const Top = (props) => {


    const {number} = props;

    return (
        <div className='sub_container'>
            Top
            번호:{number}
        </div>
    );
};

export default Top;