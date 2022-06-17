import { reviewList } from './../core/reviews-list';
import { cardList, List } from './../core/why-list';
import { Component, OnInit } from '@angular/core';
import { rewList } from '../core/reviews-list';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iconList: List[];
  reviewList: rewList[];

  constructor( public router: Router) {
    this.iconList = cardList;
    this.reviewList = reviewList;
   }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  onDownPage(){
    document.getElementById("review")?.scrollIntoView({
      behavior: "smooth",
    })
  }

}
