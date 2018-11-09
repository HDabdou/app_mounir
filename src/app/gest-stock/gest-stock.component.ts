import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';

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
  displayHome(){
    this.menu = 0;
  }
  displayCaisse(){
    this.menu =1;
  }
  displayExploitation(){
    this.menu =2;
  }
  displayPersonalisation(){
    this.menu = 3;
  }
  tabCaisse:number=1;
  displayForm:number = 0;
  displayHistorique(){
      this.displayForm = 1;
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
    console.log(datej);
    this.journalCaisseByDay = [];
    for(let j of this.journalCaisse){
      if(j.date == datej){
        console.log(j);
        
        this.journalCaisseByDay.push(j);
      }
    }
    console.log(this.journalCaisseByDay);    
  }
  rechercheIntervalle(intervalledateinit,intervalleddatefinal){
    let debut = intervalledateinit.split('-')[2]+"/"+intervalledateinit.split('-')[1]+"/"+intervalledateinit.split('-')[0];
    let fin = intervalleddatefinal.split('-')[2]+"/"+intervalleddatefinal.split('-')[1]+"/"+intervalleddatefinal.split('-')[0];
    console.log(debut);
    console.log(fin);
    this.journalCaisseByDay = [];
    for(let j of this.journalCaisse){
      if(j.date >= debut && j.date <= fin){
        //console.log(j);        
        this.journalCaisseByDay.push(j);
      }
    }
    console.log(this.journalCaisseByDay);
  }
  journalExploitation =[
    {date:new Date().toLocaleDateString(),totalEntree:20,totlaSortoe:100,article:'PACKGM',benefice:100},
    {date:new Date().toLocaleDateString(),totalEntree:500,totlaSortoe:502,article:'PACKPM',benefice:200},
    {date:new Date().toLocaleDateString(),totalEntree:522,totlaSortoe:114,article:'PACKGM',benefice:190},
    {date:new Date().toLocaleDateString(),totalEntree:245,totlaSortoe:200,article:'PACKGM',benefice:15000},
    {date:new Date().toLocaleDateString(),totalEntree:152,totlaSortoe:301,article:'PACKGM',benefice:10000},
  ]
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
  detailServcie(i){
    this.listeDetail = [];
    let service = this.Services[i].nomService;
    this.ServiceChoose = service;
    for(let a of this.Actvite){
      if(a.service == service){
        this.listeDetail.push(a);
      }
    }
    this.btnAdd = 1;
    console.log(this.listeDetail);
    
    this.persoMenu = 2;

  }
  retour(){
    this.persoMenu =  this.persoMenu - 1;
    this.btnAdd = this.btnAdd - 1;
    this.tabCaiss = this.tabCaiss -1;
  }
  Actvite =[
    {libelle:'Vente',service:'gest-stock',etat:1},
    {libelle:'stockage',service:'gest-stock',etat:1},
    {libelle:'Destockage',service:'gest-stock',etat:1},
    {libelle:'Encaissement',service:'comptabilite',etat:1},
    {libelle:'DeCaissement',service:'comptabilite',etat:1},
  ]
  Article = [
    {designation:'Pack PM',Stock:150,coutRevient:800,prixVente:1000,activite:'Vente',etat:1},
    {designation:'Pack GM',Stock:150,coutRevient:800,prixVente:1000,activite:'Vente',etat:1},
    {designation:'Pack PM',Stock:150,coutRevient:800,prixVente:1000,activite:'stockage',etat:1},
    {designation:'Pack GM',Stock:150,coutRevient:800,prixVente:1000,activite:'stockage',etat:1},
    {designation:'Pack PM',Stock:150,coutRevient:800,prixVente:1000,activite:'Encaissement',etat:1},
    {designation:'Pack GM',Stock:150,coutRevient:800,prixVente:1000,activite:'Encaissement',etat:1},
    {designation:'Pack PM',Stock:150,coutRevient:800,prixVente:1000,activite:'Destockage',etat:1},
    {designation:'Pack GM',Stock:150,coutRevient:800,prixVente:1000,activite:'Vente',etat:1},
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
      console.log(this.AddArticle);
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
    let activite = this.listeDetail[i].libelle;
    this.ActiviteChoose=activite;
    for(let a of this.Article){
      if(a.activite == activite){
        this.listeDetailActivite.push(a);
      }
    }
    console.log(this.listeDetailActivite);
    this.persoMenu = 3;
    this.btnAdd = 2
  }
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
  updateActivite(i){
    this.listeDetail[i].libelle = this.modifActivite;
    this.listeDetail[i].etat = 1;
  }
  AddActivite = {libelle:'',service:'',etat:0}
  act:string;
  addActivite(){
    if(this.act == undefined || this.act == ''){
      this.displayForm = 0;
    }else{
      this.AddActivite.libelle = this.act;
      this.AddActivite.service = this.ServiceChoose;
      this.AddActivite.etat=1
      this.listeDetail.push(this.AddActivite);
      console.log(this.AddActivite);
      this.displayForm=0;
    }
  }

  constructor() { }
  
  userName:string='';
  datejour:any;
  totalEntree:number=0;
  totalSortie:number=0;
  totalBenefice:number=0;
  ngOnInit() {
    for(let l of this.journalExploitation){
      this.totalEntree = this.totalEntree + l.totalEntree;
      this.totalSortie = this.totalSortie +l.totlaSortoe;
      this.totalBenefice = this.totalBenefice + l.benefice;
    }
    let datenow = ((new Date()).toJSON()).split("T",2)[0];
    this.selectionjour = datenow;
    this.datejour = new Date().toLocaleDateString();
    console.log(this.datejour);
    
    this.Recherche(this.selectionjour);
    console.log(this.journalCaisseByDay);
    
    this.userName = localStorage.getItem("userName");

    for(let j of this.journalCaisse){
      if(j.type == 1){
        console.log(j);
        
        this.entree =this.entree + j.montant;
      }
      if(j.type == 2){
        this.sortie = this.sortie + j.montant;
      }
    }
    this.etatFinal = this.etatInitiale + (this.entree - this.sortie);
    
  }

}
