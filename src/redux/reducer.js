import {
  ADDTEAM,
  GETFILTERDATA,
  GETUSERDATA,
  GETUSERSDATAERROR,
  GETUSERSDATALOADING,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
  data: [],
};

console.log(initialState.cart);

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case GETUSERDATA:
      return {
        ...state,
        data: payload,
      };
    case GETUSERSDATALOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GETUSERSDATAERROR:
      return {
        ...state,
        isError: true,
      };

    case ADDTEAM:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    default:
      return state;
  }
};
