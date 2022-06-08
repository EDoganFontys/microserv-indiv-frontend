import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponentComponent } from './components/agenda-component/agenda-component.component';
import { AuthenticationComponentComponent } from './components/authentication-component/authentication-component.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponentComponent } from './components/register-component/register-component.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    AgendaComponentComponent,
    AuthenticationComponentComponent,
    RegisterComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AgendaComponentComponent],
})

// @ts-ignore
export class AppModule {
}
