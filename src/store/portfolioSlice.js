import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolioData = createAsyncThunk(
  "portfolio/fetchData",
  async () => {
    const [ response ] = await Promise.all([
      axios.get("https://portfolio-nrcb.onrender.com/api/portfolio"),
      // axios.get("http://localhost:5000/api/portfolio"),
      new Promise((resolve) => setTimeout(resolve, 3000))
    ]) 
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
    // addLike: (state) => {
    //   state.likeCount += 1;
    // },
    // disLike: (state) => {
    //   state.likeCount -= 1;
    // },

    toggleLikeOptimistic: (state) => {
      if (state.currentUserLiked) {
        state.likeCount -= 1;
        state.currentUserLiked = false;
      } else {
        state.likeCount += 1;
        state.currentUserLiked = true;
      }
    },
    rollbackLike: (state, action) => {
      state.likeCount = action.payload.likes;
      state.currentUserLiked = action.payload.liked;
    }
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
      .addCase(fetchPortfolioData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateLikesInDb.fulfilled, (state, action) => {
         state.likeCount = action.payload.likes;
         state.currentUserLiked = action.payload.liked;
      });
  },
});

const BASE_URL = "https://portfolio-nrcb.onrender.com";
export const updateLikesInDb = createAsyncThunk(
  "portfolio/updateLikes",
  async() => {
    try{
      const response = await axios.patch(`${BASE_URL}/api/portfolio/like`);
      return response.data;
    } catch (error) {
      console.log("Failed to update likes: ", error);
      throw error;
    }
  }
);

// export const { addLike } = portfolioSlice.actions;
// export const { disLike } = portfolioSlice.actions;
export const { toggleLikeOptimistic, rollbackLike } = portfolioSlice.actions;
export default portfolioSlice.reducer;
