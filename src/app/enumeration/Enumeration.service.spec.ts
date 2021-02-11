/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnumerationService } from './Enumeration.service';

describe('Service: Enumeration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnumerationService]
    });
  });

  it('should ...', inject([EnumerationService], (service: EnumerationService) => {
    expect(service).toBeTruthy();
  }));
});
