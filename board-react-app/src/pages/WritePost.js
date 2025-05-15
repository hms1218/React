import { useState, useContext} from "react";
import { BoardContext } from "../context/BoardContext";
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";
import { useNavigate } from "react-router-dom";

const WritePost = () => {

    const {boardList, setBoardList} = useContext(BoardContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const savePost = (e) => {
        e.preventDefault();
        const newPost = {
            id: boardList.length+1,
            title,
            author,
            writingTime : new Date().toISOString(),
            content
        }
        setBoardList([...boardList,newPost])
        alert("게시물이 등록되었습니다.")
        navigate("/");
    }

    const CancelButton = () => {
        navigate("/");
    }

    return(
        <div>
            <h1>글쓰기 페이지</h1>
            <form>
                <CustomInput label="제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <CustomInput label="작성자" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <CustomInput label="내용" multiline rows={6} value={content} onChange={(e) => setContent(e.target.value)}/>
                <div>
                    <CustomButton label="저장" onClick={savePost}/>
                    <CustomButton label="취소" variant="outlined" color="secondary" onClick={CancelButton}/>
                </div>
            </form>
        </div>
    )
}

export default WritePost;