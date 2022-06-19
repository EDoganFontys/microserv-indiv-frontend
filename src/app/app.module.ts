import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponentComponent } from './components/agenda-component/agenda-component.component';
import { AuthenticationComponentComponent } from './components/authentication-component/authentication-component.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    AgendaComponentComponent,
    AuthenticationComponentComponent,
    RegisterComponentComponent,
    HomeComponent,
    ProfileComponent
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  exports: [AgendaComponentComponent],
})

// @ts-ignore
export class AppModule {
}
