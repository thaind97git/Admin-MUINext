import { makeFetchAction } from 'redux-api-call';
import { get } from 'lodash/fp';
import Router from 'next/router';

import {
  respondToSuccess,
  respondToFailure
} from '../stores/middlewares/api-reaction';
import { createErrorSelector } from '../utils';
import { saveToken, removeToken } from '../libs/token-libs';
import nfetch from '../libs/nfetch';

export const LOGIN_USER = 'LOGIN_USER';
const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const loginUserAPI = makeFetchAction(LOGIN_USER, ({ email, password }) =>
  nfetch({
    endpoint: `/api/v2/login`
  })({ email, password })
);

export const loginUser = (email, password) => {
  return respondToSuccess(
    loginUserAPI.actionCreator({
      email,
      password
    }),
    resp => {
      if (resp.errors) {
        console.error('Err: ', resp.errors);
        return;
      }

      const token = get('access_token', resp);
      saveToken(token);
      Router.push('/');

      return;
    }
  );
};

export const loginUserErrorMessageSelector = createErrorSelector(loginUserAPI);

export const getCurrentUserAPI = makeFetchAction(
  GET_CURRENT_USER,
  nfetch({
    endpoint: `/api/v2/users/my_profile`,
    method: 'GET'
  })
);

export const verifyLogin = user => {
  if (!user) {
    return false;
  }
  return true;
};

export const getCurrentUser = () => {
  return respondToFailure(getCurrentUserAPI.actionCreator(), resp => {
    if (resp.errors) {
      console.error('Err: ', resp.errors);
      return;
    }

    if (!verifyLogin(resp.user_id)) {
      return Router.replace({
        pathname: '/login'
      });
    }

    return;
  });
};

export const logOut = () => {
  removeToken();
  Router.push('/login');
};
