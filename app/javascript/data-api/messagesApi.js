import { createAsyncThunk } from '@reduxjs/toolkit'

const randomMessage = createAsyncThunk(
  '/api/messages',
  async () => {
    console.log('HIII')
    const response = await fetch('/api/messages', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let variable = await response.json()
    console.log(variable)
    return variable.greetings;
  },
);

export default randomMessage;
