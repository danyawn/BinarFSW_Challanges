import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk('appData/fetchData', async () => {
    const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
    // console.log("response", response.data)
    return response.data
})

export const appDataSlice = createSlice({
    name: 'appData',
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            // console.log('action', action)
            state.data = action.payload
        })
    }
})

export default appDataSlice.reducer