import { useEffect, useState } from "react"

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if(!response.ok){
                    throw new Error("데이터를 불러오는데 실패했습니다.")
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

    if(loading){
        return <p>“Loading posts…”</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}