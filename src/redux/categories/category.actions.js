import { expenseApi } from "../../apis/expenseApi";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "./category.constants";

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const categories = await expenseApi.findAllCategories();
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: categories });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error,
    });
  }
};
