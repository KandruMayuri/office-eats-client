import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantMenu } from '../../../models/restaurant';
import { EventsService } from '../../../events/events.service';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.scss']
})
export class ViewRestaurantComponent implements OnInit {

  public restaurantId: number;
  public restaurantMenus: RestaurantMenu [];

  constructor( private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService) {
    this.activatedRoute.parent.params.subscribe( params => {
      this.restaurantId = params.id;
    });
  }

  ngOnInit() {
    this.eventsService.getRestaurantMenus(this.restaurantId).subscribe(data => {
      if (data.obj_response.status === 201) {
        this.restaurantMenus = data.result;
      }
    });
  }

  addToCart (restaurantMenu: RestaurantMenu) {
    alert(restaurantMenu.restaurantMenuName +  'add to cart');
  }

}
