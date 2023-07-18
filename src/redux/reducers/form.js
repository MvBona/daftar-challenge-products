import { DELET, EDIT, END_EDIT, PRODUCTS } from '../actions';

const INITIAL_STATE = {
  editor: false,
  idToEdit: 0,
  products: [],
};

const reducer = (action, state = INITIAL_STATE) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELET:
      return {
        ...state,
        products: action.payload,
      };
    case EDIT:
      return {
        ...state,
        editor: true,
        idToEdit: action.payload,
      };
    case END_EDIT:
      return {
        ...state,
        products: state.products.map((e) => {
          if (e.id === state.idToEdit) {
            return {
              ...action.payload,
            };
          }
          return e;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
