import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

// import material
import {MaterialModule} from '@angular/material';
// use for animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// AceEditor Module
import {AceEditorModule} from 'ng2-ace-editor';

import {AppComponent} from './app.component';
import {TemplatesComponent} from './components/templates/templates.component';
import {HomeComponent} from './components/home/home.component';
import {MyWorksComponent} from './components/my-works/my-works.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ContactComponent} from './components/contact/contact.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AsideComponent} from './components/aside/aside.component';
import {MainComponent} from './components/main/main.component';
import {AppMaterialModule} from './modules/material/app-material.module';
import {ScreenService} from './services/screen.service';
import {SharedMaterialModule} from './modules/material/shared-material.module';

const mainRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'work', component: MyWorksComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
  {path: 'about', loadChildren: './modules/about/about.module#AboutModule'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    HomeComponent,
    MyWorksComponent,
    PageNotFoundComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AceEditorModule,
    RouterModule.forRoot(mainRoutes),

    AppMaterialModule,
    SharedMaterialModule
  ],
  providers: [ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
