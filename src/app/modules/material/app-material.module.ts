import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCardModule, MdGridListModule,
  MdIconModule, MdInputModule, MdListModule, MdSidenavModule, MdSnackBarModule, MdTabsModule, MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MdIconModule,
    MdButtonModule,
    MdTooltipModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule,
    MdGridListModule,
    MdSnackBarModule,
    MdTabsModule
  ],
  exports: [
    MdIconModule,
    MdButtonModule,
    MdTooltipModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule,
    MdGridListModule,
    MdSnackBarModule,
    MdTabsModule
  ]
})
export class AppMaterialModule {
}
