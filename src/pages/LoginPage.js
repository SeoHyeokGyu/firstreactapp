import React from 'react';
import Login from "../components/Login";


const LoginPage = (props) => {
    const {history} = props;
    console.log(props.match.params.id)
    return (
        <div>

            <button onClick={()=>history.goBack()
            }>뒤로가기</button>
            <Login />
        </div>
    );
};

export default LoginPage;