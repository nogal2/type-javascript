import React, { useCallback, useEffect, useMemo, useReducer, useRef} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

//              상태    상태변화              
const reducer = (state, action) => {
  switch(action.type) {
    case 'INIT': {
      return action.data  // 액션(dispatch)에서 받은 데이터를 리턴해줌.
    }
    case 'CREATE': {
      const created_date = new Date().getTime()
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state]
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId)
    }
    case 'EDIT': {
      return state.map((it) => 
      it.id === action.targetId? {...it, content: action.newContent} : it)
    }
    default :
    return state
  }
}

export const DiaryStateContext = React.createContext() // 데이터만을 위해 존재하게 만들기.

export const DiaryDispatchContext = React.createContext()
// 함수들을 한번에 해버리면 함수 하나가 변하면 그 자식컴포넌트들은 다 재렌더링되기떄문에
// 최적화 했던것이 무의미하게 된다. 그래서 이렇게 따로 해줘야함.

function App() {

  // const [data, setData] = useState([])
  const [data, dispatch] = useReducer(reducer, [])
//             액션               상태변화함수, 초기값
  const dataId = useRef(0)

  const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json())
    //console.log(res)

    const initData = res.slice(0,20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random()*5)+1,
        // Math.random()*5 0부터 4까지의 랜덤 난수, Math.floor 소수점 버림
        created_date: new Date().getTime,
        id: dataId.current++
      }
    })

    dispatch({type:"INIT", data:initData})  // 액션타입은 INIT, 거기에 필요한 데이터는 initData
    //setData(initData)
  }
  
  useEffect(() => {
    getData() 
  },[])

  const onCreate = useCallback((author, content, emotion) => {

    dispatch({type:'CREATE', data:{author, content, emotion, id:dataId.current}})
/*     
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1 */
    //setData((data) => [newItem, ...data]) // 함수형 업데이트
    // 이렇게 하면 의존성 목록이 빈 배열이라도 글을 작성해도 원래 data를 참조하기 때문에
    // 글이 정상적으로 써지면서 이전의 글들도 같이 가져오는것을 알 수 있다.
  }, [])  // 의존성에 값을 안 넣어 주고 글을 생성하면 생성된 글 외에는 다 삭제됨.
  /* 왜냐하면 처음 data는 [] 빈배열로 생성되어서 useCallback을 실행하기 때문에,
  이 것을 다시 실행할때 ...data는 [] 빈배열이기 때문이다.*/

  const onRemove = useCallback((targetId) => {
    //console.log(`${targetId}가 삭제되었습니다.`)
    /* const newDiaryList = data.filter((it) => it.id !== targetId)
    console.log(newDiaryList)
    setData(newDiaryList) */
    dispatch({type: "REMOVE", targetId})
    //setData((data) => data.filter((it) => it.id !== targetId))
  }, [])

  const onEdit = useCallback((targetId, newContent) => {

    dispatch({type:"EDIT", targetId, newContent})
/* 
    setData((data) =>
      data.map((it) => 
        it.id === targetId ? {...it, content:newContent}:it
      )
    ) */
  }, [])

  const memoizedDispatches = useMemo(() => {  // 하나의 값으로 정리후 프로바이더의 값으로 전달.
    // 만약 이렇게 안하고 하나의 객체로 가져가면 app컴포넌트가 재생성이 될 때 그 객체도 다시 재생성된다.
    return {onCreate, onRemove, onEdit}
  }, []) 

  const getDiaryAnalysis = useMemo(() => {  // useMemo는 그 자체로 콜백함수가 리턴하는 값을 리턴한다.
                                            // 그래서 변수로 사용해야한다.

    const goodCount = data.filter((it) => it.emotion >= 3).length
    const badCount = data.length - goodCount
    const goodRatio = (goodCount / data.length) * 100

    return {goodCount, badCount, goodRatio}

  }, [data.length])

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <DiaryEditor onCreate={onCreate} />
          <div>전체 일기: {data.length}</div>
          <div>기분 좋은 일기 개수: {goodCount}</div>
          <div>기분 나쁜 일기 개수: {badCount}</div>
          <div>기분 좋은 일기 비율: {goodRatio}</div>
          <DiaryList onEdit={onEdit} onRemove={onRemove} />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
