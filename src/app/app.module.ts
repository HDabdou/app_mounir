import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { GestStockComponent } from './gest-stock/gest-stock.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule} from '@angular/router';
const routes:Routes=[  {path:'accueil', component:AdminComponent},
  {path:'gest-stock', component:GestStockComponent},
  {path:'login', component:ConnexionComponent},
  {path:'',redirectTo:'/login' ,pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AdminComponent,
    GestStockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
