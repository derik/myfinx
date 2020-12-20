export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'USER_SIGNIN_REQUEST':
      return { loading: true, user: null };
    case 'USER_SIGNIN_SUCCESS':
      return { loading: true, user: action.payload };
    case 'USER_SIGNIN_FAIL':
      return { loading: true, error: action.payload };
  }
};
