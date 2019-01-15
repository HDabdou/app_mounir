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
  Error:any=0;
  onConnect(){
   //console.log('ok');
   this.authService.autentification(this.login,this.password).then(res => {
      console.log(res['codeerror']);
      if(res['codeerror'] == true){
        //console.log(res['message'].prenom);
        localStorage.setItem('userName',res['message'].prenom);
        //console.log(localStorage.getItem('userName'));
        this.router.navigate(['/gest-stock']);

      }else{
        this.Error = 1;
      }
   });
  }
  
  constructor(private router: Router,public authService:AuthServiceService) { }

  ngOnInit() {
  }
}
