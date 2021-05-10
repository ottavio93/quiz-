import { Component, OnInit } from '@angular/core';
import { EnableUserRequest } from '../dto/EnableUserRequest';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  alluser: [];
  admin="ROLE_ADMIN"
  constructor(
    private userService: UserService,
    private token: TokenStorageService,
    private authService :AuthService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.getAllUser().subscribe((data) => {
      this.alluser = data;
      console.log(this.alluser);
    });
  }

  disabledUser(username:string) {
  
  let model2=new EnableUserRequest(username);
        this.authService.disableUser(model2).subscribe((data)=>{
          console.log(username);
          location.reload();
       
        });
      }
 enabledUser(username:string) {
  
  let model2=new EnableUserRequest(username);
        this.authService.enableUser(model2).subscribe((data)=>{
          console.log(username);
          location.reload();
       
        });
      }



}
