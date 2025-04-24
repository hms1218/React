import { useState, useEffect } from "react";

export const FetchExam = () => {

    const [posts, setPosts] = useState([]); //데이터를 저장할 상태
    const [loading, setLoading] = useState(true); //로딩 상태
    const [error, setError] = useState(null); //에러 상태

    useEffect(() => {
        //비동기 함수를 작성
        const fetchData = async () => {
        //     try {
        //         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        //         //통신이 잘 됐는지 안됐는지의 결과에 따라 처리
        //         if(!response.ok){
        //             throw new Error("데이터를 불러오는데 실패했습니다.");
        //         }
        //         //100개의 게시물 데이터가 data로 들어가게 된다.
        //         const data = await response.json();
        //         setPosts(data);
        //     } catch (error) {
        //         setError(error.message); //에러 처리
        //     } finally {
        //         setLoading(false); //로딩 상태를 완료로 설정
        //     }
        // }

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
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
        }
        fetchData();
    },[])

    //로딩 중일 때 보여줄 내용
    if(loading){
        return <p>로딩 중.....</p>
    }

    //에러 발생 시 보여줄 내용
    if(error){
        return <p>에러발생 : {error}</p>
    }

    //데이터를 성공적으로 불러왔을 때 보여줄 내용
    return(
        <div>
            <h1>게시글 목록</h1>
            <ul>
                {posts.slice(0,10).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}


// useEffect()훅을 사용하여 컴포넌트가 렌더링 될 때 비동기 api요청을 수행하고 결과를 화면에 표시해보자

// - fetch api로 데이터 가져오기
// - JSONPlaceholder의 게시글 데이터를 가져오기
// - 데이터가 로딩 중일 때는 “로딩중…”이라는 메시지를 보여주고, 데이터가 도착하면 목록으로 표시한다.