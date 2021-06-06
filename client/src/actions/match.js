import * as api from "../api/index";

export const getMatches = () => async (dispatch) => {
  try {
    const data = await api.getMatches();
    dispatch({
      type: "FETCH_ALL",
      payload: {
        matches: data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMatch = (id) => async (dispatch) => {
  try {
    const data = await api.getMatch(id);
    dispatch({
      type: "FETCH_MATCH",
      payload: {
        data,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
