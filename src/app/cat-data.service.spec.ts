/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatDataService } from './cat-data.service';

describe('CatDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatDataService]
    });
  });

  it('should ...', inject([CatDataService], (service: CatDataService) => {
    expect(service).toBeTruthy();
  }));
});
