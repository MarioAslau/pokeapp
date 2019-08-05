const initState = {};

export const pokemonReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return action.payload;
    default:
      return state;
  }
};
