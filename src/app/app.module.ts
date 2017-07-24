/**
 * Modules
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './modules/material/app-material.module';
import {SharedMaterialModule} from './modules/material/shared-material.module';
/**
 * Components
 */
import {AppComponent} from './app.component';
import {TemplatesComponent} from './components/templates/templates.component';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ContactComponent} from './components/contact/contact.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AsideComponent} from './components/aside/aside.component';
import {MainComponent} from './components/main/main.component';

/**
 * Services
 */
import {ScreenService} from './services/screen.service';



const mainRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'templates', component: TemplatesComponent},
  {path: 'works', loadChildren: './modules/works/works.module#WorksModule'},
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
    RouterModule.forRoot(mainRoutes),

    AppMaterialModule,
    SharedMaterialModule
  ],
  providers: [ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
