import { Component } from '@angular/core';
import { Version } from './nuevaentrada/nuevaentrada.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  versiones:Version[]=[];
  actualLog: string = "";
  permisos :string[]= [];


  constructor() {
    this.loadData();}

  loadData() {
    if (this.actualLog != ""){
      let tmp: string| null = localStorage.getItem(this.actualLog);    
      if (tmp != null ){
         this.versiones = JSON.parse(tmp);}
    }
  }

  updateLog( cadena:string) {
    this.actualLog = cadena;
    this.versiones=[];
    this.loadData();
  }

  actualizarPermisosEfectivos(permisos:string[]) {
    this.permisos = permisos;}

  saveData(versiones:Version[]) {
    this.versiones=versiones;  
    localStorage.setItem(this.actualLog, JSON.stringify(this.versiones));
  }
}