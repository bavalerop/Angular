import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaginatePipe } from './Pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { CustomMatPaginatorIntl } from './paginator-es';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { HotelComponent } from './Components/CrudHotel/hot.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CiudadPipe } from './Pipes/ciudad.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    PaginatePipe,
    CiudadPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
