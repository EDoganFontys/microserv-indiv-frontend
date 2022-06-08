import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponentComponent } from "./components/authentication-component/authentication-component.component";
import { RegisterComponentComponent } from "./components/register-component/register-component.component";
import { AgendaComponentComponent } from "./components/agenda-component/agenda-component.component";

const routes: Routes = [
  {path: 'register', component: RegisterComponentComponent},
  {path: 'login', component: AuthenticationComponentComponent},
  {path: 'agenda', component: AgendaComponentComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
