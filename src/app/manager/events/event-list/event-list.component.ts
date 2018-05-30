import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ConfirmationService } from 'primeng/api';
import { EventsService } from '../events.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [ConfirmationService]
})
export class EventListComponent implements OnInit {
  public events: Event[];
  public isNoEvents: boolean;

  constructor(
    private titleService: Title,
    private router: Router,
    public toastr: ToastsManager,
    private eventsService: EventsService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Events | Office Eats');
    this.isNoEvents = false;
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe(data => {
      if (data.obj_response.status === 200) {
        this.events = data.result;
      }
    });
  }

  newEvent() {
    this.router.navigate(['/manager/events/new']);
  }

  removeEvent(event: Event) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this event?',
      accept: () => {
         this.eventsService.deleteEvent(event.eventId).subscribe(data => {
          if (data.obj_response.status === 201) {
            this.getEvents();
            this.toastr.success(data.obj_response.message, 'Success!', { dismiss: 'controlled', showCloseButton: true, toastLife: 4000 });
          }
         });
      }
  });
  }
}
