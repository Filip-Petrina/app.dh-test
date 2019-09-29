import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable()
export class ExpressService {

constructor(
	private _http: HttpClient,
) { }


post(body, params:string = '') {
	
	
	if(environment.debug) console.log('post()', environment.API_URL + params);
	
	return this._http.post(environment.API_URL + params, JSON.stringify(body))
		.pipe(
			map((res: any) => res)
		)
		
	}
	
}
	