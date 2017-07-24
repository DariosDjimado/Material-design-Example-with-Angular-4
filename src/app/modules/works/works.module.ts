/**
 * Modules
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WorksMaterialModule} from '../material/works-material.module';
import {AceEditorModule} from 'ng2-ace-editor';

/**
 * Components
 */
import {WorksComponent} from './works.component';
import {LearnComponent} from './learn/learn.component';
import {CreateComponent} from './create/create.component';
import {SessionComponent} from './session/session.component';
import {SharedMaterialModule} from '../material/shared-material.module';

const workRoutes: Routes = [
  {
    path: '', component: WorksComponent,
    children: [
      {path: '', redirectTo: 'last-session', pathMatch: 'full'},
      {path: 'learn', component: LearnComponent},
      {path: 'create', component: CreateComponent},
      {path: 'last-session', component: SessionComponent}
    ]
  }
];

@NgModule({
  declarations: [
    WorksComponent,
    LearnComponent,
    CreateComponent,
    SessionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(workRoutes),
    WorksMaterialModule,
    AceEditorModule,
    SharedMaterialModule
  ]
})
export class WorksModule {
}
