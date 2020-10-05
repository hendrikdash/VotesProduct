import {Types, ProductType, ProductActions } from '../../Contexts/Product/ProductContext'
import {  VoteActions } from '../../Contexts/Vote/VoteContext'
export const productReducer = (
    state: ProductType[],
    action: ProductActions | VoteActions
) => {
    switch (action.type) {
        case Types.AddProduct:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    price: action.payload.price
                }
            ];
        case Types.DeleteProduct:
            return [...state.filter(product => product.id !== action.payload.id)];
        case Types.EditProduct:
            return [...state.filter(product => product.id !== action.payload.id)||[],
                {
                    id: action.payload.id || 0,
                    name: action.payload.name || '',
                    description: action.payload.description || '',
                    price: action.payload.price || ''
                }
            ];
        default:
            return state;
    }
};