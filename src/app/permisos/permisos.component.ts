import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {
  newPermit: string = "";
  permisos: string[] = ["ROLE_ADMINISTRADOR", "ROLE_SUPERVISOR", "CHANGELOG"];
  permisosEfectivos: String[] = [];
  permisos2: boolean[]=[]
  @Output() actPermit = new EventEmitter();



  constructor() {
    this.loadPermits();}

  ngOnInit(): void {}

  checkPermit(event: any, permiso: any) {
    if (event.target.checked){
      this.permisosEfectivos.push(permiso);
    }
    else
      this.permisosEfectivos.splice(this.permisosEfectivos.indexOf(permiso), 1);
    this.actPermit.emit(this.permisosEfectivos);
  }

  loadPermits() {
    let tmp: string | null = localStorage.getItem('permisos');
    if (tmp != null) 
      this.permisos = JSON.parse(tmp);}

  updatePermits() {
    let tmp: string = "";
    tmp = JSON.stringify(this.permisos);
    localStorage.setItem("permisos", tmp);}

  addPermit() {
    if (this.newPermit != "" &&  this.permisos.indexOf(this.newPermit)==-1) {
      this.permisos.push(this.newPermit)
      this.permisos2.push(false);
      this.updatePermits();
      this.loadPermits();
      this.newPermit = "";}}

  delPermit(permiso: string) {
    this.permisos.splice(this.permisos.indexOf(permiso), 1);
    this.updatePermits();
    this.loadPermits();
    if(this.permisosEfectivos.indexOf(permiso)!=-1){
         this.permisosEfectivos.splice(this.permisosEfectivos.indexOf(permiso), 1);
         this.actPermit.emit(this.permisosEfectivos); } 
  }
}
