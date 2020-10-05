
import {  ActionMapping } from '../../AppContext'


export enum Types {
    AddProduct = "ADD_PRODUCT",
    DeleteProduct = "DELETE_PRODUCT",
    EditProduct = "EDIT_PRODUCT"
}

export type TypeProduct = {
  id: number;
  name: string;
  description: string;
  price: string;
};


type ProductPayload = {
    [Types.AddProduct]: {
        id: number;
        name: string;
        description: string;
        price: string;
        };
    [Types.DeleteProduct]: {
        id: number;
    };
    [Types.EditProduct]: {
        id: number;
        name?: string;
        description?: string;
        price?: string;
    };
};

export type ProductActions = ActionMapping<ProductPayload>[keyof ActionMapping<ProductPayload>];



