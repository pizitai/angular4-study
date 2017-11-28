import { ChildComponent } from './child/child.component';
import { Component, ViewChild, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit,
  AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
  }
  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
    setTimeout(() => {
      this.message = 'hello';
    }, 0);
  }
  ngOnInit(): void {
    setInterval(() => {
      this.child1.greeting('Tom');
    }, 5000);
  }
  @ViewChild('child1')
  child1: ChildComponent;
  greeting: string = 'Hello';
  message: string;


}
