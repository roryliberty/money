import {Component, OnInit} from '@angular/core';
import { DataModel } from "./data.model";
import { map } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public form =  {
    coinBase: '',
    acorns: ''
  }
  public data: DataModel[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.onGetData();
  }

  onSubmit(data: DataModel) {
      this.http.post<{ name: string }>('https://money-81492-default-rtdb.firebaseio.com/coinbase.json', data).subscribe();

  }

  onGetData() {
    // [] = placeholder property name
    // [key: string] means any string key that we have in this object (the funky id Firebase assigns automatically)
    // : DataModel means that the [key: string] property will hold a DataModel
    this.http.get<{ [key: string]: DataModel }>('https://money-81492-default-rtdb.firebaseio.com/coinbase.json')
      .pipe(map(responseData => {
        const newArray: DataModel[] = [];
        // 1- Loop through all the keys (the actual thing I'm looking for) and create a new array
        // 1a- for-in because responseData is an object
        for(const key in responseData) {
          // 3- Checking that responseData object has a key so that I don't try to access the property of a prototype?
          if(responseData.hasOwnProperty(key)) {
            // 2- push the key in nested responseData object to the newArray
            // 2a- create new key-value pair that stores the key
            newArray.push({ ...responseData[key], id: key })
          }
        }
        // 4- make sure to return the newArray
        return newArray;
      }))
      .subscribe(info => {
        this.data = info;
        console.log(info);
      });
  }
}
