import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

import { AuthComponent } from './auth.component';

export const routes: Routes = [
    {path: '', component: AuthComponent }
];

@NgModule({
    declarations: [AuthComponent],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        AuthComponent,
        RouterModule
    ],
    providers: [CurrencyPipe],
})

export class AuthRoutingModule { }
