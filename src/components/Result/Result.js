import { useSelector, useDispatch } from 'react-redux'
import './Result.css'
import { restart, setFakeAttendees } from '../../features/lists/listSlice'

const Result = () => {
    const { winner } = useSelector((store) => store.list);
    const dispatch = useDispatch();
    console.log(' winner', winner);

    const restartLotto = () => {
        console.log('Restart');
        dispatch(restart())
        dispatch(setFakeAttendees())
    }


  return (
    <div className="result_container">
      <p className="result_title">抽獎結果</p>
      <div className="result_content">
        <div className="result_photo">
          <img src={winner.userPhoto} alt="" />
        </div>
        <p className="result_name">
          {winner.first_name}
          {winner.last_name}
        </p>
      </div>
      <div className="result_action">
        <button type="submit" onClick={restartLotto}>
          重新抽獎
        </button>
      </div>
    </div>
  )
}

export default Result
