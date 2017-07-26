import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdGridListModule,
  MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdSidenavModule, MdSnackBarModule, MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MdTooltipModule,
    MdInputModule,
    MdSidenavModule,
    MdGridListModule,
    MdSnackBarModule
  ],
  exports: [
    MdTooltipModule,
    MdInputModule,
    MdSidenavModule,
    MdGridListModule,
    MdSnackBarModule
  ]
})
export class AppMaterialModule {
}
