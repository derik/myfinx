import CategoryActionTypes from "./category.types";

export const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CategoryActionTypes.LIST_REQUEST:
      return { loading: true, categories: [] };
    case CategoryActionTypes.LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CategoryActionTypes.LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
