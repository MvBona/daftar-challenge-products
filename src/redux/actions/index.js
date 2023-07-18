export const DELET = 'DELET';
export const EDIT = 'EDIT';
export const END_EDIT = 'END_EDIT';
export const PRODUCTS = 'PRODUCTS';

export const delet= (id) => ({
  type: DELET,
  payload: id,
});

export const startEdit = (id) => ({
  type: EDIT,
  payload: id,
});

export const endEdit = (state) => ({
  type: END_EDIT,
  payload: state,
});

export const addProduct = (product) => ({
  type: PRODUCTS,
  payload: product,
});
