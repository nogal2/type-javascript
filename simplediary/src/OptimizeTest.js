import React , { useEffect, useState } from "react"
/* 
const Textview = React.memo(({text}) => {   // text가 바뀌지 않으면 절대로 렌더링이 일어나지 않음
    useEffect(() => {
        console.log(`Update :: Text : ${text}`)
    })
    return(
        <div>{text}</div>
    )
})

const Countview = React.memo(({count}) => {
    useEffect(() => {
        console.log(`Update :: Count : ${count}`)
    })
    return (<div>{count}</div>)
})
 *//* 
const OptimizeTest = () => {

    const [count, setCount] = useState(1)
    const [text,setText] = useState("")
    
    return (
        <div style={{padding:50}}>
            <div>
                <h2>count</h2>
                <Countview count={count} />
                <button onClick={() => setCount(count+1)}>+</button>
            </div>

            <div>
                <h2>text</h2>
                <Textview text={text} />
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    )
       
}
*/

const CounterA = React.memo(({count}) => {
    useEffect(() => {
        console.log(`CounterA update - count: ${count}`)
    })
    return (
        <div>{count}</div>
        
    )
})
/* 
const CounterB = React.memo(({obj}) => {    // prop인 obj가 객체라서 여기는 렌더링됨.
    useEffect(() => {
        console.log(`CounterB update - count: ${obj.count}`)
    })
    return (
        <div>{obj.count}</div>
    )
})
 */
const CounterB = ({obj}) => {    // prop인 obj가 객체라서 여기는 렌더링됨.
    useEffect(() => {
        console.log(`CounterB update - count: ${obj.count}`)
    })
    return (
        <div>{obj.count}</div>
    )
}
const areEqual = (prevProps, nextProps) => {
    return prevProps.obj.count === nextProps.obj.count

    /*
    return true // 이전 프롭스와 현재 프롭스가 같다. => 렌더링을 일으키지 않게 됨.
    return false // 이전과 현재가 다르다 => 리렌더링을 일으키라는 뜻 */
}
const memoizedCounterB = React.memo((CounterB, areEqual))   
// CounterB는 areEqual의 함수에 따라서 리렌더링할지 안할지를 결정
const OptimizeTest = () => {

    const [count, setCount] = useState(1)
    const [obj, setObj] = useState({
        count: 1
    })
    
    return (
        <div style={{padding:50}}>
          <div>
              <h2>Counter A</h2>
              <CounterA count={count} />
              <button onClick={() => setCount(count)}>A button</button>
          </div>
          <div>
              <h2>Counter B</h2>
              <memoizedCounterB obj={obj} />
              <button onClick={() => setObj({
                  count: obj.count
              })}>B button</button>
          </div>
        </div>
    )
       
}

export default OptimizeTest 