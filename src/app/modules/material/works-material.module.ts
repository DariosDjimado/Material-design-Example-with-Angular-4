import {NgModule} from '@angular/core';
import {MdTableModule, MdTabsModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';

@NgModule({
  imports: [
    MdTabsModule,
    MdTableModule,
    CdkTableModule
  ],
  exports: [
    MdTabsModule,
    MdTableModule,
    CdkTableModule
  ]
})
export class WorksMaterialModule {
}
