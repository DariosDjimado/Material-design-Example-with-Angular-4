import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule, MdMenuModule, MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule,
    MdMenuModule
  ],
  exports: [
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule,
    MdMenuModule
  ]
})
export class SharedMaterialModule {
}
