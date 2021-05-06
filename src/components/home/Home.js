import React from 'react';
import styled from "styled-components";
import {Button} from "react-bootstrap";

const Home = (props) => {

    const {boards, setBoards, user} = props;

    const StyledDeleteButton = styled.button`
    color:${(props)=> props.username == 'honh' ? "blue" : "red"} 
    `;
    const StyledAddButton = styled(StyledDeleteButton)`
      color:${(props)=> props.username == 'honh' ? "blue" : "red"};
      background-color: green;
    `;



    return (
        <div>
            <Button variant="primary">Primary</Button>{' '}

            <StyledAddButton>더하기</StyledAddButton>
            <StyledDeleteButton user={user} onClick={()=> setBoards([])}>
                전체삭제
            </StyledDeleteButton>
            {boards.map((boards) =>(<h3 key={boards.id}>
                제목:{boards.title} 내용:{boards.content}
            </h3>
            ))}
        </div>
    );
};

export default Home;