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
    <div className="WorldClock">
      <h2>
        <span role="img" aria-label="Earth Emoji">
          🌏
        </span>{" "}
        {props.city}
      </h2>
      <p>
        <span role="img" aria-label="Clock Emoji">
          ⏰
        </span>{" "}
        {props.time}
      </p>
    </div>
  )
}

function App() {
  // 반복되는 코드 따로 빼서 배열로 만듦
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['LA', 17],
    ['부산', 10],
  ]

  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city= {citytime[0]} time={citytime[1]} key={index}/>
  )

  return (
    <div className="App">
      {/* style={{color: 'red'}} */}
      {/* <h1 style={'myStyle'}*/}
      <h1 className={'myStyle'}>Hello React</h1>
      <div className={'post'}>
        다영의 첫번째 글
      </div>
      {WorldClockList}
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
