import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HeaderLoggedInComponent } from './header-logged-in/header-logged-in.component';

import { SidemenuComponent } from './sidemenu/sidemenu.component';

import { SidemenuLoggedInComponent } from './sidemenu-logged-in/sidemenu-logged-in.component';

import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HeaderComponent,HeaderLoggedInComponent,SidemenuComponent, SidemenuLoggedInComponent],
  exports:[HeaderComponent,HeaderLoggedInComponent,SidemenuComponent, SidemenuLoggedInComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
