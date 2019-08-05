export const addPokemon = pokemon => dispatch => {
  dispatch({
    type: 'ADD_POKEMON',
    payload: pokemon,
  });
};
