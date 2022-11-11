import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path: "user",
    loadChildren: () => import('./user/user.module').then(m =>m.UserModule)
  },

  {path:"home", component:HomeComponent},
 /* {path:"user", component:UserComponent, children:[
    {path:"user-details/:id", component:UserDetailsComponent},
  ]},*/
  {path: "**", component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
