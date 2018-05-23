import { TestBed, inject } from '@angular/core/testing';

import { StateService } from './state.service';
import { StoreService } from './store.service.interface';

describe('StateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StateService,
        { provide: StoreService, useValue: { getAll: () => new Promise( () => {} ) } }
      ]
    });
  });

  it('should be created', inject([StateService], (service: StateService) => {
    expect(service).toBeTruthy();
  }));
});
