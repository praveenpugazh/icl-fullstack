const matchReducer = (state = { matches: [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        matches: action.payload.matches,
      };
    case "FETCH_MATCH":
      return { ...state, match: action.payload };
    default:
      return { ...state };
  }
};

export default matchReducer;
