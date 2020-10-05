import { ActionMapping } from '../../AppContext'

export enum Types {
    AddVote = "ADD_VOTE",
    UpdateVote = "EDIT_VOTE"
}

export type TypeVote = {
    id: number;
    product_id: number;
    count: number;
};
  

type VotePayload = {
    [Types.AddVote]: {
        id: number;
        product_id: number;
        count: number;
    };
    [Types.UpdateVote]: {
        id: number;
    };
};
  
export type VoteActions = ActionMapping<VotePayload>[keyof ActionMapping<VotePayload>];


