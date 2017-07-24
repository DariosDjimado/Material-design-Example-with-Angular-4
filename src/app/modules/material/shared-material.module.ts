import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule, MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule
  ],
  exports: [
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule
  ]
})
export class SharedMaterialModule {
}
