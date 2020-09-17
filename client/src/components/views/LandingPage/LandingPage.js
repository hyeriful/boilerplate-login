import React, {useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

    useEffect(() => {
        axios.get('/api/hello') //proxy를 설정(setupProxy.js)해주었기 때문에 http://localhost:5000 생략가능
            .then(response => { console.log(response) })
    }, [])


    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
        .then(response => {
            if(response.data.success) {
                props.history.push("/login")    //react-router-dom의 withRouter을 써야 이거 사용가능
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
        })
    }

    return (
        <div style={{
            display:'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}> 
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
