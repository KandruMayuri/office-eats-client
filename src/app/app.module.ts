import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorizeGuard } from './shared/guards/authorize.guard';

import { baseURL, baseURLNew } from './shared/constants/base-url';

import { StorageService } from './shared/services/storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgProgressModule.forRoot({
      spinnerPosition: 'left',
      spinner: false,
      color: '#85c525',
      thick: true
    }),
    NgProgressRouterModule,
    NgProgressHttpModule,
    ToastModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [
    AuthorizeGuard,
    StorageService,
    { provide: 'BaseURL', useValue: baseURL },
    { provide: 'BaseURLNew', useValue: baseURLNew }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
