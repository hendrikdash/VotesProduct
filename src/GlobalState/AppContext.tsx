import React, { createContext, useReducer, Dispatch } from "react";

import {ProductType, ProductActions   } from './Contexts/Product/ProductContext'
import {  productReducer } from './Reducers/Product/ProductReducer'
import { VoteType, VoteActions } from './Contexts/Vote/VoteContext'
import {  voteReducer } from './Reducers/Vote/VoteReducer'

export type ActionMapping<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};


type InitialStateType = {
  products: ProductType[];
  votes: VoteType[];
};

const initialState = {
  products: [
    {
      id: 1,
      name: "Chiken Soup",
      description: "Chiken Soup with traditional receipt from mongolia",
      price: "2",

    },
    {
      id: 2,
      name: "Chiken Barbeque",
      description: "Chiken Barbeque with Netherland ingredients",
      price: "4"
    },
    {
      id: 3,
      name: "Fried Chiken",
      description: "Fried Chiken with java traditional ingredients",
      price: "6"
    },
    {
      id: 4,
      name: "Grilled Fish",
      description: "Grilled Fish with traditional receipt from East Java",
      price: "12"
    },
    {
      id: 5,
      name: "Fish Soup",
      description: "Fish Soup from Toba",
      price: "29"
    },
    
  ],
  votes: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<
   ProductActions | VoteActions
   >;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
    { products, votes }: InitialStateType,
  action: ProductActions | VoteActions
) => ({
  products: productReducer(products, action), 
  votes : voteReducer(votes, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };