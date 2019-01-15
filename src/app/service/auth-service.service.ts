import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //private url:string='http://localhost/app_mounir_backend/';
  private url:string='http://localhost/crmMounirBackend/index.php';
  private header :HttpHeaders;
  constructor(private http:HttpClient) {
    this.header = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  }
  public autentification(login,password): Promise<any>{
    //let params="id="+id;
    let data = JSON.stringify({login:login,password:password});
    let params ='param='+data;
    let link=this.url+"/authenticat/login";
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }
  public tableExploitation(dateDebut,dateFin): Promise<any>{
    //let params="id="+id;
    let data = JSON.stringify({dateDebut:dateDebut,dateFin:dateFin});
    let params ='param='+data;
    let link=this.url+"/authenticat/listExploitation";
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }
  public listeAgent(): Promise<any>{
    //let params="id="+id;
    //let data = JSON.stringify({login:login,password:password});
    //let params ='param='+data;
    let link=this.url+"agent/listeAgent.php";
    return this.http.post(link,null,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }
  public UpdateAgent(id,nom,prenom,login,password,): Promise<any>{
    //let params="id="+id;
    let data = JSON.stringify({id:id,nom:nom,prenom:prenom,login:login,password:password});
    let params ='param='+data;
    let link=this.url+"agent/updatAgent.php";
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }

  public addAgent(nom,prenom,login,password,): Promise<any>{
    //let params="id="+id;
    let data = JSON.stringify({nom:nom,prenom:prenom,login:login,password:password});
    let params ='param='+data;
    let link=this.url+"agent/addAgent.php";
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }
  public deleteAgent(id): Promise<any>{
    //let params="id="+id;
    let data = JSON.stringify({id:id});
    let params ='param='+data;
    let link=this.url+"agent/deleteAgent.php";
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }
  //Article
  public listeArticle(): Promise<any>{
    //let params="id="+id;
    //let data = JSON.stringify({login:login,password:password});
    //let params ='param='+data;
    let link=this.url+"/article/listArticle.php";
    return this.http.post(link,null,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }
  public UpdateArticle(id,ref,nom,prixUnitaire,stockInitial,entree,sortie,stockFinal,newStock): Promise<any>{
    //let params="id="+id;
    let data = JSON.stringify({id:id,ref:ref,nom:nom,prixUnitaire:prixUnitaire,stockInitial:stockInitial,entree:entree,sortie:sortie,stockFinal:stockFinal,newStock:newStock});
    let params ='param='+data;
    let link=this.url+"/article/updatArticle.php";
    return this.http.post(link,params,{headers:this.header}).toPromise().then( res => {console.log(res);return res} ).catch(error => {console.log(error);return 'error' });
  }
}
