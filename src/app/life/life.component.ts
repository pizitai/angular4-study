import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, OnDestroy, AfterViewChecked, SimpleChanges, Input } from '@angular/core';

let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  name: string;
  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }
  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }
  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }
  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    let name = changes["name"].currentValue;
    this.logIt('name属性在ngOnChanges里面的值是：' + name);
  }

  constructor() {
    this.logIt('name属性在constructor里面的值是：' + name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

}
