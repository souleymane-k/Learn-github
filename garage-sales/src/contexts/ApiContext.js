import React from 'react';

export default React.createContext({
  Goods:[],
  setUser: () => {},
  user:{},
  getProducts: () => {},
  addProduct: () => {},
  deleteProduct: () => {},
  onDeleteProduct: () => {},
  updateProduct:()=>{}
})