import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../node_modules/ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  indiceUser : number;
  indiceProduit : number;
  display : number=0;
  tab_user : number=0;
  tab_vente : number = 0;

  displayUser(){
    this.display =1;
  }
  displayProduit(){
    this.display =2;
  }
  displayVente(){
    this.display =3;
  }
  filtreReliquat:string;
  listReliquat:any= [];
  displayReliquat(){
    this.display = 4 ;
   
    
  }
  // journal
  noJournal:any;
  Journal = [
    {id : 1, date: '2018-09-14T10:21:49.775Z',ref : 'PFGM', entree : 14,sortie : 13,commentaire : ''}
  ]
  addJournal ={id : 0, date: '',ref : '', entree : 0,sortie : 13,commentaire : ''}
  journalByProd:any;
  getJournal(i : number){
    this.journalByProd = this.produit[i].ref;
    console.log(this.journalByProd);
  }
  // journal
  produit = []
  user = [];
  modalRef1: BsModalRef;
  openModal1(template1: TemplateRef<any>) {
    this.modalRef1 = this.modalService.show(template1);
  }

  modalRef9: BsModalRef;
  openModal9(template9: TemplateRef<any>) {
    this.modalRef9 = this.modalService.show(template9);
  }
  
  modalRef10: BsModalRef;
  openModal10(template10: TemplateRef<any>) {
    this.modalRef10 = this.modalService.show(template10);
  }
  modalRef2: BsModalRef;
  openModal2(template2: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template2);
  }
  maxId: number;
  getMaxId(){
    this.id=0
    for(let u of this.user){
      if(u.id > this.id){
        this.id = u.id;    
      }
    }
    this.maxId=this.id +1;  
  }
  id:number;
  nom:string;
  prenom : string;
  login : string;
  password : string;
  getId(i: number){
    this.id = this.user[i].id;
    this.nom = this.user[i].nom;
    this.prenom = this.user[i].prenom;
    this.login = this.user[i].login;
    this.password = this.user[i].password;
  }

  updateUser(){
    this.adminService.UpdateAgent(this.id,this.nom,this.prenom,this.login,this.password).then(res =>{
      console.log(res['message']);
    });
    this.adminService.listeAgent().then( res => {
      this.user = res['message'];
    });
    this.id = null;
    this.nom = null;
    this.prenom = null;
    this.login = null;
    this.password = null;
  }

  add(){
    this.adminService.addAgent(this.nom,this.prenom,this.login,this.password);

    this.adminService.listeAgent().then( res => {
      this.user = res['message'];
    });

   
    this.nom = null;
    this.prenom = null;
    this.login = null;
    this.password = null;
  }

  index:any;
  modalRef7: BsModalRef;
  openModal7(template7: TemplateRef<any>) {
    this.modalRef7 = this.modalService.show(template7);
  }
  deleteUser(){
    this.index = this.user[this.indiceUser].id;
    console.log(this.index);
    
    this.adminService.deleteAgent(this.index).then(res =>{
      console.log(res);
    });
    this.adminService.listeAgent().then( res => {
      this.user = res['message'];
    });
  }
  delete(i :number){
    this.indiceUser = i;
  }
  //produit stock et vente
  
  in:any;
  modalRef8: BsModalRef;
  openModal8(template8: TemplateRef<any>) {
    this.modalRef8 = this.modalService.show(template8);
  }
  deleteProduit(){
    this.in = this.produit.indexOf(this.produit[this.indiceProduit])
    this.produit.splice(this.in, 1);
  }
  deleteP(i :number){
    this.indiceProduit = i;
    
  }
  modalRef3: BsModalRef;
  openModal3(template3: TemplateRef<any>) {
    this.modalRef3 = this.modalService.show(template3);
  }

  
  modalRef4: BsModalRef;
  openModal4(template4: TemplateRef<any>) {
    this.modalRef4 = this.modalService.show(template4);
  }
  modalRef5: BsModalRef;
  openModal5(template5: TemplateRef<any>) {
    this.modalRef5 = this.modalService.show(template5);
  }
  stock:number;
 
 //approvisionnemnt de stock
 filtre:string;
 filtreVente:number;
 tout(){
  this.filtreVente=null;
  
 }
 rcu(){
  this.filtreVente=3;
 }
 encaisser(){
  this.filtreVente=2;
 }
 NonEencaisser(){
  this.filtreVente=1;
 }
 //vente de produit
 modalRef6: BsModalRef;
 openModal6(template6: TemplateRef<any>) {
   this.modalRef6 = this.modalService.show(template6);
 }
 Vente = [
  {id : 1, date : '2018-09-14T10:21:49.775Z',nomClient:'Naby NDIAYE',adresseClient : 'Parcelle',telClient : '772228596',chargement:1000,restChergement:10,packGM:0,puGM:2000 ,packPM:50,puPM : 1000, remise:2,total:250000,encasse:150000,nonEncaisse:100000,facture:'F001',commentaire:'', agent : 'Abdou',etat:3 },
  {id : 2, date : '2018-09-14T10:21:49.775Z',nomClient:'Abdou',adresseClient : 'Diamalaye',telClient : '779854080',chargement:1000,restChergement:10,packGM:0,puGM:2000 ,packPM:50,puPM : 1000, remise:2,total:250000,encasse:250000,nonEncaisse:0,facture:'F001',commentaire:'', agent : 'Abdou',etat:1 },
  {id : 3, date : '2018-09-14T10:21:49.775Z',nomClient:'Abdou',adresseClient : 'Diamalaye',telClient : '779854080',chargement:1000,restChergement:10,packGM:0,puGM:2000 ,packPM:50,puPM : 1000, remise:2,total:250000,encasse:250000,nonEncaisse:0,facture:'F001',commentaire:'', agent : 'Abdou',etat:2 },
  {id : 1, date : '2018-09-14T10:21:49.775Z',nomClient:'Cheick DIANKO',adresseClient : 'Parcelle',telClient : '772228596',chargement:1000,restChergement:10,packGM:0,puGM:2000 ,packPM:50,puPM : 1000, remise:2,total:250000,encasse:150000,nonEncaisse:100000,facture:'F001',commentaire:'', agent : 'Abdou',etat:3 },

]
IdVente:number;
MontentVersement:number;
getIdForVente(i){
  this.IdVente = this.Vente[i].id;
  console.log(this.IdVente);
  
}
venteDetail:any;
Detail(i){
  this.venteDetail = this.Vente[i];
}
versement(){
  console.log( this.IdVente);
  for(let v of this.Vente){
    if(v.id == this.IdVente && v.etat==2){
      v.nonEncaisse = this.MontentVersement;
      v.etat = 3
    }
  }
  console.log( this.IdVente);
  this.MontentVersement = null;
  this.IdVente = null;  
}
getColor(etat){
  switch(etat){
    case 1:
     return 'red';
    case 2:
     return 'orange';
    case 3 :
     return 'green';
  }
}
 //addVente = {
  //id : 1, date : '',nomClient:'',adresseClient : '',telClient : '',chargement:'',pack:'' ,prixUnitaire : 0,quantite:0, remise:0,total:0,encasse:0,nonEncaisse:0,designation : '', agent : '' }
  idVente :number;
  pu :number;
  qteVente : number;
  prodVendu : string;
 vendre(i : number){
    this.prodVendu = this.produit[i].article;
    this.pu = this.produit[i].prix;
    this.idVente = 0;
    for(let v of this.Vente){
        if(v.id == this.idVente){
          this.idVente = v.id;
        }
    }
    this.idVente = this.idVente + 1;
 }
 /*vente(){
//  id : 0, quantite : 0 ,prixUnitaire : 0, montant : 0 , agent : '', date : null

  this.addVente.total = this.addVente.quantite * this.addVente.prixUnitaire;
  this.addVente.agent = this.userName;
  this.addVente.date = new Date().toJSON();
  for(let p of this.produit){
    if(p.ref == this.addVente.designation){
      p.qtStock = p.qtStock - this.addVente.quantite;
    }
  }
  for(let v of this.Vente){
    if(v.id > this.addVente.id ){
      this.addVente.id =v.id
    }
  }
  this.addVente.id  = this.addVente.id +1;
  this.Vente.push(this.addVente);
  
  console.log(this.Vente);
  
  

  
 }*/
 //vente de produit
 maxIdP : number;
  idP : number;
  ref:string;
  nomP:string;
  prix:number;
  qte:number;
  stockInitial:number;
  entree:number;
  sortie:number;
  getMaxIdP(){
    this.idP = 0;
    for(let p of this.produit){
      if(p.id > this.idP){
        this.idP = p.id;
      }
    }
    this.maxIdP = this.idP+1;
  }
  getIdP(i : number){
    this.idP = this.produit[i].id;
    this.nomP = this.produit[i].nom;
    this.ref = this.produit[i].ref;
    this.prix = this.produit[i].prixUnitaire;
    this.stockInitial = this.produit[i].stockInitial;
    this.entree = this.produit[i].entree;
    this.sortie = this.produit[i].sortie;
    this.qte = this.produit[i].stockFinal;
  }
  maxIdJournal:number;
  refForJournale:string;
  updateProd(){
    this.adminService.UpdateArticle(this.idP,this.ref,this.nomP,this.prix,this.stockInitial,this.entree,this.sortie,this.qte,this.stock).then(res =>{
      console.log(res);
      
    })
    for(let p of this.produit){
      if(p.id == this.idP){
        p.id = this.idP;
        p.article = this.nomP;
        p.ref = this.ref;
        p.prix = this.prix;
        p.qtStock = this.qte; 
        p.qtStock = p.qtStock + this.stock;
        this.refForJournale = p.ref;
      }
      //  addJournal ={id : 0, date: '',ref : '', entree : 0,sortie : 13,commentaire : ''}

    }
    
    if(this.stock > 0){
      this.maxIdJournal=0;
        for(let j of this.Journal){
          if(j.id > this.maxIdJournal){
            this.maxIdJournal = j.id;
          }
        }
        this.addJournal.id = this.maxIdJournal+1;
        this.addJournal.date = new Date().toJSON();
        this.addJournal.ref = this.refForJournale;
        this.addJournal.entree = this.stock;
        this.addJournal.sortie = 0;
        this.addJournal.commentaire = "";
        this.Journal.push(this.addJournal);
        
    }
    console.log(this.Journal);
    
    this.stock = null;
    this.nomP = null;
    this.ref = null;
    this.prix = null;
    this.qte = null;
    this.journalByProd = null;
  }
  
  addProd = {id : 0, ref : "", article : "", prix : 0, qtStock : 0}
  addP(){
    this.addProd.id = this.maxIdP;
    this.addProd.ref = this.ref;
    this.addProd.article = this.nomP;
    this.addProd.prix = this.prix;
    this.addProd.qtStock = this.qte;
    this.produit.push(this.addProd);
    //this.addProd = null;
    this.maxIdP=null;
    this.idP = null;
    this.nomP = null;
    this.ref = null;
    this.prix = null;
    this.qte = null;
    
  }
  //produit stock et vente
  deconnexion(){
    this.router.navigate(['/login']);
    //this.userName=null;
  }
  constructor(private modalService: BsModalService,private router: Router,public adminService:AuthServiceService) { }
  userName:string;
  profile : string;
  datejourVente:any;
  ngOnInit() {
    this.adminService.listeAgent().then( res => {
      this.user = res['message'];
    });
    this.adminService.listeArticle().then(res =>{
      this.produit=res['message'];
    });
    this.datejourVente= new Date().toLocaleDateString();
    console.log(this.datejourVente);
    
    this.userName = localStorage.getItem("userName")
    this.profile = localStorage.getItem("profile")
    for(let v of this.Vente){
      if(v.total > v.encasse){
        this.listReliquat.push(v);
      }
    }
    console.log(this.listReliquat);
  }

}
