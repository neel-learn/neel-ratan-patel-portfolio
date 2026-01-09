import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolioData = createAsyncThunk(
  "portfolio/fetchData",
  async () => {
    const response = await axios.get("https://portfolio-nrcb.onrender.com/api/portfolio");
    return response.data;
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    navBarList: [],
    qualificationList: [],
    languageList: [],
    frontendList: [],
    backendList: [],
    databaseList: [],
    devOpsList: [],
    cyberSecurityList: [],
    toolsList: [],
    projectList: [],
    socialLinks: [],
    likeCount: 0,
    currentUserLiked: false,
    status: "idle",
  },
  reducers: {
    addLike: (state) => {
      state.likeCount += 1;
    },
    disLike: (state) => {
      state.likeCount -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.navBarList = action.payload.navBarList;
        state.qualificationList = action.payload.qualificationList;
        state.languageList = action.payload.languageList;
        state.frontendList = action.payload.frontendList;
        state.backendList = action.payload.backendList;
        state.databaseList = action.payload.databaseList;
        state.devOpsList = action.payload.devOpsList;
        state.cyberSecurityList = action.payload.cyberSecurityList;
        state.toolsList = action.payload.toolsList;
        state.projectList = action.payload.projectList;
        state.socialLinks = action.payload.socialLinks;
        state.likeCount = action.payload.likes;
        state.currentUserLiked = action.payload.currentUserLiked;
      })
      .addCase(fetchPortfolioData.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateLikesInDb.fulfilled, (state, action) => {
         state.likeCount = action.payload.likes;
         state.currentUserLiked = action.payload.liked;
      });
  },
});
export const updateLikesInDb = createAsyncThunk(
  "portfolio/updateLikes",
  async (actionType) => {
    try{
      const response = await axios.patch(
      'https://portfolio-nrcb.onrender.com/api/portfolio/like',
      { action: actionType }
    );
    return response.data;
    } catch (error) {
      console.log("Failed to update likes: ", error);
      throw error;
    }
    
  }
);

export const { addLike } = portfolioSlice.actions;
export const { disLike } = portfolioSlice.actions;
export default portfolioSlice.reducer;
