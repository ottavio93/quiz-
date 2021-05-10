import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showAdminBoard = false;
  content: string;
  isLoggedIn = false;
  private roles: string[];
  constructor(private userService: UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.getUser()!=null;
    const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
