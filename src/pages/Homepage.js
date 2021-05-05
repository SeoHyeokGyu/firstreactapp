import React, {useEffect, useState} from 'react';
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/home/Home";

const Homepage = () => {

    const [boards,setBoards] = useState([]);
    const [user,setUser] = useState({});

    useEffect(()=>{

        let data = [
            {id:1,title:"제목1",content:"내용1"},
            {id:2,title:"제목2",content:"내용2"},
            {id:3,title:"제목3",content:"내용3"}
        ];

        setBoards([...data]);
        setUser({id:1,username:'honh'});
    },[])


    return (
        <div>
            <Header/>
            <Home boards={boards} setBoards={setBoards} user={user}/>
            <Footer/>
        </div>
    );
};

export default Homepage;