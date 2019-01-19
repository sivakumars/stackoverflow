import { TestBed, inject } from '@angular/core/testing';

import { StackoverflowServiceService } from './stackoverflow-service.service';

describe('StackoverflowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StackoverflowServiceService]
    });
  });

  it('should be created', inject([StackoverflowServiceService], (service: StackoverflowServiceService) => {
    expect(service).toBeTruthy();
  }));
});
