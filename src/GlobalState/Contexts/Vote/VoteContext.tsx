import { ActionMapping } from '../../AppContext'

export enum Types {
    AddVote = "ADD_VOTE",
    UpdateVote = "EDIT_VOTE"
}

type VoteType = {
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
  
type VoteActions = ActionMapping<VotePayload>[keyof ActionMapping<VotePayload>];


export type { VoteType, VoteActions }

