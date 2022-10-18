import { createAsyncThunk } from '@reduxjs/toolkit'

const randomMessage = createAsyncThunk(
  '/api/messages',
  async () => {
    const response = await fetch('/api/messages', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let variable = await response.json()
    return variable.greetings;
  },
);

export default randomMessage;
