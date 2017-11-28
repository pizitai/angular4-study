import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = []
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating)
    }
  }
  @Input()
  private rating: number = 0;
  private stars: boolean[];
  @Input()
  private readonly: boolean = true;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.stars = []
    // for (let i = 1; i <= 5; i++) {
    //   this.stars.push(i > this.rating)
    // }
    // this.stars = [false, false, true, true, true]
  }
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // this.ngOnInit();
      this.ratingChange.emit(this.rating)
    }
  }

}
