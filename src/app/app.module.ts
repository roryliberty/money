import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { PersonComponent } from './people/person/person.component';
import { PeopleComponent } from './people/people.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
