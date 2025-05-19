import { useContext, useEffect, useState } from "react";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";
import { BoardContext } from "../context/BoardContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
    
    const {boardList, setBoardList} = useContext(BoardContext);

    const [post, setPost] = useState({title: '', author: '', content: ''});

    const {id} = useParams();
    
    const navigate = useNavigate();
    
    const getIdPost = async () => {
        const response = await axios(`http://localhost:10000/api/board/${id}`);
        setPost(response.data.data[0]);
        // console.log(response.data.data[0]);
    }

    //1. 게시글을 가져와서 출력하기
    useEffect(() => {
        getIdPost();
        // const currentPost = boardList.find((item) => item.id === parseInt(id));

        // if(currentPost){
        //     setPost(currentPost);
        // } else{
        //     console.error('게시글을 찾을 수 없습니다.');
        // }
    },[id,boardList]);

    
    

    //input필드에 작성한 내용을 state에 저장
    const onChange = (e) => {
        const {value, name} = e.target;
        // console.log('입력됨:', name, value);
        // console.log("현재 상태", post);
        setPost((prevPost) => ({
            ...prevPost,
            [name]:value,
        }))
    }

    // const putPost = async () => {
    //     const currentPost = {
    //         title:post.title,
    //         author:post.author,
    //         content:post.content
    //     }

    //     const response = await axios({
    //         url: `http://localhost:10000/api/board/${id}`,
    //         method: "PUT",
    //         data: currentPost,
    //         headers: {
    //             "Content-Type":"application/json"
    //         }
    //     })
    //     setPost(response.data.data[0]);
    //     console.log(response.data.data[0]);
    // }

    //2. 수정한 게시글을 게시글 목록에 반영하기
    //3. 게시판 목록으로 가기
    const updatePost = async() => {
        // putPost();
        // setBoardList((prevList) => prevList.map((item) => item.id === parseInt(id) ? {...item,...post} : item));
        // const currentPost = {
        //     title:post.title,
        //     author:post.author,
        //     content:post.content
        // }

        await axios({
            url: `http://localhost:10000/api/board/${id}`,
            method: "PUT",
            data: post,
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then(response => {
            if(response.status===200)
                // setPost(response.data.data[0]);
                // console.log(response.data.data[0]);
                alert("수정 완료되었습니다.")
                navigate(`/post/${id}`)
        })
        
    }

    const CancelButton = () => {
        navigate(`/post/${id}`)
    }

    return(
        <div>
            <h1>글 수정하기</h1>
            <form>
                <CustomInput label="제목" value={post.title} name="title" onChange={onChange}/>
                <CustomInput label="작성자" value={post.author} name="author" onChange={onChange}/>
                <CustomInput label="내용" multiline rows={6} value={post.content} name="content" onChange={onChange}/>
                <div>
                    <CustomButton label="수정 완료" onClick={updatePost}/>
                    <CustomButton label="취소" variant="outlined" color="secondary" onClick={CancelButton}/>
                </div>
            </form>
        </div>
    )
}

export default EditPost;