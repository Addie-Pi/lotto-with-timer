import { createSlice } from "@reduxjs/toolkit";
import fakeUserData from '../../fakeUserData'



const initialState = {
  attendees: [],
  winner: [],
  fakeAttendees: [],
  isCountdownOver: false,
  isCountdownStart: false
}

const listSlice = createSlice({
  name: 'list',
  initialState: initialState,
  reducers: {
    setFakeAttendees: (state) => {
      // select random number from 1-200
      const randomNumsOfFakeAttendees = Math.floor(Math.random() * 201)
      // decide how many lotto attendees will be
      const fakeAttendees = fakeUserData.slice(randomNumsOfFakeAttendees - 1)
      console.log('fakeAttendees, ', fakeAttendees)

      state.fakeAttendees = fakeAttendees;
      state.attendees = fakeAttendees;
    },
    
    selectWinner: (state) => {
      
      let selectedPosition = Math.floor(Math.random() * state.fakeAttendees.length)
      console.log('selectedPosition ', selectedPosition);
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

console.log('listSlice', listSlice);

export const { setFakeAttendees, selectWinner, changeCountdownOverstatus, restart } =
  listSlice.actions

export default listSlice.reducer;