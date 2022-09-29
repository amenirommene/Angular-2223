import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({ //méta data
  declarations: [ //liste des composants
    AppComponent, TestComponent, Test2Component, NavbarComponent, SliderComponent, UserListComponent, FooterComponent, ListAccountComponent
  ],
  imports: [  //liste des modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],  //les services
  bootstrap: [AppComponent]  //quel composant lancer au démarrage de l'application (seulement au niveau du module racine)
})
export class AppModule { }