import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GitDataService} from '../../services/git-data.service';

@Component({
  selector: 'app-float-action-button',
  templateUrl: './float-action-button.component.html',
  styleUrls: ['./float-action-button.component.css']
})
export class FloatActionButtonComponent implements OnInit {

  @ViewChild('modal') theModal: any;

  constructor(private githubService: GitDataService) { }

  ngOnInit() {
  }

  login() {
    this.githubService.loginToGitHub();
  }

  seeModal() {
    this.theModal.toggleModal();
  }
}
