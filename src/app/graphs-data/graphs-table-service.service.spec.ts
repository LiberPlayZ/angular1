import { TestBed } from '@angular/core/testing';

import { GraphsTableServiceService } from './graphs-table-service.service';

describe('GraphsTableServiceService', () => {
  let service: GraphsTableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphsTableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
