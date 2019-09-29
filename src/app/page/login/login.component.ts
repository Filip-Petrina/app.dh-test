import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ExpressService } from '@service/express/express.service';
import { environment } from '@env/environment';

import * as AuthorizationActions from '@actions/authorization.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    public formSubmitted: boolean = false;
    
    public showError: boolean = false;
    public showSuccess: boolean = false;
    
    public errorMsg: string = '';
    public successMsg: string = '';
    
    loginForm = this._fb.group({
        email: ['', [
            Validators.required,
            Validators.email
        ]],
        password: ['',[
            Validators.required,
            Validators.minLength(6),
            //must contain at least 1 digit
            Validators.pattern('.*[0-9].*')
        ]]
    });
    
    //getters for simpler fetching of form fields in html
    get email() { return this.loginForm.get('email'); }
    
    get password() { return this.loginForm.get('password'); }
    
    constructor(
        private _fb: FormBuilder,
        private _expressService: ExpressService,
        private store: Store<AppState>,
        private router: Router
    ) { }
    
    ngOnInit() {
    }
    
    onSubmit() {
        
        //hide server validation messages on each submit
        this.formSubmitted = false;
        this.showError = false;
        this.showSuccess = false;
        
        //client side validation
        if(this.loginForm.status == 'INVALID')
        {
            this.formSubmitted = true;
            return false;
        }
        
        
        let body = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        }
        
        this._expressService.post(body, '/login').subscribe((res) => {
            
            if(environment.debug) console.log('POST /login: SUCCESS', res);
            
            this.successMsg = res.message;
            this.showSuccess = true;
            
            this.storeToken(res.token);

            //time for user to see the successfull login message
            setTimeout(()=>{
                this.router.navigateByUrl('/encode');
            }, 1000)
            
        }, (error) => {
            
            if(environment.debug) console.log('POST /login: ERROR', error);
            
            this.errorMsg = error.error.message;
            this.showError = true;
            
        });
        
        
    }
    
    //save the token in the ngrx store
    storeToken(token) {
        this.store.dispatch(new AuthorizationActions.AddAuthorization({token}) )
    }
    
}
