import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ScrollBottomComponent } from './scroll-bottom/scroll-bottom.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgSelectModule } from '@ng-select/ng-select';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    ScrollBottomComponent,
    ScrollTopComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    FormsModule,
    NgbModule,
    NgSelectModule
  ],
  exports: [
    PerfectScrollbarModule,
    ScrollBottomComponent,
    ScrollTopComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgSelectModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
