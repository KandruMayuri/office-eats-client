import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { baseURLNew } from '../../shared/constants/base-url';
import { ObjResponse } from '../../shared/models/user';
import { Event, EventListResponse } from './models/event';
import { GetRestaurantMenusResponse } from '../models/restaurant';

@Injectable()
export class EventsService {
  constructor(private httpClient: HttpClient) {
  }

  private createEventUrl =  baseURLNew + 'events/create';
  private getEventsUrl = baseURLNew + 'events/index/';
  private deleteEventUrl = baseURLNew + '/events/delete';
  private getRestaurantMenusUrl = baseURLNew + '/restaurants/menu/list/';

  createEvent(event: Event) {
    return this.httpClient
      .post<ObjResponse>(
        this.createEventUrl,
        event
      )
      .map(res => {
        return res;
      });
  }

  getEvents() {
    return this.httpClient
      .post<EventListResponse>(
        this.getEventsUrl + '10/1',
        {}
      )
      .map(res => {
        return res;
      });
  }

  deleteEvent(eventId: number) {
    return this.httpClient
    .post<ObjResponse>(
      this.deleteEventUrl,
      {
        eventIDs: [eventId]
      },
    )
    .map(res => {
      return res;
    });
  }

  getRestaurantMenus(restaurantId: number) {
    return this.httpClient
    .post<GetRestaurantMenusResponse>(
      this.getRestaurantMenusUrl + restaurantId,
      {},
    )
    .map(res => {
      return res;
    });
  }
}
