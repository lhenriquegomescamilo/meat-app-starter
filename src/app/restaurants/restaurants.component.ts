import { Component, OnInit } from '@angular/core';
import { Restaurant } from "app/restaurants/cards-restaurant/restaurant-model";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor() { }

  ngOnInit() {
    this.restaurants = [
      {
        id: "bread-bakery",
        name: "Bread & Bakery",
        category: "Bakery",
        deliveryEstimate: "25m",
        rating: 4.9,
        imagePath: "assets/img/restaurants/breadbakery.png",
      },
      {
        id: "burger-house",
        name: "Burger House",
        category: "Hamburgers",
        deliveryEstimate: "100m",
        rating: 3.5,
        imagePath: "assets/img/restaurants/burgerhouse.png"
      },
    ]
  }

}
