import { useState, useEffect } from "react";

export const Blog = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPost, setNewPost] = useState({title:'',body:''});

    //게시물 리스트 가져오기
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         axios.get("https://jsonplaceholder.typicode.com/posts")
    //             .then()
    //             .catch(err => setError(err.message))
    //             .finally(() => {
    //                 setLoading(false);
    //             })
    //     } 
    //     fetchPosts();
    // },[])

    useEffect(() => {
        const fetchBlog = async () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    if(!response.ok){
                        throw new Error("데이터를 불러오는데 실패했습니다.");
                    }
                    return response.json();
                })
                .then((data) => {
                    setPosts(data);
                })
                .catch((error) => {
                    setError(error.message)
                })
                .finally(() => {
                    setLoading(false);
                })
        }
        fetchBlog();
    },[])

    //게시물 추가
    //jsonPlaceholder에 추가를 요청한다고 해서 진짜로 추가되는것은 아님
    //state에 새 게시물을 추가하기
    const addPost = () => {

    }

    //게시글 삭제
    //필터링해서 다시 렌더링하기


    if(loading){
        return <h2>로 딩 중 . . . . . . </h2>
    }

    if(error){
        return <h2>에 러 발 생 : {error}</h2>
    }

    return(
        <div>
            <h1>블로그 게시물</h1>
            <h2>새 게시물 추가</h2>
            <input type='text' placeholder="제목" value={newPost.title} onChange={(e) => setNewPost({...newPost, title:e.target.value})}/>
            <textarea placeholder="내용" value={newPost.body} onChange={(e) => setNewPost({...newPost, body:e.target.value})}/>
            <button onClick={() => {}}>추가</button>
            {/* 게시물 리스트 */}
            <div>
                <h2>게시물 리스트</h2>
                {posts.map((post) => (
                    <div key={post.id} style={{border:'1px solid black', margin: '10px', padding:'10px'}}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => {}}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

//블로그 프로그램 만들기
//1. 게시물 리스트를 불러오는 기능
//2. 게시물 추가 기능
//3. 게시물 삭제 기능

//제목과 내용을 입력할 수 있는 입력필드 2개와 옆에 추가버튼
//입력필드 밑에는 게시물 리스트를 출력
//각각의 게시물은 삭제 버튼이 옆에 있어야한다.

// 추가하기 예제
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));