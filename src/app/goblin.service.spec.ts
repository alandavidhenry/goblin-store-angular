import { TestBed } from '@angular/core/testing';

import { GoblinService } from './goblin.service';

describe('GoblinService', () => {
  let service: GoblinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoblinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
