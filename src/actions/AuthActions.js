import { Actions } from 'react-native-router-flux'


import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../constants';

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  // Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

export const emailChanged = (text) => {
   return  {
    type: EMAIL_CHANGED,
    payload: text,
  };
 
};

export const passwordChanged = (password) => {
   return {
    type: PASSWORD_CHANGED,
    payload: password,
  };
 
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })

    if(email == "andres" && password == "123"){
      user = {
        name: 'Andreszl',
        email: email,
        password: password
      }
      loginUserSuccess(dispatch, user)
      Actions.main()
    }else{
      loginUserFail(dispatch)
      Actions.auth()
    }
  };
};
