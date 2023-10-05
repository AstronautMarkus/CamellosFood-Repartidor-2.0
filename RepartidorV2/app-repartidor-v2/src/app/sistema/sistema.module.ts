import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from './page/login/login.page';
import { HomepagePage } from './page/homepage/homepage.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    IonicModule, 
    ComponentsModule,
  ]
})
export class SistemaModule { }
