
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  selectWinner,
  changeCountdownOverstatus,
} from '../../features/lists/listSlice'
import './CountdownTimer.css'


const CountdownTimer = () => {
  const [inputMinutes, setInputMinutes] = useState('')
  const [countdownSeconds, setCountdownSeconds] = useState(0);
  const [textMinutes, setTextMinutes] = useState('00');
  const [textSeconds, setTextSeconds] = useState('00');
  const [isRunning, setIsRunning] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    if (!isRunning) return

    if (countdownSeconds > 0) {
      const timer = setTimeout(() => {
        setCountdownSeconds(prev => prev - 1)
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
    } else {
      dispatch(changeCountdownOverstatus());
      dispatch(selectWinner());
      setIsRunning(false)
    }
  }, [countdownSeconds, isRunning, dispatch])


  useEffect(() => {
    const mins = Math.floor(countdownSeconds / 60)
    const secs = countdownSeconds % 60
    setTextMinutes(('0' + mins).slice(-2))
    setTextSeconds(('0' + secs).slice(-2))
  }, [countdownSeconds])


  const getInputMinutes = (event) => {
    setInputMinutes(event.target.value);
  }

  const submit = (event) => {
    event.preventDefault();

    const totalSecs = parseInt(inputMinutes, 10) * 60
    setCountdownSeconds(totalSecs);
    setIsRunning(true);
    setInputMinutes('');
  }



  return (
    <div className="countdown_container">
      {isRunning ? (
        <div className="countdown_status">
          <span>抽獎中</span>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className="countdown_content">
            <div className="countdown_input">
              <label>抽獎時間</label>
              <input
                type="number"
                min="1"
                step="1"
                required
                placeholder="輸入時間"
                value={inputMinutes}
                onChange={getInputMinutes}
              />
              <span>分鐘</span>
            </div>
          </div>
          <br />
          <div className="countdown_action">
            <button type="submit">開始</button>
          </div>
        </form>
      )}

      <div className='countdown_result'>
        <span>
          {textMinutes} : {textSeconds}
        </span>
      </div>
    </div>
  )
}

export default CountdownTimer