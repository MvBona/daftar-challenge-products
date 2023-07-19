/* eslint-disable default-param-last */
const initialState = {
  items: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
