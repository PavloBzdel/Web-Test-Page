import { Component, Input, OnInit } from '@angular/core';
import { rewList } from '../core/reviews-list';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() reviewList: rewList[] = [];
  @Input() indicators = true;
  @Input() controls = true;


  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {}

  selectCard(index:number):void {
    this.selectedIndex = index;
  }
  onPrevClick(): void {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.reviewList.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick():void{
    if(this.selectedIndex === this.reviewList.length - 1){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
