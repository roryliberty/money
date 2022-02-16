import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PersonComponent  } from "./people/person/person.component";
import { PeopleComponent} from "./people/people.component";

const routes: Routes = [
  { path: 'people', component: PeopleComponent, children: [
      { path: ':id', component: PersonComponent }
    ] },
  { path: '', redirectTo: '/people', pathMatch: 'full' }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
