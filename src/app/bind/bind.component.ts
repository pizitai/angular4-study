import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  nameaa:string = '';
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor() {
  }
}
