import React from 'react';
// import logo from './logo.svg';
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
      minute: 0,
      stop: false,    //처음에 안멈춰있기 때문
    }
    console.log("  Child) 시작합니다.")
  }
  


  componentDidMount() {
    //this.setState : state 변경
    // 절대 안됨!! this.state.minute +=1; ->변화 감지를 못하기 때문 ->새로운거를 덮어씌워서 뭐가 변했는지 확실히 알게 함.
    this.timer = setInterval( ()=>{
      this.setState((state)=>(
          state.hour === 23 && state.minute === 59
          ?{day: state.day+1, hour: 0, minute:0}
          :(state.minute ===59
            ?{hour: state.hour+1, minute:0}
            :{minute: state.minute+1})
    ))
    },5000)
    console.log("  Child) 마운트 되었습니다.")
  }

  componentDidUpdate() {
    console.log("  Child) 업데이트!")
  }

  componentWillUnmount() {
    console.log("  Child) 언마운트!")
    clearInterval(this.timer)
  }

  handlingClik = (event) => {
    //event.target: 이벤트의 범위
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
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
          <div className={'button'}>
            <button value={true} onClick={this.handlingClik}>멈춰!</button>
          </div>
        </p>
        
      </div>
    )
  }
}


// 부모 Component
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.cityTimeData = [
      ['서울', 0, 10],
      ['베이징', 0, 9],
      ['시드니', 0, 12],
      ['LA', 0, 17],
      ['부산', 0, 10],
    ]
    this.state = {
      content: '',
      show: true,
    }
    console.log("Parent) 시작합니다.")
  }
  
  componentDidMount() {
    console.log("Parent) 마운트 되었습니다.")
  }

  componentDidUpdate() {
    console.log("Parent) 업데이트!")
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  handlingClik = (event) => {
    this.setState((prevState)=>({show: !prevState.show}))
  }

  render() {
    return (
      <div className="App">
        {/* style={{color: 'red'}} */}
        {/* <h1 style={'myStyle'}*/}
        <h1 className={'myStyle'}>Hello React</h1>
        <div className={'post'}>
          다영의 첫번째 글
          <div className={'align'}>
            <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
          </div>
        </div>
        <button onClick={this.handlingClik}>손가락 튕기기</button>
        { this.state.show &&
          this.cityTimeData.map((citytime, index)=>
          <WorldClock city={citytime[0]} time={citytime[1]} key={index} />
          )
          }
        </div>
    );
    }
  }

// component export(수출) ->index.js 에서 수입
// default : 이 파일은 default(기본적으로, 하나만) export 하겠다
export default App;










///////////////////

// function App2() {
//   return (
//     <div className="App">
//       <h1>안녕히 가세요</h1>
//       <table>
//         <tr><td>1</td></tr>
//         <tr><td>2</td></tr>
//       </table>
//     </div>
//   );
// }


