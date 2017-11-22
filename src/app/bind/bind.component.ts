import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent implements OnInit {
  imgUrl:string="http://placehold.it/400X320";

  constructor() { }

  ngOnInit() {
  }
  doOnClick(event:any){
    console.log(event);
  }
  doOnInput(event:any){
    console.log(event.target.value);  //DOM属性
    console.log(event.target.getAttribute("value"));    //HTML属性
  }
}
