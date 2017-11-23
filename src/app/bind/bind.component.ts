import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
// import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  birthday: Date = new Date();
  pi: number = 3.1415926;
  pii: number = 3;
  size: number = 7;
  ngOnInit(): void {

  }
  constructor() {

  }

}
