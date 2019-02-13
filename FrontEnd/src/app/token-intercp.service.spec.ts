import { TestBed, inject } from '@angular/core/testing';

import { TokenIntercpService } from './token-intercp.service';

describe('TokenIntercpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenIntercpService]
    });
  });

  it('should be created', inject([TokenIntercpService], (service: TokenIntercpService) => {
    expect(service).toBeTruthy();
  }));
});
