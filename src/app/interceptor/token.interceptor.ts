import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment.prod';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.state';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    token: any;

    constructor(
        private store: Store<AppState>
    ) {
        this.store
			.select(state => state)
			.subscribe(event =>{
				this.token = event.authorization.token;
			});
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //we want to set the authorization header with token on all requests except for login
        if(!request.url.endsWith('/login'))
		{
            request = request.clone({ setHeaders: { authorization: this.token }})

            return next.handle(request.clone())
        }

        return next.handle(request.clone())

    }
    
    
}

    
    
    