
import './App.css';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import LottoAttendees from './components/AttendeesContainer/AttendeesContainer';
import Result from './components/Result/Result';
import { useSelector, useDispatch } from 'react-redux'
import { setFakeAttendees }  from './features/lists/listSlice'
import { useEffect } from 'react'


function App() {
  const { isCountdownOver } = useSelector((store) => store.list)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFakeAttendees());
    console.log('app')
  }, [dispatch])

  if (!isCountdownOver){
   
     return (
       <div className="App">
         <CountdownTimer />
         <LottoAttendees />
       </div>
     )
  }
  return (
    <div className="App">
      <Result />
    </div>
  )
    
}

export default App;
