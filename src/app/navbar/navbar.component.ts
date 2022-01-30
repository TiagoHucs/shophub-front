import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username = 'João'
  constructor() { }

  ngOnInit(): void {
  }

  signOut(){
    console.log('deslogar');
  }

}
