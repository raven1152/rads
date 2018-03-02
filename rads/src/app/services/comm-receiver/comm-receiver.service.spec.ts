import { TestBed, inject } from '@angular/core/testing';

import { CommReceiverService } from './comm-receiver.service';

describe('CommReceiverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommReceiverService]
    });
  });

  it('should be created', inject([CommReceiverService], (service: CommReceiverService) => {
    expect(service).toBeTruthy();
  }));
});
