import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 2000)
});

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('Falhou!');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);