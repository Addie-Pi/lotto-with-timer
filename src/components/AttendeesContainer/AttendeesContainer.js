import { useSelector } from "react-redux";
import AttendeeItem from "../AttendeeItem/AttendeeItem";
import './AttendeesContainer.css'


const AttendeesContainer = () => {
  const { attendees } = useSelector((store) => store.list)

  return (
    <div className="attendees_container">
      參加抽獎名單
      <div className="attendees_content">
        {attendees.map((item) => {
          return <AttendeeItem key={item.id} attendeeItem={item} />
        })}
      </div>
    </div>
  )
}

export default AttendeesContainer