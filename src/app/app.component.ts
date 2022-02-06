import {Component, OnInit} from '@angular/core';
import { PersonModel } from "./person.model";
import {map} from "rxjs";
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public people: PersonModel[] = [];
  public idNumber: number = 0;

  public form =  {
    firstName: '',
    lastName: ''
  }

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.onGetData();
  }

  onSubmit(data: PersonModel) {
    this.httpService.submitData(data);
    this.form.firstName = '';
    this.form.lastName = '';
  }

  onGetData() {
    this.httpService.getData().subscribe(posts => {
      this.people = posts;
    })
  }
}
