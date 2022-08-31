
import './AttendeeItem.css'

const AttendeeItem = ({ attendeeItem }) => {
  
  return (
    <>
      <div className="attendeeItem_container">
        <div className="attendeeItem_pic">
          <img src={attendeeItem.userPhoto} alt="" />
        </div>
        <div className="attendeeItem_name">
          {attendeeItem.first_name} {attendeeItem.last_name}
        </div>
      </div>
    </>
  )
}

export default AttendeeItem