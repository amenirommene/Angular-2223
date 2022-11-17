import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
//configuration des routes
const routes: Routes = [
  //la liste des routes
  {path:"home", component:HomeComponent},
  {path:"add", component:FormProductComponent},
  {path:"products", component:ProductsComponent},
  //route paramétrée
  {path:"details/:id", component:DetailsProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
