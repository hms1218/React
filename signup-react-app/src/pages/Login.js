import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target); //submit된 form 데이터좀 가져와봐
        const username = data.get("username"); //username의 필드값 가져오기
        const password = data.get("password"); //password 필드값 가져오기

        //아이디, 비밀번호 출력(디버깅용)
        console.log("아이디 : ",username);
        console.log("비밀번호 : ",password);
    }

    return(
        <Container component="main" maxWidth="xs" style={{marginTop:"8%"}}>
            <Typography component="h1" variant="h5" textAlign="center" gutterBottom>
                로그인
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2} direction="column">
                    <Grid item xs = {12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="이메일 주소"
                            name="username"
                            autoComplete="username"
                        />
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="패스워드"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    {/* 제출 버튼 */}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                                로그인
                            </Button>
                    </Grid>
                    <Grid item>
                        <Link to="/signup" variant="body2">
                            계정이 없습니까? 여기서 가입하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Login;