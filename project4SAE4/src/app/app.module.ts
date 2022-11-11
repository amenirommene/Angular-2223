import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ //les composants attachés au module
    AppComponent,
    UserComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]//quels sont les composants à appeler dans le fichier index.html
})
export class AppModule { }
