import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFollowersComponent } from './modal-followers.component';

describe('ModalFollowersComponent', () => {
  let component: ModalFollowersComponent;
  let fixture: ComponentFixture<ModalFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
