import { Injectable } from "@angular/core";
import { act, Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { ProductService } from "app/product.service";
import { Observable, of } from "rxjs";
import { GetALLProductsErrorAction, GetALLProductsSuccessAction, ProductsActions, ProductsActionsTypes, SearchProductsActionError, SearchProductsActionSuccess, SelectProductsActionError, SelectroductsActionSuccess } from "./products.actions";
import { mergeMap,map, catchError } from "rxjs/operators";

@Injectable()
export class ProductsEffects {
 constructor(private prodService : ProductService,private effectActions: Actions){}


 getAllProductsEffect:Observable<Action> = createEffect(()=> {
     return this.effectActions.pipe(
         ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
         mergeMap( (action)=>{
          return this.prodService.getProducts()
          .pipe(map( (data)=> new GetALLProductsSuccessAction (data)),
          catchError((err)=>of(new GetALLProductsErrorAction(err.message)))
         )
         })
 ) ;
});


SearchProductsEffect:Observable<Action> = createEffect(()=> {
    return this.effectActions.pipe(
        ofType(ProductsActionsTypes.SEARCH_PRODUCT),
        mergeMap( (action:ProductsActions)=>{
            console.log("action has come "+action.payload)
         return this.prodService.search(action.payload)
         .pipe(map( (data)=> new SearchProductsActionSuccess (data)),
         catchError((err)=>of(new SearchProductsActionError(err.message)))
        )
        })
) ;
});


SelectProductsEffect:Observable<Action> = createEffect(()=> {
    return this.effectActions.pipe(
        ofType(ProductsActionsTypes.SELECT_PRODUCT),
        mergeMap( (action:ProductsActions)=>{
            console.log("action has come "+action.payload)
         return this.prodService.updateProduct(action.payload)
         .pipe(map( (data)=> new SelectroductsActionSuccess (action.payload)),
         catchError((err)=>of(new SelectProductsActionError(err.message)))
        )
        })
) ;
});
}