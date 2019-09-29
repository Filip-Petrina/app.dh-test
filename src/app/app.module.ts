import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Interceptors */
import { DefaultHeadersInterceptor } from '@interceptor/default-headers.interceptor';
import { TokenInterceptor } from '@interceptor/token.interceptor';

/* Guards */
import { AuthGuard } from '@guard/auth-guard.service';

/* Store */
import { StoreModule } from '@ngrx/store';
import { authorizationReducer } from '@reducers/authorization.reducer';

/* Services */
import { ExpressService } from '@service/express/express.service';


const INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultHeadersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      authorization: authorizationReducer
    }),
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    ExpressService,
    INTERCEPTORS,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
