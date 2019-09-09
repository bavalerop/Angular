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

import { HotelComponent } from './Components/CrudHotel/hot.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    PaginatePipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
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
