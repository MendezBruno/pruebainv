import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal-followers',
  templateUrl: './modal-followers.component.html',
  styleUrls: ['./modal-followers.component.css']
})
export class ModalFollowersComponent implements OnInit {


  @ViewChild('modal') theModal: ElementRef;
  constructor() { }

  ngOnInit() {
    window.addEventListener('click', this.windowOnClick.bind(this));
  }

  toggleModal() {
    this.theModal.nativeElement.classList.toggle('show-modal');
  }

  windowOnClick(event) {
    if (event.target === this.theModal) {
      this.toggleModal();
    }
  }

}
