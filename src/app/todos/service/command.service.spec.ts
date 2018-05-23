import { TestBed, inject } from '@angular/core/testing';

import { CommandService } from './command.service';
import { StoreService } from './store.service.interface';

describe('CommandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommandService,
        { provide: StoreService, useValue: { getAll: () => new Promise( () => {} ) } }
      ]
    });
  });

  it('should be created', inject([CommandService], (service: CommandService) => {
    expect(service).toBeTruthy();
  }));
});
