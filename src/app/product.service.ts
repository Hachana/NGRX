import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  host2: string="http://localhost:8090/Products";

  constructor(private http: HttpClient) { }

  getProducts(){
    
    return this.http.get(this.host2+"/getAll");

}

updateProduct(p){
  console.log(this.host2+"/updateProduct/"+p.id);
  console.log(p);

  return this.http.put(this.host2+"/updateProduct/"+p.id,p);

}

deleteProduct(p){
  console.log(this.host2+"/deleteProduct/"+p.id);
  console.log(p);

  return this.http.delete(this.host2+"/deleteProduct/"+p.id,p);
}

addProduct(p){
  console.log(this.host2+"/addProduct");
  console.log(p);

  return this.http.post(this.host2+"/addProduct",p);
}

search(nom : string): Observable<any>{
  if( nom == "")
  {
    console.log("nom is null")
    return this.getProducts();
  }
  return this.http.post(this.host2+"/search",nom);
}


}
