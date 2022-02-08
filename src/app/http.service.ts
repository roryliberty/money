import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PersonModel } from "./person.model";
import {map, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpService {
  public people: Subject<PersonModel[]> = new Subject<PersonModel[]>();

  constructor(private http: HttpClient) {
  }

  submitData(data: PersonModel) {
    this.http.post('https://money-81492-default-rtdb.firebaseio.com/coinbase.json', data).subscribe();
  }

  getData() {
    this.http.get<{ [key: string]: PersonModel }>('https://money-81492-default-rtdb.firebaseio.com/coinbase.json')
      .pipe(map(responseData => {
          const dataArray: PersonModel[] = [];
          Object.keys(responseData).forEach(key => dataArray.push({ ...responseData[key], id: key }));
          console.log(dataArray);
          return dataArray;
        })
      ).subscribe(posts => {
        this.people.next(posts);
    });
  }
}
