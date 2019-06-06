import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hover-button',
  templateUrl: './hover-button.component.html',
  styleUrls: ['./hover-button.component.css']
})
export class HoverButtonComponent implements OnInit {

  @Input() buttonName : string;
  @Input() disabled: boolean = false;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();

  constructor( ) { }

  ngOnInit() {  }

  eventClick() {
    this.event.emit(this.buttonName)
  }

}
