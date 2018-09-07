import { TestBed, inject } from '@angular/core/testing';

import { OperationalsiteService } from './operationalsite.service';

describe('OperationalsiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationalsiteService]
    });
  });

  it('should be created', inject([OperationalsiteService], (service: OperationalsiteService) => {
    expect(service).toBeTruthy();
  }));
});
