import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import {api} from '../../services/api';

import { Creators as UsersActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));
    if (isDuplicated) {
      yield put(UsersActions.addUserFailure('Usuário Duplicado'));
      toast.warn('Usuário Duplicado');
    } else {
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

      yield put(UsersActions.addUserSuccess(userData));

      toast.success('Usuário adiconado com sucesso');
    }
  } catch (error) {
    yield put(UsersActions.addUserFailure('Erro ao adicionar Usuário'));
    toast.error('Erro ao adicionar Usuário');
  } finally {
    yield put(ModalActions.closeModal());
  }
}
