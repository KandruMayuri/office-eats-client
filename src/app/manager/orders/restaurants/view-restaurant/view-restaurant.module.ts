import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRestaurantRoutingModule } from './view-restaurant-routing.module';
import { ViewRestaurantComponent } from './view-restaurant.component';

import { EventsService } from '../../../events/events.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from '../../../../shared/interceptors/common.interceptor';
import { TokenInterceptor } from '../../../../shared/interceptors/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ViewRestaurantRoutingModule
  ],
  declarations: [ViewRestaurantComponent],
  providers: [
    EventsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ViewRestaurantModule { }
