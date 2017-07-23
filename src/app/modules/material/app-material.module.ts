import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdGridListModule,
  MdIconModule, MdInputModule, MdListModule, MdSidenavModule, MdSnackBarModule, MdTabsModule, MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MdTooltipModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdGridListModule,
    MdSnackBarModule,
    MdTabsModule
  ],
  exports: [
    MdTooltipModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdGridListModule,
    MdSnackBarModule,
    MdTabsModule
  ]
})
export class AppMaterialModule {
}
