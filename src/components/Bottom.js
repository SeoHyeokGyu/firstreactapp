import React from 'react';
import '../App.css';
import {useDispatch} from "react-redux";
import {decrease, increase} from "../store";

const Bottom = () => {

    const dispatcher = useDispatch()
    return (
        <div className='sub_container'>
            Bottom
            <button onClick={() => dispatcher(increase())}>증가</button>
            <button onClick={() => dispatcher(decrease())}>감소</button>

        </div>
    );
};

export default Bottom;