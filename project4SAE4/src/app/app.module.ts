import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormProductComponent } from './form-product/form-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ //les composants attachés au module
    AppComponent,
    UserComponent,
    ProductsComponent,
    HomeComponent,
    FormProductComponent,
    DetailsProductComponent,
    NotFoundComponent
  ],
  imports: [//les modules qu'on besoin dans les composants liés à ce module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]//quels sont les composants à appeler dans le fichier index.html
})
export class AppModule { }
