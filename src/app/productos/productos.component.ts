import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  categories = [];
  productsByCat = [];
  isLoading: boolean = true;
  constructor(private http: HttpClient) { }

  reqProductos() {
    this.http.get(
      'http://www.mocky.io/v2/5ed0b4443500005b00ff9e02'
    ).pipe(
      tap(res=>{
        this.categories = res["categories"].sort(
          (a, b)=>{
            return a.ordinal - b.ordinal;
          }
        );
        for(let i in this.categories){
          this.productsByCat[i] = res["products"].filter(
            (producto)=>{
              return producto.product_data.categories[0].category_id == this.categories[i].id;
            }
            ).sort(
              (a, b)=>{
                return a.product_data.categories[0].ordinal - b.product_data.categories[0].ordinal;
              }
            );
        }
      })
      ).subscribe(
        resData=>{
          if(!!resData){
            this.isLoading = false;
          }
        }
      );
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.reqProductos();
  }

}
