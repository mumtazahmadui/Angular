import { TestBed, inject } from '@angular/core/testing';

import { EmitrefService } from './emitref.service';

describe('EmitrefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitrefService]
    });
  });

  it('should be created', inject([EmitrefService], (service: EmitrefService) => {
    expect(service).toBeTruthy();
  }));
});
