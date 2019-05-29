import { Component, OnInit } from "@angular/core";
import { Restaurant } from "./restaurant/restuarant.model";
import { RestaurantsService } from "./restaurants.service";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.css"]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantsServices: RestaurantsService) {}

  ngOnInit() {
    this.restaurantsServices
      .restaurants()
      .subscribe(restaurants => (this.restaurants = restaurants));
  }
}
