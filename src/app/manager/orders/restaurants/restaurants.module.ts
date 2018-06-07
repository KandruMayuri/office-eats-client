import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { EventsService } from '../../events/events.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from '../../../shared/interceptors/common.interceptor';
import { TokenInterceptor } from '../../../shared/interceptors/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    RatingModule
  ],
  declarations: [RestaurantsComponent],
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
export class RestaurantsModule { }
