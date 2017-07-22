import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import {MdCardModule, MdInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../material/shared-material.module';

const authRoutes: Routes = [
  {path: '', component: AuthComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    MdCardModule,
    FormsModule,
    MdInputModule,
    SharedMaterialModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule {
}
