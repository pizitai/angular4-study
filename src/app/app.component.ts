import { Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterContentInit,AfterContentChecked,
AfterViewInit{
  ngAfterViewInit(): void {
    console.log('父组件视图内容初始化完毕');
  }
  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕');
    this.message='hello world'
  }
  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕');
  }
  ngOnInit(): void {
    console.log('aa');   
  }
  title:string='app works';
  message:string='hello';
}
