import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ExpressService } from '@service/express/express.service';
import { environment } from '@env/environment';

@Component({
    selector: 'app-encode',
    templateUrl: './encode.component.html',
    styleUrls: ['./encode.component.scss']
})
export class EncodeComponent implements OnInit {
    
    public showError: boolean = false;
    public showSuccess: boolean = false;
    
    public errorMsg: string = '';
    public successMsg: string = '';
    
    public encodedString: string = '';
    
    encodeForm = this._fb.group({
        unEncodedString: ['']
    });
    
    constructor(
        private _fb: FormBuilder,
        private _expressService: ExpressService,
    ) { }
    
    ngOnInit() {
    }
    
    
    onSubmit() {
        
        this.showError = false;
        this.showSuccess = false;

        this.encodedString = '';
        
        
        let body = {
            unEncodedString: this.encodeForm.value.unEncodedString
        }
        
        this._expressService.post(body, '/encode').subscribe((res) => {
            
            if(environment.debug) console.log('POST /encode: SUCCESS', res);
            
            this.successMsg = res.message;
            this.showSuccess = true;
            
            this.encodedString = res.encodedString;
            
        }, (error) => {
            
            if(environment.debug) console.log('POST /encode: ERROR', error);
            
            this.errorMsg = error.error.message;
            this.showError = true;
            
        });
        
        
    }
    
    
}
