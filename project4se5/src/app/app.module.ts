import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [ //la liste des composants
    AppComponent,
    UserComponent,
    ProductsComponent,
    ListUserComponent,
    NotFoundComponent,
    DetailsProductComponent,
    FormProductComponent
  ],
  imports: [ //les modules utilisés dans ce modules : dépendances
    BrowserModule,
    AppRoutingModule,
    FormsModule, //utile pour pouvoir utiliser ngModel
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
