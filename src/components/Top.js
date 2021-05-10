import React from 'react';
import '../App.css';
import {useSelector} from "react-redux";
import store from "../store";

const Top = () => {

    const number = useSelector((store)=> store.number)

    return (
        <div className='sub_container'>
            Top
            번호:{number}
        </div>
    );
};

export default Top;