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
    MdSnackBarModule,
    MdMenuModule
  ],
  exports: [
    MdTooltipModule,
    MdInputModule,
    MdSidenavModule,
    MdGridListModule,
    MdSnackBarModule,
    MdMenuModule
  ]
})
export class AppMaterialModule {
}
