
import {  ActionMapping } from '../../AppContext'


export enum Types {
    Add = "ADD_PRODUCT",
    Delete = "DELETE_PRODUCT",
    Edit = "EDIT_PRODUCT"
}

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: string;
};


type ProductPayload = {
    [Types.Add]: {
        id: number;
        name: string;
        description: string;
        price: string;
        };
    [Types.Delete]: {
        id: number;
    };
    [Types.Edit]: {
        id: number;
        name?: string;
        description?: string;
        price?: string;
    };
};

export type ProductActions = ActionMapping<ProductPayload>[keyof ActionMapping<ProductPayload>];



