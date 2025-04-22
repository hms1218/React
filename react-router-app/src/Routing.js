import {Routes, Route} from 'react-router-dom';
import {Dashboard, Overview, Settings} from './Pages';

export const Routing = () => {
    return(
        <div>
            {/* <Navbar/> */}
            {/* 라우팅 그룹 */}
            <Routes> 
                {/* 주소창에 path가 일치하면 컴포넌트를 렌더링한다. */}
                {/* <Route path="/" element={<Home />} /> */}
                {/*  동적 라우팅이 되는 원리
                : 리액트 라우터가 내부에서 정규표현식으로 변환을 한다.
                "/users/:userId/settings/:tab"
                /^users/([^/]+)/settings/([/^]+)$/ */}
                {/* <Route path="users/:id" element={<UserProfile />} /> */}
                {/* <Route path="/about" element={<About />} />
                <Route path="/posts/:postId" element={<PostDetail />} /> */}

                {/* /dashboard 이하의 모든 경로를 이 라우트가 잡아낸다.
                /dashboard/overview, /dashboard/settings 등 */}
                <Route path="/dashboard/*" element={<Dashboard />}>
                    <Route path="overview" element={<Overview />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </div>
    )
}