import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EncodeRoutingModule, routedComponents } from './encode-routing.module';



@NgModule({
  declarations: [routedComponents],
  imports: [
    CommonModule,
    EncodeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EncodeModule { }
