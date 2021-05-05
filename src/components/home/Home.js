import React from 'react';
import styled from "styled-components";

const Home = (props) => {

    const {boards, setBoards, user} = props;

    const StyledDeleteButton = styled.button`
    color:${(props)=> props.username == 'honh' ? "blue" : "red"} 
    `;


    return (
        <div>
            <h1>홈페이지 입니다.</h1>
            <StyledDeleteButton user={user} onClick={()=> setBoards([])}>
                전체삭제
            </StyledDeleteButton>
            {boards.map((boards) =>(<h3>
                제목:{boards.title}
            </h3>
            ))}
        </div>
    );
};

export default Home;