import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './page/login/login.page';
import { HomepagePage } from './page/homepage/homepage.page';
import { ChangePasswordPage } from './page/change-password/change-password.page';
import { RecoverPasswordPage } from './page/recover-password/recover-password.page';
import { MenuPrincipalPage } from './page/menu-principal/menu-principal.page';
import { StartLoggedPage } from './page/start-logged/start-logged.page';
import { MenuRepaPage } from './page/menu_repa/menu-repa/menu-repa.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'homepage',
    component: HomepagePage,
  },
  {
    path: 'recover_password',
    component: RecoverPasswordPage,
  },
  {
    path: 'change_password',
    component: ChangePasswordPage,
  },
  {
    path: 'menu_principal',
    component: MenuPrincipalPage,
  },
  {
    path: 'start_logged',
    component: StartLoggedPage,
  },
  {
    path: 'menu_repa',
    component: MenuRepaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
