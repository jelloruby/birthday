import React from 'react'
import Routes from './route/route'
import styled from 'styled-components';

const AppLayOut = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #CAC531;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #F3F9A7, #CAC531);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #F3F9A7, #CAC531); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

function App() {
  return (
    <AppLayOut>
      <Routes />
    </AppLayOut>
  );
}

export default App;
