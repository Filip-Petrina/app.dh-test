import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncodeComponent } from './encode.component';

const routes: Routes = [{
	path: '',
	component: EncodeComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EncodeRoutingModule { }

export const routedComponents = [
	EncodeComponent
];