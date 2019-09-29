import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Authorization } from '@models/authorization.model';
import { AppState } from '@app/app.state';


@Injectable()
export class AuthGuard implements CanActivate {

	token: any;

	constructor(
		private router: Router,
		private store: Store<AppState>
	)
	{
		this.store
			.select(state => state)
			.subscribe(event =>{
				this.token = event.authorization.token;
			});
	}

	canActivate() {

		if(this.token == 'xyz0987654321')
		{
			return true;
		}

		this.router.navigateByUrl('/login')
	}
}
