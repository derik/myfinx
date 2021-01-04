import CategoryActionTypes from "./category.types";

export const fetchCategoriesStart = () => ({
  type: CategoryActionTypes.LIST_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CategoryActionTypes.LIST_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (errorMessage) => ({
  type: CategoryActionTypes.LIST_FAIL,
  payload: errorMessage,
});
