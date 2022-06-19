import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponentComponent } from "./components/authentication-component/authentication-component.component";
import { RegisterComponentComponent } from "./components/register-component/register-component.component";
import { AgendaComponentComponent } from "./components/agenda-component/agenda-component.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponentComponent},
  {path: 'login', component: AuthenticationComponentComponent},
  {path: 'agenda', component: AgendaComponentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
