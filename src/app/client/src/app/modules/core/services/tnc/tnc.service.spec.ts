import { TestBed, inject } from '@angular/core/testing';
import { throwError as observableThrowError, of as observableOf, Observable } from 'rxjs';
import { TncService } from './tnc.service';
import { ConfigService } from '@sunbird/shared';
import { LearnerService } from '@sunbird/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TncService, ConfigService, LearnerService]
    });
  });

  it('should fetch tnc configuration', inject([TncService], (service: TncService) => {
    const mockData = { success: 'success' };
    const learnerService = TestBed.get(LearnerService);
    spyOn(learnerService, 'get').and.returnValue(observableOf(mockData));
    service.getTncConfig().subscribe((data: any) => {
      expect(data).toBe(mockData);
    });
  }));

  it('should not fetch tnc configuration and throw error', inject([TncService], (service: TncService) => {
    const mockError = { 'error': 'error' };
    const learnerService = TestBed.get(LearnerService);
    spyOn(learnerService, 'get').and.returnValue(observableThrowError(mockError));
    service.getTncConfig().subscribe((data: any) => { }, err => {
      expect(err).toBe(mockError);
    });
  }));
});