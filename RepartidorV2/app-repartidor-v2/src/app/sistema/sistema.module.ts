import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from './page/login/login.page';
import { HomepagePage } from './page/homepage/homepage.page';
import { RecoverPasswordPage } from './page/recover-password/recover-password.page';
import { ChangePasswordPage } from './page/change-password/change-password.page';
import { MenuPrincipalPage } from './page/menu-principal/menu-principal.page';
import { StartLoggedPage } from './page/start-logged/start-logged.page';
import { MenuRepaPage } from './page/menu_repa/menu-repa/menu-repa.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LoginPage,
    HomepagePage,
    ChangePasswordPage,
    RecoverPasswordPage,
    MenuPrincipalPage,
    StartLoggedPage,
    MenuRepaPage,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    IonicModule, 
    ComponentsModule,
  ]
})
export class SistemaModule { }
