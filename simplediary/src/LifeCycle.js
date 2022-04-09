import React, { useEffect, useState } from "react";

const UnmountTest = () => {
    
    useEffect(() => {
        console.log("Mount!")
        return () => {
            // 이렇게 함수를 반환할 때 Unmount 시점에 실행되게 됨 
            console.log("Unmount!")
        }
    }, []) 

    return <div>Unmount Testing Component</div>
}

const Lifecycle =() => {
    
    const [isVisible, setIsVisible] =useState(false)
    const toggle = () => setIsVisible(!isVisible)
    /*
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    
    useEffect(() => {   // 컴포넌트 처음 나올때 실행
        console.log("Mount!")
    }, [])

    useEffect(() => {   // 컴포넌트가 변화될때 실행
        console.log("Update!")
    })  

    useEffect(()=> {    // [count]가 변하게 되면 콜백함수가 실행됨.
        console.log(`count is update: ${count}`)
        if(count > 5) {
            alert('count가 5를 넘었습니다. 따라서 1로 초기화합니다.')
            setCount(1)
        }
    }, [count])
    console.log(`테스트: ${count}`)
    useEffect(() => {
        console.log(`text is update: ${text}`)
    }, [text]) */
    return(
        <div style={{padding:20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest /> /* isVisible값이 true면 뒤에 값을 반환한다.
            그래서 UnmountTest컴포넌트가 반환 되어서 렌더링됨, false면 UnmountTest컴포넌트가 렌더링 안됨
             */}
        </div>
    )
}

export default Lifecycle