import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ //la liste des composants
    AppComponent,
    UserComponent,
    ProductsComponent
  ],
  imports: [ //les modules utilisés dans ce modules : dépendances
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
