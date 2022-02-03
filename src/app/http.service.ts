import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataModel } from "./data.model";
import { map, Subject } from "rxjs";


@Injectable({providedIn: 'root'})
export class HttpService {
  public dataReceived: Subject<DataModel> = new Subject<DataModel>();

  constructor(private http: HttpClient) {
  }

  postData(data: DataModel) {
    this.http.post('https://money-81492-default-rtdb.firebaseio.com/coinbase.json', data).subscribe();
  }

  getData() {
    return this.http.get<{ [key: string]: DataModel }>('https://money-81492-default-rtdb.firebaseio.com/coinbase.json')
      .pipe(
        map((responseData:{ [key: string]: DataModel }) => {
          const dataStuff: DataModel[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
              dataStuff.push({ ...responseData[key] });
            }
          }
        }));
  }
}
