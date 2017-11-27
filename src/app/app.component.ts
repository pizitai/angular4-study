import {ChildComponent} from './child/child.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.child1.greeting('Tom');
  }
  @ViewChild('child1')
  child1:ChildComponent;
  greeting: string = 'Hello';


}
