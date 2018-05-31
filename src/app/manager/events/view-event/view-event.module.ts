import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEventRoutingModule } from './view-event-routing.module';
import { ViewEventComponent } from './view-event.component';

@NgModule({
  imports: [
    CommonModule,
    ViewEventRoutingModule
  ],
  declarations: [ViewEventComponent]
})
export class ViewEventModule { }
