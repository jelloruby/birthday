import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapAudio = styled.div`
    display: flex;
    height: 580px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center
`

const Title = styled.p`
    color: red;
    font-weight: bold;
    font-size: 25px;
    margin: 4px;
`

function BirthDay() {
    const [isPlay, setIsPlay] = useState(false);
    const audio = useRef();

    const onPlay = () => {
        setIsPlay(true);
        audio.current.style.display = "none"
    }

    return (
        <>
            <WrapAudio ref={audio}>
                <h1 style={{ fontSize: '55px', color: 'rgb(255, 0, 0)' }}>Start Music!</h1>
                <h2 style={{ fontSize: '33px' }}>주의!</h2>
                <div style={{ fontSize: '22px' }}>핸드폰 소리가 켜져있는지 확인하고,<br/>아래의 재생버튼을 클릭해줘 !</div>
                <br/><br/>
                <audio src="hbd.mp3" controls onPlay={onPlay}></audio>
                <br/><br/>
            </WrapAudio>
            {
                isPlay &&
                <WrapAudio>
                    <h1 style={{ fontSize: '40px' }}>축하공연 TIME</h1>
                    <Title className="side_title">🎉수현아 !!🎉</Title>
                    <img src="hbd.gif" style={{ width: '100%', margin: '15px 0' }}></img>
                    <Title>🎉생일 축하한다아악 !!!🎉</Title>
                    <br/><br/>
                    <Link to="/gift">
                        <button danger type="primary">유노윤호처럼 공연을 열정적으로 <br/>즐긴 후에 클릭해주삼 ^-^</button>
                    </Link>
                </WrapAudio>
            }

        </>
    )
}

export default BirthDay
