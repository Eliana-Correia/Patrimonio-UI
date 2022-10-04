import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// caso dê problema no primeng voltar para esse ponto...
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenuItem
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
