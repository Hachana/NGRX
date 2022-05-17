import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetALLProductsAction, SearchProductsAction, SelectProductsAction } from 'app/ngrx/products.actions';
import { ProductsState, ProductsStateEnum } from 'app/ngrx/products.reducer';
import { ProductService } from 'app/product.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    products; mode; pr; prodId;
    productState$ : Observable<ProductsState> | null= null;
    DataStateEnum =ProductsStateEnum;
    searchCriteria =  " ";
    constructor(private prodservice:ProductService,private store:Store<any>) {
       }
    ngOnInit(){
     /* this.getAll();*/
      this.productState$= this.store.pipe(
        map((state)=>state.catalogState)
      );
    }

    getAllProd(){
      this.store.dispatch(new GetALLProductsAction({}))
    }

    getAll(){
      return this.prodservice.getProducts().subscribe( resp=>{
            this.products=resp;
            console.log(resp);
      },err=>{
        console.log("erreur recuperation des produits");
        alert("erreur recuperation des produits ")
      })
  }
   toUpdate(p){
    this.mode="modif";
   this.pr=p;
   this.prodId=p.id;
   }
  updateNormal(p){
    console.log("modifier !")
    console.log(p);
    p.id=this.prodId;
    return this.prodservice.updateProduct(p).subscribe( resp=>{
      console.log(resp);
      this.mode="";
},err=>{
  console.log("erreur modif des produits");
  alert("erreur modif des produits ")
})
  }
  delete(p){
    if(confirm("Are you sure to delete "+p.designation)) {

    console.log("delete !")
    console.log(p.designation);
    return this.prodservice.deleteProduct(p).subscribe( resp=>{
      console.log(resp);
      this.mode="";
      this.getAll();


},err=>{
  console.log("erreur delete des produits");
  alert("erreur delete des produits ")
})
  }
}
toAdd(){
  this.mode="ajout";
}

addProd(prod)
{
  console.log("ajout !")
    console.log(prod);
     this.prodservice.addProduct(prod).subscribe( resp=>{
      console.log(resp);
      this.mode="";
      this.getAll();

},err=>{
  console.log("erreur ajout des produits");
  alert("erreur ajout des produits ")
}) 
}

searchNormal(data){
  console.log(data.designation)
  return this.prodservice.search(data.designation).subscribe( resp=>{
    this.products=resp;
    console.log(resp);
},err=>{
console.log("erreur recuperation des produits");
alert("erreur recuperation des produits ")
})
}

search(data ){

this.searchCriteria=data.designation;
  this.store.dispatch(new SearchProductsAction(this.searchCriteria))
}


update(data){

  this.store.dispatch(new SelectProductsAction(data))
  this.mode="";

}
}































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































    

