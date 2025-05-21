import { useState } from "react";
import axios from "axios";

function BookSearch(){

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]); // 검색 결과로 얻은 책 목록
    const [loading, setLoading] = useState(false); //로딩상태
    const [error, setError] = useState(null); //에러상태

    //네이버 도서검색 API 호출하는 함수
    const searchBooks = async () => {
        setLoading(true);
        setError(null);

        const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_NAVER_CLIENT_SECRET;

        try {
            const response = await axios({
                url:'http://localhost:10000/api/books',
                method:"GET",
                params:{
                    query: query,
                },
                headers:{
                    'X-Naver-Client-Id' : clientId,
                    'X-Naver-Client-Secret' : clientSecret
                }
            });

            //검색결과를 books에 저장
            setBooks(response.data.items);
        } catch (error) {
            setError("도서 검색에 실패했습니다.")
        } finally{
            setLoading(false);
        }
    }



    const handleSearch = (e) => {
        e.preventDefault();
        searchBooks();
    }

    return(
        <div>
            <h1> 네이버 도서 검색 </h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="책 이름을 입력하세요"
                />
                <button type="submit">검색</button>
            </form>

            <ul>
                {books.map((book) => (
                    <li key={book.isbn}>
                        <img src={book.image} alt={book.title} />
                        <p> 제목 : {book.title} </p>
                        <p> 저자 : {book.author} </p>
                        <p> 출판사 : {book.publisher} </p>
                        <p> 가격 : {book.discount ? `${book.discount}원` : `가격정보 없음`} </p>
                        <a href={book.link}>더보기</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookSearch;