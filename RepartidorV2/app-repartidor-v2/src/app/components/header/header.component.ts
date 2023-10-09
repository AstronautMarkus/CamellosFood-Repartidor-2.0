import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

// Input permite recibir la variable 
  //          por parámetro desde el Html
  @Input() titulo:string = 'Camellos Food'  //<==========
  @Input() showButton = true; // Controla la visibilidad del botón

  constructor() { }

  ngOnInit() {}

}
