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


@Injectable()
export class DefaultHeadersInterceptor implements HttpInterceptor {
    
    private httpOptions = {
        headers: new HttpHeaders(),
        withCredentials: true
    };
    
    constructor() {
        this.httpOptions.headers = this.httpOptions.headers.set('Content-Type', 'application/json');
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        request = request.clone(this.httpOptions);
        
        return next.handle(request.clone())
        
    }
    
    
}



