import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addUserSuccess } from '../actions/users';

export function* addUser(action) {
  const { data } = yield call(api.get, `/users/${action.payload.user}`);

  const { latitude, longitude } = action.payload.cordinates;
  const userData = {
    id: data.id,
    name: data.name,
    login: data.login,
    avatar: data.avatar_url,
    github_url: data.html_url,
    latitude,
    longitude,
  };

  yield put(addUserSuccess(userData));
}
