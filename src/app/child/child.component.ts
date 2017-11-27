import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
  @Input()
  greeting: string;
  @Input()
  user: { name: string };
  message: string = '初始化消息';

  constructor() { }

  ngOnInit() {
  }

}
