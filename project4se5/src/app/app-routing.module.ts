import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"addProduct", component:FormProductComponent},
  {path:"", redirectTo:"products", pathMatch:"full"},
  {path:"products", component:ProductsComponent},
  {path:"users", component:ListUserComponent},
  {path:"detail/:id", component:DetailsProductComponent},
  {path:"**", component:NotFoundComponent} //doit être toujours en dernière position
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
