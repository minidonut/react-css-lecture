import data from "./watchaDummyData";

const INITIAL_STATE = {
  books: data.result.books,
  movies: data.result.movies,
  top_results: data.result.top_results,
  tv_seasons: data.result.tv_seasons,
  users: data.result.users,
};

export const watchaReducer = (state = INITIAL_STATE, { type, payload }) => {
  return state;
};
