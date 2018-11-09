import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginTest:string='admin';
  passwordTest:string='passer';
  login:string='';
  password:string='';
  nomUser:string = "Abdou";
  onConnect(){
   //console.log('ok');
   this.authService.autentification(this.login,this.password).then(res => {
      console.log(res['code']);
      if(res['code'] == 'true'){
        console.log(res['message'].accessLevel);
        if(res['message'].accessLevel ==1	){
          this.router.navigate(['/gest-stock']);
        }
      }
   });
    /*if(this.login==this.loginTest && this.password==this.passwordTest){
      localStorage.setItem('userName' ,this.nomUser);
      localStorage.setItem('profile' ,this.login);
      this.router.navigate(['/accueil']);
      console.log(this.router)
    }else{
      alert("ko")
    }*/
      
   
  }
  constructor(private router: Router,public authService:AuthServiceService) { }

  ngOnInit() {
  }

}
