import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";




export const getPost = createAsyncThunk(
  "data/getPost",
  async function (){
    try {
      const {data} = await axiosRequest.get("Post/get-posts")
      return data.data
    } catch (error) {
      
    }
  }
)





const layout = createSlice({
  name: "layout",
  initialState: {
    modalMore: false,
    modalSearch: false,
    data:[]
  },



  reducers: {
  },
  extraReducers:(builder)=>{
    builder.addCase(getPost.fulfilled,(state,action)=>{
      state.data = action.payload
    })
    builder.addCase(getPost.rejected,(state,action)=>{
    })
    builder.addCase(getPost.pending,(state,action)=>{
    })
  }
});

export default layout.reducer;
export const { setModalMore, setModalSearch } = layout.actions;
