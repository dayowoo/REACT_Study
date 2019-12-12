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

// function WorldClock(props) {
//   return (
//     //컴포넌트 약속: 맨 최상단의 하나의 "열고닫음" 만 있다.
//     <div className="WorldClock">
//       <h2 >
//         <span role="img" aria-label="Earth Emoji">
//           🌏
//         </span>{" "}
//         {props.city}
//       </h2>
//       <p>
//         <span role="img" aria-label="Clock Emoji">
//           ⏰
//         </span>{" "}
//         {props.time}
//       </p>
//     </div>
//   )
// }

// 요구사항 1. 시간과 분이 변화하는 것을 보고 싶다.
// 요구사항 2. 동적으로 보고싶다. =>props는 못하는 것

class WorldClock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      day: this.props.day,
      hour: this.props.hour,
      minute: 0
    }
    //this.setState : state 변경
    // 절대 안됨!! this.state.minute +=1; ->변화 감지를 못하기 때문 ->새로운거를 덮어씌워서 뭐가 변했는지 확실히 알게 함.
    setInterval( ()=>{
      this.setState((state)=>(
          state.hour === 23 && state.minute === 59
          ?{day: state.day+1, hour: 0, minute:0}
          :(state.minute ===59
            ?{hour: state.hour+1, minute:0}
            :{minute: state.minute+1})
    ))
    },100)
  }
  // render 미리 약속된 함수
  render() {
    return (
      <div className={"WorldClock"}>
        <h2>
          <span role="img" aria-label="Earth Emoji">
            🌏
          </span>{" "}
          {this.props.city}
        </h2>
        <p>
          <span role="img" aria-label="Clock Emoji">
            ⏰
          </span>{" "}
          {this.state.day}일 {this.state.hour}시 {this.state.minute}분
        </p>
      </div>
    )
  }
}

function App() {
  // 반복되는 코드 따로 빼서 배열로 만듦
  const cityTimeData = [
    ['서울', 0, 10],
    ['베이징', 0, 9],
    ['시드니', 0, 12],
    ['LA', 0, 17],
    ['부산', 0, 10],
  ]

  const WorldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city= {citytime[0]} day={citytime[1]} hour={citytime[2]} key={index}/>
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

// component export(수출) ->index.js 에서 수입
// default : 이 파일은 default(기본적으로, 하나만) export 하겠다
export default App;










///////////////////

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


