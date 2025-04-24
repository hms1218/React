import { useState, useEffect } from "react";

export const UserList = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // try {
            //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
            //     if(!response.ok){
            //         throw new Error("데이터를 불러오는데 실패했습니다.");
            //     }
            //     const data = await response.json();
            //     setPosts(data);
            // } catch (error) {
            //     setError(error.message);
            // } finally {
            //     setLoading(false);
            // }
            fetch("https://jsonplaceholder.typicode.com/users")
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

        fetchData();
    },[]);

    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => {
    //         if(!response.ok){
    //             throw new Error("데이터를 불러오는데 실패했습니다.");
    //         }
    //         return response.json();
    //     })
    //     .then((data) => {
    //         setPosts(data);
    //     })
    //     .catch((error) => {
    //         setError(error.message)
    //     })
    //     .finally(() => {
    //         setLoading(false);
    //     })

        if(loading){
            return <h2>로 딩 중 . . . . . . </h2>
        }

        if(error){
            return <h2>에 러 발 생 : {error}</h2>
        }

        return(
            <div>
                <h2>사용자 정보</h2>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            이름 : {post.name}{'   '}
                            이메일 : {post.email}
                        </li>
                    ))}
                </ul>
            </div>
        )
}



//fetch를 사용하여, 외부 api에서 데이터를 가져와 화면에 렌더링하는 프로그램 만들기

//외부 api를 호출하여 데이터를 가져온다.
//https://jsonplaceholder.typicode.com/users
//데이터를 가져오는 동안 로딩 상태를 표시한다.
//api 요청 실패 시, 에러 메시지를 표시해야한다.
//가져온 데이터를 화면에 목록 형태로 출력한다.
//사용자의 이름과 이메일 주소를 출력해주세요.