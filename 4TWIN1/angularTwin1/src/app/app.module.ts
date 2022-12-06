import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './shared/components/error/error.component'
@NgModule({ //méta data
  declarations: [ //liste des composants
    AppComponent, 
    NavbarComponent, 
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [  //liste des modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],  //les services
  bootstrap: [AppComponent]  //quel composant lancer au démarrage de l'application (seulement au niveau du module racine)
})
export class AppModule { }
