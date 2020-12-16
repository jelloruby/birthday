import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapHome = styled.div`
    display: flex;
    width: 300px;
    height: 540px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: white;
    box-shadow: 9px 8px 22px -10px rgba(0,0,0,0.60);
    -webkit-box-shadow: 9px 8px 22px -10px rgba(0,0,0,0.60);
    -moz-box-shadow: 9px 8px 22px -10px rgba(0,0,0,0.60);
`

function Home() {
    return (
        <WrapHome>
            <div>
                <img src="mini.png" style={{ width: '300px' }}/>
            </div>
            <br/>
            <h1>헬로! 마이 프렌드</h1>
            <div>아래의 버튼을</div>
            <br/><br/>
            <Link to="/birthday">
                <button>클릭해봐!</button>
            </Link>
        </WrapHome>
    )
}

export default Home
