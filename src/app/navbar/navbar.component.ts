import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { UserDataVO } from './userdata';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userdata: UserDataVO | undefined;

  constructor(private service: NavbarService) { }

  ngOnInit(): void {
    this.service.get().subscribe(res => {
      this.userdata = res;
    })
  }

  signOut() {
    console.log('deslogar');
  }

}
