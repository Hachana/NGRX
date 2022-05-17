import { Action } from "@ngrx/store";

export enum ProductsActionsTypes{

    GET_ALL_PRODUCTS ="[Products] Get ALL products" ,
    GET_ALL_PRODUCTS_SUCCESS="[Products] Get ALL products Success",
    GET_ALL_PRODUCTS_ERROR="[Products] Get ALL products ERROR",

    ADD_PRODUCT="[Products] ADD product",
    ADD_PRODUCT_SUCCESS="[Products] ADD product Success",
    ADD_PRODUCT_ERROR="[Products] ADD product ERROR",


    UPDATE_PRODUCT="[Products] UPDATE product",
    UPDATE_PRODUCT_SUCCESS="[Products] UPDATE product Success",
    UPDATE_PRODUCT_ERROR="[Products] UPDATE product ERROR",

    DELETE_PRODUCT="[Products] DELETE product",
    DELETE_PRODUCT_SUCCESS="[Products] DELETE product Success",
    DELETE_PRODUCT_ERROR="[Products] DELETE product ERROR",

    
    SEARCH_PRODUCT="[Products] SEARCH product",
    SEARCH_PRODUCT_SUCCESS="[Products] SEARCH product Success",
    SEARCH_PRODUCT_ERROR="[Products] SEARCH product ERROR",


    SELECT_PRODUCT="[Products] SELECT product",
    SELECT_PRODUCT_SUCCESS="[Products] SELECT product Success",
    SELECT_PRODUCT_ERROR="[Products] SELECT product ERROR"
}


export class GetALLProductsAction implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload : any){}

}

export class GetALLProductsSuccessAction implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload : any){}

}

export class GetALLProductsErrorAction implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload : string){}

}


export class SearchProductsAction implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCT;
    constructor(public payload : string){}

}
export class SearchProductsActionSuccess implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCT_SUCCESS;
    constructor(public payload : any){}

}
export class SearchProductsActionError implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCT_ERROR;
    constructor(public payload : any){}

}


export class SelectProductsAction implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
    constructor(public payload : any){}

}
export class SelectroductsActionSuccess implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
    constructor(public payload :any){}

}
export class SelectProductsActionError implements Action{

    type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
    constructor(public payload : any){}

}

export type ProductsActions = GetALLProductsAction | GetALLProductsSuccessAction | GetALLProductsErrorAction  | SearchProductsAction |SearchProductsActionSuccess |SearchProductsActionError
   |SelectProductsAction| SelectroductsActionSuccess| SelectProductsActionError  ;

