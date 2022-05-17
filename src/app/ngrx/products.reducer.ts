import { Action } from "@ngrx/store";
import { ProductsActions, ProductsActionsTypes } from "./products.actions";

export enum ProductsStateEnum {
    LOADING ="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial"

}
export interface ProductsState {
    products : any,
    errorMessage :string,
    dataState:ProductsStateEnum,
    /* currentProduct */

}

const initState: ProductsState= {
    products : [],
    errorMessage :"",
    dataState:ProductsStateEnum.INITIAL
    /* currentProduct */

}

export function productReducer(state:ProductsState=initState, action : Action ): ProductsState{
   
    switch(action.type) {
        /* Get ALL Produits */
        case ProductsActionsTypes.GET_ALL_PRODUCTS:
            return {...state, dataState:ProductsStateEnum.LOADING  }

            case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
                return {...state, dataState:ProductsStateEnum.LOADED ,products:(<ProductsActions>action).payload }

                case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
                    return {...state, dataState:ProductsStateEnum.ERROR ,errorMessage:(<ProductsActions>action).payload}
      

              /* Search Produits */
                    case ProductsActionsTypes.SEARCH_PRODUCT:
                        return {...state, dataState:ProductsStateEnum.LOADING  }

                        case ProductsActionsTypes.SEARCH_PRODUCT_SUCCESS:
                            return {...state, dataState:ProductsStateEnum.LOADED ,products:(<ProductsActions>action).payload }
            
                            case ProductsActionsTypes.SEARCH_PRODUCT_ERROR:
                                return {...state, dataState:ProductsStateEnum.ERROR ,errorMessage:(<ProductsActions>action).payload}
            
                           /* Select Produits */
                                case ProductsActionsTypes.SELECT_PRODUCT:
                                    return {...state, dataState:ProductsStateEnum.LOADING  }
            
                                    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
                                       let product=(<ProductsActions>action).payload;
                                       console.log("Produit in reducer :"+product)
                                       let products=state.products.map(p=>(p.id==product.id)?product:p)
                                        return {...state, dataState:ProductsStateEnum.LOADED ,products:products }
                        
                                        case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
                                            return {...state, dataState:ProductsStateEnum.ERROR ,errorMessage:(<ProductsActions>action).payload}               
    
            default : return {...state}
    }
}