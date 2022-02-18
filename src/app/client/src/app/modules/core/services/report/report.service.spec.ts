import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '@sunbird/shared';
import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from '@sunbird/test-util';
import { BaseReportService } from './report.service';

xdescribe('ReportService', () => {
  configureTestSuite();
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [BaseReportService, ConfigService]
  }));

  it('should be created', () => {
    const service: BaseReportService = TestBed.inject(BaseReportService);
    expect(service).toBeTruthy();
  });
});
