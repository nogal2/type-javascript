import React, { useContext, useEffect, useRef, useState } from "react"
import { DiaryDispatchContext } from "./App"

const DiaryEditor = () => {

    const {onCreate} = useContext(DiaryDispatchContext)

    //useEffect(() => {console.log("Diary Editor 렌더")})

    // useRef => Dom 요소에 접근할수 있도록해줌.
    const authorInput = useRef()
    const contentInput = useRef()

    const [state, setState] = useState({
        author:"",
        content:"",
        emotion:1,
    })

    const handleChangeState = (e) => {
        // console.log(e.target.name)  // state의 키
        // console.log(e.target.value)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit =() => {
        //console.log(state)
        if(state.author.length < 1) {
            authorInput.current.focus()
            return ;
        }

        if(state.content.length < 5) {
            contentInput.current.focus()
            return;
        }

        onCreate(state.author, state.content, state.emotion)
        //console.log(state)
        alert('저장 성공')
        setState({
            author: "",
            content: "",
            emotion: 1,
        })

    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    ref={authorInput}
                    name="author"
                    value={state.author} 
                    onChange={handleChangeState}
                    // onChange={(e) => {
                    //     // console.log(e.target.value)
                    //     // console.log(e.target.name)
                    //     setState({
                    //         ...state,   // state라는 객체가 가지고 있는 property들을 여기에 펼쳐줌. author를 포함한 모든 것들을 상태값을 줌.
                    //         author:e.target.value,
                    //         // ...state 가 이 자리에 오면 author를 변경후 다시 원래의 값으로 돌려놓기 때문에 여기에 두면 안된다.
                            
                    //     })
                    // }} 
                />
            </div>
            <div>
                <textarea 
                    ref={contentInput}
                    name="content"
                    value={state.content} 
                    onChange={handleChangeState}
                    // onChange={(e) => {
                    //     setState({
                    //         ...state,
                    //         content: e.target.value
                    //     })
                    // }}
                />
            </div>
            <div>
                <span>오늘의 감정점수: </span>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option vlaue={1}>1</option>
                    <option vlaue={2}>2</option>
                    <option vlaue={3}>3</option>
                    <option vlaue={4}>4</option>
                    <option vlaue={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    )
    
}
export default React.memo(DiaryEditor)