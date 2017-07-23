import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule
} from '@angular/material';

@NgModule({
  imports: [
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ],
  exports: [
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ]
})
export class SharedMaterialModule {
}
