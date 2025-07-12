/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExamsService } from './exams.service';

describe('Service: Exams', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamsService]
    });
  });

  it('should ...', inject([ExamsService], (service: ExamsService) => {
    expect(service).toBeTruthy();
  }));
});
