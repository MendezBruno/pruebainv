import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal') theModal: ElementRef;
  constructor() { }

  ngOnInit() {
    window.addEventListener("click", this.windowOnClick.bind(this));
  }

  toggleModal() {
        this.theModal.nativeElement.classList.toggle("show-modal");
  }

  windowOnClick(event) {
        if (event.target === this.theModal) {
            this.toggleModal();
        }
  }

    
}
