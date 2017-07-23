import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
  ],
  exports: [
    FormsModule
  ]
})
export class SharedModule { }
