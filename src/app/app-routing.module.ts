import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import {PersonComponent} from "./person/person.component";
import {PeopleComponent} from "./people/people.component";

const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'people', component: PeopleComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
