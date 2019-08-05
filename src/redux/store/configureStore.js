import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { pokemonReducer } from '../reducers/pokemonReducer';

export default () => {
  const store = createStore(
    combineReducers({
      pokemon: pokemonReducer,
    }),
    applyMiddleware(thunk),
  );

  return store;
};
