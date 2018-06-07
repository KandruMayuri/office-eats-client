import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../events/events.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  public eventId: number;
  public restaurants: Restaurant[];

  constructor( private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService) {
    this.activatedRoute.parent.params.subscribe( params => {
      this.eventId = params.id;
    });
  }

  ngOnInit() {
    this.eventsService.getEventRestaurants(this.eventId).subscribe(data => {
      if (data.obj_response.status === 200) {
        this.restaurants = data.result[0].Restaurant;
      }
    });
  }

  chooseRestaurant(restaurantId: number) {
    this.router.navigate(['manager/orders/restaurant', restaurantId]);
  }

}
