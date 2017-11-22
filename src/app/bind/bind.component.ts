import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  size: number = 2;
  isBig: boolean = false;
  isDev: boolean = true;
  divClass: string;
  divClass2: any = {
    a: false,
    b: false,
    c: false
  }
  divStyle: any = {
    color: 'red',
    'background-color': 'yellow'
  }

  constructor() {
    setTimeout(() => {
      this.divClass = 'a b c';
      this.isBig = true;
      this.divClass2 = {
        a: true,
        b: true,
        c: true
      };
      this.isDev = false;
      this.divStyle = {
        color: 'yello',
        'background-color': 'red'
      }
    }, 3000)
  }

  ngOnInit() {
  }
}
