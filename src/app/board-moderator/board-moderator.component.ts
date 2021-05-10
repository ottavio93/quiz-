import { Component, OnInit } from '@angular/core';
import { EnableUserRequest } from '../dto/EnableUserRequest';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css'],
})
export class BoardModeratorComponent implements OnInit {
  content: string;
  currentUser: any;
  alluser: [];
 
  constructor(private userService: UserService,  
     private authService :AuthService, private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.getAllUser().subscribe((data) => {
      this.alluser = data;
      console.log(this.alluser);
    });
    this.userService.getModeratorBoard().subscribe(
      (data) => {
        this.content = data;
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
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
