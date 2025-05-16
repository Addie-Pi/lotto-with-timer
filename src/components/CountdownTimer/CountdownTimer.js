
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  selectWinner,
  changeCountdownOverstatus,
} from '../../features/lists/listSlice'
import './CountdownTimer.css'


const CountdownTimer = () => {
  const [inputMinutes, setInputMinutes] = useState('')
  const [countdownMinutes, setCountdownMinutes] = useState();
  const [textMinutes, setTextMinutes] = useState('00');
  const [textSeconds, setTextSeconds] = useState('00');
  const [isRunning, setIsRunning] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    if (!isRunning) return

    if (countdownMinutes > 0) {
      const toCountdown = setInterval(() => {
        caluculateCountdownTime(countdownMinutes)
      }, 1000)

      return () => {
        clearInterval(toCountdown)
      }
    } else {
      dispatch(changeCountdownOverstatus());
      dispatch(selectWinner());
    }
  }, [countdownMinutes, isRunning, dispatch])


  const caluculateCountdownTime = (totalCountdownTimeInSecs) => {
    let calculatSecs = totalCountdownTimeInSecs % 60;
    let calculatMins = Math.floor(totalCountdownTimeInSecs / 60);


    if (totalCountdownTimeInSecs >= 0) {
      totalCountdownTimeInSecs--;
      calculatSecs = totalCountdownTimeInSecs % 60
      calculatMins = Math.floor(totalCountdownTimeInSecs / 60)

      setCountdownMinutes(totalCountdownTimeInSecs);
      setTextMinutes(('0' + calculatMins).slice(-2));
      setTextSeconds(('0' + calculatSecs).slice(-2));
    }
  }

  const getInputMinutes = (event) => {
    setInputMinutes(event.target.value);
  }

  const submit = (event) => {
    event.preventDefault();

    caluculateCountdownTime(inputMinutes * 60);
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