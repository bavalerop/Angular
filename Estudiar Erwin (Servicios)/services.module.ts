import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QcService } from './analitic/qc/qc.service';
import { ResultsService } from './analitic/results/results.service';
import { TrackingService } from './analitic/tracking/tracking.service';
import { LisService } from './communications/lis/lis.service';
import { StatisticsService } from './postanalitic/statistics/statistics.service';
import { CheckService } from './preanalitic/check/check.service';
import { WorklistService } from './preanalitic/worklist/worklist.service';
import { ControlService } from './settings/quality/control/control.service';
import { LotService } from './settings/quality/lot/lot.service';
import { MeansService } from './settings/quality/means/means.service';
import { WestgardService } from './settings/quality/westgard/westgard.service';
import { MicroorganismsService } from './settings/tests/microbiology/microorganisms/microorganisms.service';
import { AntibioticsService } from './settings/tests/microbiology/antibiotics/antibiotics.service';
import { AnatomicSitesService } from './settings/tests/microbiology/anatomic-sites/anatomic-sites.service';
import { ReferenceValueService } from './settings/tests/reference-value/reference-value.service';
import { SamplesService } from './settings/tests/samples/samples.service';
import { TestService } from './settings/tests/test/test.service';
import { UsersService } from './settings/users/users.service';
import { ApiService } from './common/api/api.service';
import { JwtService } from './common/jwt/jwt.service';
import { AuthenticationService } from './login/authentication.service';
import { MainSettingsService } from './mainSettings/mainSettings.service';
import { DriverService } from './../services/communications/clinical/drivers/driver.service';
import { DriversComponent } from './../core/communications/clinical/drivers/component/drivers.component';
import { ConnectionServices } from './communications/clinical/connections/connection.service';
import { InterpretationService } from './settings/tests/interpretation/interpretation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DriversComponent],
  providers: [
    QcService,
    ResultsService,
    TrackingService,
    LisService,
    StatisticsService,
    CheckService,
    WorklistService,
    ControlService,
    LotService,
    MeansService,
    WestgardService,
    MicroorganismsService,
    AntibioticsService,
    AnatomicSitesService,
    ReferenceValueService,
    SamplesService,
    TestService,
    InterpretationService,
    UsersService,
    ApiService,
    JwtService,
    AuthenticationService,
    MainSettingsService,
    DriverService,
    ConnectionServices
  ]
})
export class ServicesModule { }
