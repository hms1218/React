import { useEffect, useState } from "react";

export const fetchExam = () => {
    const [posts, setPosts] = useState([]); //데이터를 저장할 상태
    const [loading, setLoading] = useState(true); //로딩 상태
    const [error, setError] = useState(null); //에러 상태

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if(!response.ok){
                    throw new error("데이터를 불러오기 실패 가시죠")
                }
            })
    },[])
}