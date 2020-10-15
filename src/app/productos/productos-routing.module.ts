import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductosComponent } from './productos.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoPromocionComponent } from './producto-promocion/producto-promocion.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { AuthGuard } from '../auth/auth.guard';

export const routes: Routes = [
    {
      path: '',
      component: ProductosComponent,
      canActivate: [AuthGuard],
      }
];

@NgModule({
    declarations: [
      ProductosComponent,
      ProductoComponent,
      ProductoPromocionComponent,
      SpinnerComponent
    ],
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      ProductosComponent,
      RouterModule
    ],
    providers: [],
})

export class ProductosRoutingModule { }

