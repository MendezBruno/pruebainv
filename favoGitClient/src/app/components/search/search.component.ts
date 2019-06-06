import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GitDataService} from '../../services/git-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();
  query: string;


  constructor() { }

  ngOnInit() {
  }

  onEnterPress(query: any) {
    this.searchQuery.emit(query);
  }
}
