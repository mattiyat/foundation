import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard'
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent}, // , canActivate: [AuthGuard] 
  { path: 'item', component: ItemComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
