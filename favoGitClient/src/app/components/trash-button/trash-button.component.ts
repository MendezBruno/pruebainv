import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trash-button',
  templateUrl: './trash-button.component.html',
  styleUrls: ['./trash-button.component.css']
})
export class TrashButtonComponent implements OnInit {

  @Output() evento: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  eventClick() {
    this.evento.emit(true);
  }
}
