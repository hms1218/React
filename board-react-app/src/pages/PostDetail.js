import { useState,useEffect,useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import { useParams,useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import axios from "axios";

const PostDetail = () => {

    const [item, setItem] = useState({});

    const {boardList, setBoardList} = useContext(BoardContext);

    const {id} = useParams();

    const navigate = useNavigate();

    const getIdPost = async () => {
        const response = await axios(`http://localhost:10000/api/board/${id}`);
        setItem(response.data.data[0]);
        // console.log(response.data.data[0]);
    }

    useEffect(() => {
        //게시글 배열에서, 넘어온 id와 일치하는 게시글을 한 건 찾아서 변수에 담는다.
        // const post = boardList.find((item) => item.id === parseInt(id));
        getIdPost();
        // if(post){
        //     setItem(post);
        // } else{
        //     console.error('게시글을 찾을 수 없습니다.');
        // }
    },[id]);

    // useEffect(() => {
    //     setItem(boardList[id-1])
    // },[])

    const moveToEdit = () => {
        navigate(`/edit/${id}`)
    }

    //게시글 삭제
    const handleDelete = async () => {
        if(window.confirm("게시글을 삭제하시겠습니까?")){
            //게시글 한 건 삭제
            await axios.delete(`http://localhost:10000/api/board/${id}`)
            
            //삭제되었습니다 alert창 띄우기
            .then(response => {
                if(response.data){
                    alert("삭제되었습니다");
                }
                else{
                    alert("삭제 실패.")
                }
            })
            navigate("/");
        }
        // setBoardList((prevList) => prevList.filter((post) => post.id !== parseInt(id)));
    }

    const moveToBoard = () => {
        navigate("/")
    }

    //id를 통해 boardList에 들어있는 게시글 한건을 꺼내서
    //화면에 출력하기
    //useEffect() 사용하기

    return(
        <div>
            <h2 className="board-detail-title">{item.title}</h2>
            <div className="board-detail-info">
                <h5>작성자 : {item.author}</h5>
                <p style={{fontSize:"12px", color:"gray"}}>{item.writingTime}</p>
            </div>
            <hr/>
                <p className="board-detail-body">{item.content}</p>
            <hr/>
            <div>
                <CustomButton label="수정" onClick={moveToEdit}/>
                <CustomButton label="삭제" color="secondary" onClick={handleDelete}/>
                <CustomButton label="목록으로" variant="outlined" onClick={moveToBoard}/>
            </div>
        </div>
    )
}

export default PostDetail;