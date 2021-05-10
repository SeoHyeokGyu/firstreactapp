import React, {useState} from 'react';
import styled from "styled-components";

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  
`;
const ListPage = () => {

    const [no,setNo] = useState(6);

    const [post,setPost] =  useState({
       id:no,
       title:'',
       content:''
    });



    const [posts, setPosts] = useState([
        {id:1,title:"title1",content:"content1"},
        {id:2,title:"title2",content:"content2"},
        {id:3,title:"title3",content:"content3"},
        {id:4,title:"title4",content:"content4"},
        {id:5,title:"title5",content:"content5"},
    ])

    const handleWrite = () => {
        let post = {id:6,title:"인풋값"};
        setPosts([...posts,post])
        setNo(no+1);

    }
    const handleChangeContent = (e) => {
        setPost({content:e.target.value});

    }
    const handleChangeTitle = (e) => {
        setPosts([...posts,post])
    }
    const handleForm = (e) => {
        setPost({...post,[e.target.name]: e.target.value});
    }

    return (
        <div>
            <h1>
                리스트 페이지
            </h1>

            <form>
                <input type="text" placeholder="제목"
                       value={post.title}
                       onChange={handleForm}
                       name="title"
                />
                <input type="text" placeholder="내용"
                       value={post.content}
                       onChange={handleForm}
                       name="content"
                />
                <button type="button" onClick={handleWrite}>글쓰기</button>
            </form>

            <hr/>
            {posts.map((post) => <StyledItemBoxDiv>
                <div>
                번호 : {post.id}
                제목 : {post.title}
                    내용 : {post.content}
                </div>
                <button>삭제
                </button>
                </StyledItemBoxDiv>
            )}

        </div>
    );
};

export default ListPage;