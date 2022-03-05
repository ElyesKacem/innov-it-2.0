import { TestBed } from '@angular/core/testing';

import { InscriValidateurService } from './inscri-validateur.service';

describe('InscriValidateurService', () => {
  let service: InscriValidateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriValidateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
