import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-logged-in',
  templateUrl: './header-logged-in.component.html',
  styleUrls: ['./header-logged-in.component.scss'],
})
export class HeaderLoggedInComponent  implements OnInit {

  @Input() titulo:string = 'Camellos Food (Logged)'  //<==========

  constructor() { }

  ngOnInit() {}

}
