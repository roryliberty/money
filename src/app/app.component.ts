import {Component, OnInit} from '@angular/core';
import { PersonModel } from "./person.model";
import {map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public people: PersonModel[] = [];

  public form =  {
    firstName: '',
    lastName: ''
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.onGetData();
  }

  onSubmit(data: PersonModel) {
    this.http.post('https://money-81492-default-rtdb.firebaseio.com/coinbase.json', data).subscribe();
  }

  onGetData() {
    this.http.get<{ [key: string]: PersonModel }>('https://money-81492-default-rtdb.firebaseio.com/coinbase.json')
      .pipe(map(responseData => {
          const dataArray: PersonModel[] = [];
          Object.keys(responseData).forEach(key => dataArray.push({ ...responseData[key], id: key }));
          return dataArray;
        })
      )
      .subscribe(post => {
      this.people = post;
    });
  }
}
