import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit , AfterViewInit,
  AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕');
  }
  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }

  constructor() { }

  ngOnInit() {
  }
  greeting(name:string){
    console.log("hello "+ name);
  }

}
