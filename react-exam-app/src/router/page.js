import { Link, Outlet, useParams } from "react-router-dom"

export const Home = () => {
    return(
        <div>
            <h1>홈 화면입니다.</h1>
        </div>
    )
}

export const About = () => {
    return(
        <div>
            <h1>설명 화면입니다.</h1>
        </div>
    )
}

export const Users = () => {
    //동적 라우팅으로 넘어오는 값을 받는법
    //localhose:3000/users/1
    const {id} = useParams();
    return <div> 사용자 ID : {id}</div>
}

export const DashBoard = () => {
    return(
        <div>
            <h1>대시보드</h1>
            <Link to="overview">개요</Link>
            {' | '}
            <Link to="settings">설정</Link>
            <hr />
            <Outlet />{/* 자식 라우트 컴포넌트가 렌더링되는 자리 */}
        </div>
    )
}

export const Settings = () => {
    return(
        <div>
            <h1>개요 화면입니다.</h1>
        </div>
    )
}

export const Overview = () => {
    return(
        <div>
            <h1>설정 화면입니다.</h1>
        </div>
    )
}