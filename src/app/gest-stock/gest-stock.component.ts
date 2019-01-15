import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-gest-stock',
  templateUrl: './gest-stock.component.html',
  styleUrls: ['./gest-stock.component.css']
})
export class GestStockComponent implements OnInit {
  ActiviteChoose:string;
  ServiceChoose:string;
  tabCaiss:number = 0;
  tabPerso:number = 1;
  btnAdd:number = 0;
  menu:number=1;
  datasets:any = [];
  Intervenent =[
    {nom:'Destockage',service:'gest-stock',etat:1},
    {nom:'Destockage',service:'gest-stock',etat:1},
    {nom:'Recouvrement',service:'comptabilite',etat:1},
    {nom:'Validation',service:'comptabilite',etat:1},
    {nom:'Versement',service:'technique',etat:1},
    {nom:'Stockage',service:'technique',etat:1}
  ]
  
 
  displayHome(){
    this.menu = 0;
  }
  displayCaisse(){
    this.menu =1;
    this.persoMenu = 1;
    this.btnAdd = 0;
  }
  displayExploitation(){
    this.menu =2;
    this.persoMenu = 1;
    this.btnAdd = 0;
  }
  displayPersonalisation(){
    this.menu = 3;
  }
  tabCaisse:number=1;
  displayForm:number = 0;
  displayHistorique(){
      this.displayForm = 1;
  }
  displayHistorique1(){
    this.displayForm = 2;
}
  displayEtat(){
    this.tabCaisse = 1;
  }
  etatInitiale:number=5000000;
  entree:number=0;
  sortie:number=0;
  etatFinal:number=0;
  journalCaisse = [
    { date:'10/10/2018',montant:100000,type:1,caissier:'Naby' },
    { date:new Date().toLocaleDateString(),montant:200000,type:2,caissier:'Adama' },
    { date:new Date().toLocaleDateString(),montant:100000,type:2,caissier:'Youssou' },
    { date:new Date().toLocaleDateString(),montant:100000,type:1,caissier:'Abdou' },
    { date:new Date().toLocaleDateString(),montant:100000,type:1,caissier:'Fatou' },
    { date:new Date().toLocaleDateString(),montant:100000,type:2,caissier:'Awa' },
  ]
  journalCaisseByDay:any =[];
  selectionjour:string;
  Recherche(datejour){
    //let d = datejour.split('/')[2];
    let datej = datejour.split('-')[2]+"/"+datejour.split('-')[1]+"/"+datejour.split('-')[0];
    //console.log(datej);
    this.journalCaisseByDay = [];
    for(let j of this.journalCaisse){
      if(j.date == datej){
        //console.log(j);  
        this.journalCaisseByDay.push(j);
      }
    }
    //console.log(this.journalCaisseByDay);    
  }
  rechercheIntervalle(intervalledateinit,intervalleddatefinal){
    let debut = intervalledateinit.split('-')[2]+"/"+intervalledateinit.split('-')[1]+"/"+intervalledateinit.split('-')[0];
    let fin = intervalleddatefinal.split('-')[2]+"/"+intervalleddatefinal.split('-')[1]+"/"+intervalleddatefinal.split('-')[0];
    //console.log(debut);
    //console.log(fin);
    this.journalCaisseByDay = [];
    for(let j of this.journalCaisse){
      if(j.date >= debut && j.date <= fin){
        //console.log(j);        
        this.journalCaisseByDay.push(j);
      }
    }
   // console.log(this.journalCaisseByDay);
  }
  journalExploitation =[]
  modifPerso:string = '';
  modifActivite:string = '';
  Services = [
    { nomService:'gest-stock', etat:1 },
    { nomService:'comptabilite', etat:1},
    { nomService:'technique', etat:1},
    //{ nomService:'technique',activite:{vente:{Article:{designation:'pack PM',stock:'150',coutRevient:800,prixVent:1000}},stocker:{quantite:50,article:'PQck GM'}}},
  ]
  serv:string;
  AddService = { nomService:'', etat:0}
  updateServcie(i){
    this.Services[i].nomService = this.modifPerso;
    this.Services[i].etat=1; 
  }
  persoMenu:number=1;
  listActivite =[];
  listeArticle =[];
  getServcie(i){
    this.modifPerso = this.Services[i].nomService;
    this.Services[i].etat=2; 
  }
  addService(){
    if(this.serv == undefined || this.serv == '') {
      this.displayForm = 0;
    }else{
      this.AddService.nomService = this.serv;
      this.AddService.etat = 1;
      this.Services.push(this.AddService);
      this.serv =undefined;
      this.tabCaiss = 1;
      this.persoMenu = 1;
      this.displayForm = 0;
    }
  }
  listeDetail = [];
  listeDetail1 = [];
  detailServcie(i){
    this.listeDetail = [];
    this.listeDetail1 = [];
    let service = this.Services[i].nomService;
    this.ServiceChoose = service;
    for(let a of this.Intervenent){
      if(a.service == this.Intervenent[i].service){
        this.listeDetail1.push(a);
      }
    }
    this.btnAdd = 1;
    //console.log(this.listeDetail);
    this.persoMenu = 2;
  }
  retour(){
    this.persoMenu =  this.persoMenu - 1;
    this.btnAdd = this.btnAdd - 1;
    this.tabCaiss = this.tabCaiss -1;
  }
  RoleIntervenet = [
    {libelle:'Recouvrement'},
    {libelle:'Stockage'},
    {libelle:'Destockage'},
    {libelle:'Versement'},
    {libelle:'Validation'},
    {libelle:'Recouvrement'},
  ]
  Actvite =[
    {libelle:'Vente',intervenent:'Versement',etat:1},
    {libelle:'stockage',intervenent:'Stockage',etat:1},
    {libelle:'Destockage',intervenent:'Destockage',etat:1},
    {libelle:'Encaissement',intervenent:'Validation',etat:1},
    {libelle:'DeCaissement',intervenent:'Versement',etat:1},
  ]
  Article = [
    {designation:'Lecture',activite:'Vente',etat:1},
    {designation:'Lecture',activite:'Vente',etat:1},
    {designation:'Lecture',activite:'stockage',etat:1},
    {designation:'Lecture',activite:'stockage',etat:1},
    {designation:'Ecriture',activite:'Encaissement',etat:1},
    {designation:'Ecriture',activite:'Encaissement',etat:1},
    {designation:'Ecriture',activite:'Destockage',etat:1},
    {designation:'Ecriture',activite:'Vente',etat:1},
  ]
  design:string;
  coutR:number;
  PrixV:number;
  AddArticle = {designation:'',Stock:0,coutRevient:0,prixVente:0,activite:'',etat:0};

  addArticle(){
    if(this.design == undefined || this.design == ''){
      this.displayForm = 0;
    }else{
      this.AddArticle.designation = this.design;
      this.AddArticle.Stock = 0;
      this.AddArticle.coutRevient = this.coutR;
      this.AddArticle.prixVente = this.PrixV;
      this.AddArticle.activite = this.ActiviteChoose;
      this.listeDetailActivite.push(this.AddArticle);
      //console.log(this.AddArticle);
      this.persoMenu=3;
      this.displayForm = 0;  
    }
  }
  displayHistory(){
    this.tabCaisse = 2;
  }
  displayPersonalisation1(){
    this.persoMenu = 1;
    this.btnAdd = 0;
  }
  displayAddActivite(){
    this.displayForm = 2;
  }
  displayAddArticle(){
    this.displayForm = 3;
  }
  listeDetailActivite =[]
  detailActivite(i){
    this.listeDetailActivite =[];
    let activite = this.listeDetailIntervenent[i].libelle;
    this.ActiviteChoose=activite;
    for(let a of this.Article){
      if(a.activite == activite){
        this.listeDetailActivite.push(a);
      }
    }
    //console.log(this.listeDetailActivite);
    this.persoMenu = 4;
    this.btnAdd = 3;
  }

  listeDetailIntervenent = []
  detailIntervenent(i){
    this.listeDetailIntervenent = [];
    for(let a of this.Actvite){
      if(a.intervenent == this.listeDetail1[i].nom){
        this.listeDetailIntervenent.push(a);
      }
    }
    this.persoMenu = 3;
    this.btnAdd = 2;
  }
  myChart:any;
  designation:string='';
  stock:string='';
  cr:string='';
  pv:string='';
  getArticle(i){
    this.designation = this.listeDetailActivite[i].designation;
    this.stock = this.listeDetailActivite[i].Stock;
    this.cr = this.listeDetailActivite[i].coutRevient;
    this.pv = this.listeDetailActivite[i].prixVente;
    this.listeDetailActivite[i].etat= 2;
  }
  updateArticle(i){
    this.listeDetailActivite[i].designation = this.designation;
    this.listeDetailActivite[i].Stock = this.stock;
    this.listeDetailActivite[i].coutRevient = this.cr;
    this.listeDetailActivite[i].prixVente =  this.pv ;
    this.listeDetailActivite[i].etat= 1;
  }
  getActivite(i){
    this.modifActivite = this.listeDetail[i].libelle;
    this.listeDetail[i].etat = 2;
  }
  nomInter:any;
  getIntervenent(i){
    this.nomInter = this.Intervenent[i].nom;
    this.Intervenent[i].etat = 2;
  }
  updateActivite(i){
    this.listeDetail[i].libelle = this.modifActivite;
    this.listeDetail[i].etat = 1;
  }
  updateIntervenent(i){
    this.Intervenent[i].nom=this.nomInter;
    this.Intervenent[i].etat = 1;
  }
  AddActivite = {libelle:'',service:'',etat:0}
  act:string;
  addActivite(){
    this.AddActivite.etat=null;
    this.AddActivite.libelle=null;
    this.AddActivite.service=null;
    if(this.act == undefined || this.act == ''){
      this.displayForm = 0;
    }else{
      this.AddActivite.libelle = this.act;
      this.AddActivite.service = this.ServiceChoose;
      this.AddActivite.etat=1
      this.listeDetail.push(this.AddActivite);
      console.log(this.AddActivite);
      this.displayForm=0;
      this.act=null;
    }
  }
  addIntervenat(){
    this.displayForm=0;
  }
  constructor(private router: Router,public _authService:AuthServiceService) { }
  deconnexion(){
    this.router.navigate(['/login']);
    //this.userName=null;
  }
  userName:string='';
  datejour:any;
  datenow:any;
  totalEntree:number=0;
  totalSortie:number=0;
  totalBenefice:number=0;
  intervalledateinit:any;
  intervalleddatefinal:any;
  Name:any;
  rechercheIntervale(){
    this._authService.tableExploitation(this.intervalledateinit+' 00:00:00',this.intervalleddatefinal+' 23:59:59').then( res =>{
      this.totalEntree = 0;
      this.totalSortie = 0;
      console.log(res);
      this.journalExploitation = res['message'];
      for(let l of this.journalExploitation){
       if(l.Entrees != null){
        this.totalEntree = (this.totalEntree + parseInt(l.Entrees));
       }
       if(l.Sortie != null){
        this.totalSortie = (this.totalSortie + parseInt(l.Sortie));
       }
      }
    }) 
  }
  rechercheExploitation(){
    this._authService.tableExploitation(this.datenow+' 00:00:00',this.datenow+' 23:59:59').then( res =>{
      this.totalEntree = 0;
      this.totalSortie = 0;
      console.log(res);
      this.journalExploitation = res['message'];
      for(let l of this.journalExploitation){
       if(l.Entrees != null){
        this.totalEntree = (this.totalEntree + parseInt(l.Entrees));
       }
       if(l.Sortie != null){
        this.totalSortie = (this.totalSortie + parseInt(l.Sortie));
       }
      }
    }) 
  }
  ngOnInit() { 
    
  

   
    this.datenow = ((new Date()).toJSON()).split("T",2)[0];
    this.selectionjour = this.datenow;
    this.datejour = new Date().toLocaleDateString();
    console.log(this.selectionjour+" "+this.datenow);
    
    this.Recherche(this.selectionjour);
   // console.log(this.journalCaisseByDay);
   this._authService.tableExploitation(this.datenow+' 00:00:00',this.datenow+' 23:59:59').then( res =>{
    this.totalEntree = 0;
    this.totalSortie = 0;
    console.log(res);
    this.journalExploitation = res['message'];
    for(let l of this.journalExploitation){
      if(l.Entrees != null){
        this.totalEntree = (this.totalEntree + parseInt(l.Entrees));
       }
       if(l.Sortie != null){
        this.totalSortie = (this.totalSortie + parseInt(l.Sortie));
       }

    }
  }) 
    this.Name = localStorage.getItem("userName");
    //console.log('user ====>'+this.Name);
    console.log(this.Intervenent);
    
    for(let j of this.journalCaisse){
      if(j.type == 1){
        //console.log(j);
        this.entree =this.entree + j.montant;
      }
      if(j.type == 2){
        this.sortie = this.sortie + j.montant;
      }
    }
    this.etatFinal = this.etatInitiale + (this.entree - this.sortie);
    console.log(this.entree,this.sortie, this.etatFinal);
    
  
  }
}
