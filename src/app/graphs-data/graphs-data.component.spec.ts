import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsDataComponent } from './graphs-data.component';

describe('GraphsDataComponent', () => {
  let component: GraphsDataComponent;
  let fixture: ComponentFixture<GraphsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphsDataComponent]
    });
    fixture = TestBed.createComponent(GraphsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
