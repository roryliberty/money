import { Component, OnDestroy } from '@angular/core';
import { HttpService } from "./http.service";
import { DataModel } from "./data.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public form =  {
    coinBase: '',
    acorns: ''
  }
  public dataReceivedSubscription: Subscription = new Subscription();
  public finalData: DataModel[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnDestroy() {
    this.dataReceivedSubscription.unsubscribe();
  }

  onSubmit(data: DataModel) {
    this.httpService.postData(data);
  }

  onGetData() {
    this.httpService.getData()
      .subscribe(stuff => {
        console.log(stuff);
        this.finalData = stuff;
      });
  }
}
