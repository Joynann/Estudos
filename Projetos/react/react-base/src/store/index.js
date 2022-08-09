import { createStore } from 'redux';

const initialAction = {
  botaoClicado: false
}

const reducer = (state = initialAction, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

export default store;
