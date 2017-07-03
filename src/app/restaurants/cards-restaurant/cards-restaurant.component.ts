import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from "app/restaurants/cards-restaurant/restaurant-model";

@Component({
  selector: 'mt-cards-restaurant',
  templateUrl: './cards-restaurant.component.html',
  styleUrls: ['./cards-restaurant.component.css']
})
export class CardsRestaurantComponent implements OnInit {

  @Input()
  restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
