import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from "../../person.model";
import {ActivatedRoute, ParamMap, Params, Route} from "@angular/router";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() public index: number = 0;
  @Input() public person: PersonModel = { firstName: '', lastName: '' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {

      console.log(params);
    })
  }
}
