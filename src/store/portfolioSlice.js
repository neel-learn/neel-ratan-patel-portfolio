import { createSlice } from "@reduxjs/toolkit";

import {
  navBarList,
  qualificaitonList,
  languagesList,
  frontendList,
  backendList,
  databaseList,
  devOpsList,
  cyberSecurityList,
  toolsList,
  projectList,
  socialLinks,
  Likes,
} from "../data/portfolioData";


const portfolioSlice = createSlice({
  name: "portfolio",

  initialState: {
    navBarList: navBarList,

    qualificationList: qualificaitonList,

    languageList: languagesList,

    frontendList: frontendList,

    backendList: backendList,

    databaseList: databaseList,

    devOpsList: devOpsList,

    cyberSecurityList: cyberSecurityList,

    toolsList: toolsList,

    projectList: projectList,

    socialLinks: socialLinks,

    likeCount: Likes,

    currentUserLiked: false,

    status: "succeeded",
  },

  reducers: {

    toggleLike: (state) => {

      if (state.currentUserLiked) {

        state.likeCount -= 1;

        state.currentUserLiked = false;

      } else {

        state.likeCount += 1;

        state.currentUserLiked = true;

      }

    },

  },
});


export const {
  toggleLike,
} = portfolioSlice.actions;


export default portfolioSlice.reducer;