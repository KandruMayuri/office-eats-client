import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { NewEventRoutingModule } from './new-event-routing.module';
import { NewEventComponent } from './new-event.component';

import { EventsService } from '../events.service';

import { CommonInterceptor } from '../../../shared/interceptors/common.interceptor';
import { TokenInterceptor } from '../../../shared/interceptors/token.interceptor';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    NewEventRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCarouselModule,
    ToastModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    SelectButtonModule,
    CurrencyMaskModule,
    ModalModule
  ],
  declarations: [NewEventComponent],
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
export class NewEventModule { }
