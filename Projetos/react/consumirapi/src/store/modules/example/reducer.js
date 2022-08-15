import * as types from '../types';

const initialAction = {
  botaoClicado: false
}

export default function reducer(state = initialAction, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }

    default: {
      return state;
    }
  }
}
