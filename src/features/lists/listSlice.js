import { createSlice } from "@reduxjs/toolkit";
import fakeUserData from '../../fakeUserData'



const initialState = {
  attendees: [],
  winner: [],
  fakeAttendees: [],
  isCountdownOver: false
}

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    setFakeAttendees: (state) => {
      // select random number from 1-200
      let randomNumsOfFakeAttendees = Math.floor(Math.random() * 201)
      // make the minimum attendees to be 2
      if (randomNumsOfFakeAttendees < 2) {
        randomNumsOfFakeAttendees = 2;
      }

      // generate the lotto attendees[]
      const fakeAttendees = fakeUserData.slice(0, randomNumsOfFakeAttendees) 
  
      state.fakeAttendees = fakeAttendees
      state.attendees = fakeAttendees
    },
    
    selectWinner: (state) => {
      // choose the winner's index
      let selectedPosition = Math.floor(Math.random() * state.fakeAttendees.length)
      state.winner = state.attendees[selectedPosition]
    },

    changeCountdownOverstatus: (state) => {
      state.isCountdownOver = !state.isCountdownOver
    },

    restart: () => {
      return initialState
    },
  },
})

export const { setFakeAttendees, selectWinner, changeCountdownOverstatus, restart } =
  listSlice.actions

export default listSlice.reducer;