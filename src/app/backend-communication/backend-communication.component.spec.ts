import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendCommunicationComponent } from './backend-communication.component';

describe('BackendCommunicationComponent', () => {
  let component: BackendCommunicationComponent;
  let fixture: ComponentFixture<BackendCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendCommunicationComponent]
    });
    fixture = TestBed.createComponent(BackendCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
