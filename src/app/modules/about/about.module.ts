import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedMaterialModule} from '../material/shared-material.module';
import {SharedModule} from '../shared/shared.module';

const aboutRoutes: Routes = [
  {path: '', component: AboutComponent}
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild(aboutRoutes),
    SharedMaterialModule,
    SharedModule
  ],
  exports: []
})
export class AboutModule {
}
