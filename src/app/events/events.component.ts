import { Component, OnInit } from '@angular/core';

import { EVENTS } from '../models/mock-events'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = EVENTS;
  selectedEvent: Event;

  constructor() { }

  ngOnInit() {
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

}
