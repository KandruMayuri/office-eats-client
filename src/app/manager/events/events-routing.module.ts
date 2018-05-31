import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent,
    children: [
      {
        path: '', redirectTo: 'events', pathMatch: 'full'
      },
      {
        path: '', loadChildren: './event-list/event-list.module#EventListModule'
      },
      {
        path: 'new', loadChildren: './new-event/new-event.module#NewEventModule'
      },
      {
        path: 'view/:id', loadChildren: './view-event/view-event.module#ViewEventModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
