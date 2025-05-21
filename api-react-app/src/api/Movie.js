import { useState } from "react";
import axios from "axios";

function MovieApi(){

    const [movies, setMovies] = useState([]);
    const [targetDt, setTargetDt] = useState('');
    const [loading, setLoading] = useState(false); //로딩상태
    const [error, setError] = useState(null); //에러상태

    //일별 박스오피스 순위, 영화제목, 영화개봉일, 해당일의 매출액
    //순위 : rank , 영화제목 : moiveNm , 영화개봉일 : openDt , 해당일의 매출액 : salesAmt
    //targetDt	문자열(필수)	조회하고자 하는 날짜를 yyyymmdd 형식으로 입력합니다.

    const searchMovie = async () => {
        setLoading(true);
        setError(null);

        const key = process.env.REACT_APP_MOVIE_KEY;

        try {
            const response = await axios({
                url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
                method: "GET",
                params: {
                    key : key,
                    targetDt : targetDt
                }
            })
            setMovies(response.data.boxOfficeResult.dailyBoxOfficeList)
            console.log(response.data.boxOfficeResult.dailyBoxOfficeList)
        } catch (error) {
            setError("영화 검색에 실패했습니다.")
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchMovie();
    }

    return(
        <div>
            <h1>영화 정보</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={targetDt}
                    onChange={(e) => setTargetDt(e.target.value)}
                    placeholder="날짜를 입력하세요"
                />
                <button type="submit">검색</button>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.rnum} style={{listStyle:"none"}}>
                        <h2> 영화 제목 : {movie.movieNm}</h2>
                        <p> 순위 : {movie.rank}</p>
                        <p> 영화 개봉일 : {movie.openDt} </p>
                        <p> 해당일의 매출액 : {movie.salesAmt ? `${Number(movie.salesAmt).toLocaleString()}원` : `가격정보 없음`}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieApi;