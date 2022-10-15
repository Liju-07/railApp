import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTrainComponent } from './view-train/view-train.component';
import { BindingComponent } from './binding/binding.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'

const app:Routes=[
  {
    path:"",component:ViewTrainComponent
  },
  {
    path:"train",component:ViewTrainComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewTrainComponent,
    BindingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
