import {Types, ProductType, ProductActions } from '../../Contexts/Product/ProductContext'
import {  VoteActions } from '../../Contexts/Vote/VoteContext'
export const productReducer = (
    state: ProductType[],
    action: ProductActions | VoteActions
) => {
    switch (action.type) {
        case Types.Add:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    price: action.payload.price
                }
            ];
        case Types.Delete:
            return [...state.filter(product => product.id !== action.payload.id)];
        default:
            return state;
    }
};