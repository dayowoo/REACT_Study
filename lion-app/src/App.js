import React from 'react';
import logo from './logo.svg';
import './App.css';

// component
// const myStyle = {
//   color: 'red',
//   fontWeight: 700,
// }


// JSX -> HTML 태그 작성 가능
// JSX -> style을 통해서 css (jsx)
// JSX -> className을 통해 css (css->App.css)

function WorldClock(props) {
  return (
    //컴포넌트 약속: 맨 최상단의 하나의 "열고닫음" 만 있다.
    <div class={"WorldClock"}>
      <h2>🌍도시: {props.city}</h2>
      <p>⏰시간: {props.time}시</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* style={{color: 'red'}} */}
      {/* <h1 style={'myStyle'}*/}
      <h1 className={'myStyle'}>안녕하세요</h1>
      <div className={'post'}>
        다영의 첫번째 글
      </div>
      <WorldClock city={'서울'} time={10}/>
      <WorldClock city={'베이징'} time={9}/>
      <WorldClock city={'시드니'} time={12}/>
      <WorldClock city={'LA'} time={17}/> 
    </div>
  );
}

function App2() {
  return (
    <div className="App">
      <h1>안녕히 가세요</h1>
      <table>
        <tr><td>1</td></tr>
        <tr><td>2</td></tr>
      </table>
    </div>
  );
}

// component export(수출) ->index.js 에서 수입
// default : 이 파일은 default(기본적으로, 하나만) export 하겠다
export default App;
