import { Component, OnInit } from '@angular/core';
import {PersonModel} from "../person.model";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public people: PersonModel[]  = [];
  // Tells me which person is currently selected
  public idNumber: number = 0;

  public form =  {
    firstName: '',
    lastName: ''
  }

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.onGetData();
    this.httpService.people.subscribe(array => {
      this.people = array;
    })
  }

  onSubmit(data: PersonModel) {
    this.httpService.submitData(data);
    this.form.firstName = '';
    this.form.lastName = '';
  }

  onGetData() {
    this.httpService.getData();
  }

  onSelectItem(index: number) {

  }
}
