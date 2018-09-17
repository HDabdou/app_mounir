import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../node_modules/ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  indiceUser : number;
  indiceProduit : number;
  tab_produit : number=0;
  tab_user : number=0;
  tab_vente : number = 0;
  displayUser(){
    this.tab_user = 1;
    this.tab_produit = 0;
    this.tab_vente = 0;
  }
  displayProduit(){
    this.tab_produit = 1;
    this.tab_user = 0;
    this.tab_vente = 0;
  }
  displayVente(){
    this.tab_vente = 1;
    this.tab_produit = 0;
    this.tab_user = 0;
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
  produit = [
    {id : 1, article : "Pack GM", ref :"PFGM", prix : 1000, qtStock : 1550, },
    {id : 2, article : "Pack PM", ref :"PFPM", prix : 800, qtStock : 550},
    {id : 3, article : "Etiq PM", ref :"MPEPM", prix : 600, qtStock : 2050},
    {id : 4,article : "Etiq GM", ref :"MPEGM", prix : 600, qtStock : 1550},
    {id : 5,article : "Film", ref :"MPF", prix : 600, qtStock : 1550},
    {id : 6,article : "Bouteille PM", ref :"MPBPM", prix : 600, qtStock : 1550},
    {id : 7,article : "Bouteille GM", ref :"MPBGM", prix : 600, qtStock : 1550},
    {id : 8,article : "Produit 1", ref :"P00001", prix : 600, qtStock : 1550},
    {id : 9,article : "Produit 2", ref :"P00002", prix : 600, qtStock : 1550}
  ]
  user = [
    {id : 1 , nom : "FALL" , prenom : "Amadou" , login : "amadou@gmail.com" , password : "passer"},
    {id : 2 , nom : "DIOP" , prenom : "Awa" , login : "awa@gmail.com" , password : "passer"},
    {id : 3 , nom : "NDIAYE" , prenom : "Youssou" , login : "youssou@gmail.com" , password : "passer"},
    {id : 4 , nom : "FALL" , prenom : "Fallou" , login : "fallou@gmail.com" , password : "passer"},
    {id : 5 , nom : "NIANG" , prenom : "Aliou" , login : "aliou@gmail.com" , password : "passer"},
  ]
  modalRef1: BsModalRef;
  openModal1(template1: TemplateRef<any>) {
    this.modalRef1 = this.modalService.show(template1);
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
    for(let u of this.user){
      if(u.id == this.id){
        u.nom = this.nom;
        u.prenom = this.prenom;
        u.login = this.login;
        u.password = this.password
      }
    }
    this.id = null;
    this.nom = null;
    this.prenom = null;
    this.login = null;
    this.password = null;
  }
  adduser={
    id:0,nom:"",prenom : "",login :"" ,password :""
  }
  add(){
    this.adduser.id=this.maxId;
    this.adduser.nom=this.nom;
    this.adduser.prenom=this.prenom;
    this.adduser.login=this.login;
    this.adduser.password=this.password;
    this.user.push(this.adduser);
    this.maxId = null;
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
    this.index = this.user.indexOf(this.user[this.indiceUser])
    this.user.splice(this.index, 1);
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
 //vente de produit
 modalRef6: BsModalRef;
 openModal6(template6: TemplateRef<any>) {
   this.modalRef6 = this.modalService.show(template6);
 }
 Vente = [
   {id : 1, quantite : 5 ,prixUnitaire : 1000, designation : 'Mounir Bouteille 40 cl', montant : 5000 , agent : 'Abdou', date : '2018-09-14T10:21:49.775Z' }
 ]
 addVente = {
  id : 0, quantite : 0 ,prixUnitaire : 0,designation : '', montant : 0 , agent : '', date : null
 }
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
 vente(){
//  id : 0, quantite : 0 ,prixUnitaire : 0, montant : 0 , agent : '', date : null

  this.addVente.id = this.idVente;
  this.addVente.quantite = this.qteVente;
  this.addVente.prixUnitaire = this.pu;
  this.addVente.montant = this.qteVente * this.pu;
  this.addVente.agent = this.userName;
  this.addVente.date = new Date().toJSON();
  this.addVente.designation = this.prodVendu;
  this.Vente.push(this.addVente);

  
 }
 //vente de produit
 idP : number;
  maxIdP : number;
  ref:string;
  nomP:string;
  prix:number;
  qte:number;
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
    this.nomP = this.produit[i].article;
    this.ref = this.produit[i].ref;
    this.prix = this.produit[i].prix;
    this.qte = this.produit[i].qtStock;
  }
  maxIdJournal:number;
  refForJournale:string;
  updateProd(){
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
  constructor(private modalService: BsModalService,private router: Router) { }
  userName:string;
  profile : string;
  ngOnInit() {
    this.userName = localStorage.getItem("userName")
    this.profile = localStorage.getItem("profile")
  }

}
