import {Types, TypeVote, VoteActions } from '../../Contexts/Vote/VoteContext'
import {  ProductActions } from '../../Contexts/Product/ProductContext'

export const voteReducer = (
    state: TypeVote[],
    action:  VoteActions | ProductActions
) => {
    switch (action.type) {
        case Types.AddVote:
            return [
                ...state,
                {
                    id: action.payload.id,
                    product_id: action.payload.product_id,
                    count: action.payload.count,
                }
            ];
        case Types.UpdateVote:
            const findItem = state.find(element => element.id === action.payload.id) || null;
            const filterVote = state.filter(element => element.id !== action.payload.id);
            return [
                ...filterVote || [],
                {
                    id: action.payload.id,
                    product_id: findItem?.product_id? findItem.product_id : 0,
                    count: findItem?.count? findItem.count + 1 : 0,
                }
            ];
        default:
            return state;
    }
};
  