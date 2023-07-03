import { ADDTEAM, GETFILTERDATA, GETUSERDATA } from "./actionTypes";

export const getUsersData = (payload) => {
  return {
    type: GETUSERDATA,
    payload,
  };
};

export const getFilterData = (payload) => {
  return {
    type: GETFILTERDATA,
    payload,
  };
};

export const addTeam = (payload) => {
  return {
    type: ADDTEAM,
    payload,
  };
};
