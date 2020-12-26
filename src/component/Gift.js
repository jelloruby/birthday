import React from 'react'
import styled from 'styled-components';

const WrapLetter = styled.div`
    display: flex;
    width: 300px;
    height: 510px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: white;
    box-shadow: 9px 8px 22px -10px rgba(0,0,0,0.60);
    -webkit-box-shadow: 9px 8px 22px -10px rgba(0,0,0,0.60);
    -moz-box-shadow: 9px 8px 22px -10px rgba(0,0,0,0.60);
`

function Gift() {
    return (
        <WrapLetter>
            <p>앞선 축하공연은 잘 보셨는지yo ...</p>
            <p>특별히 섭외 하였습니다.</p>
            <p><strong style={{ fontSize: '20px' }}>Only For You ,,,</strong></p>
            <p>This is <strong style={{ fontSize: '20px' }}>당신을 위한 Gift😜</strong></p>
            <p>이제 마지막 선물이 남았어요.</p>
            <p>and 이거슨 마지막페이지입니다.</p>
            <p>아쉬워도 어쩔 수 없습니다.</p>
            <p>안녕히 가세요 ^^</p>
            <p><strong style={{ fontSize: '20px' }}>아래의 버튼</strong> 꼭 클릭해주시구요.</p>
            <p>그럼 저도 20000 👋👋👋</p>
            <br/> 
            <button danger type="primary">
                <a href="https://m.oliveyoung.co.kr/m/common/partner.do?chlNo=10&chlDtlNo=2&isMsg=Y&redirectLinkUrl=order/getOrderPresentForm.do?ordNo=Y2012275730527&certKey=hkHdHbQuWO" target="_blank">🐣 삐약 🐣</a>
            </button>
        </WrapLetter>
    )
}

export default Gift
