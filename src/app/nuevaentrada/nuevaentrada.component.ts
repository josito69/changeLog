import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Version {
  Released: string;
  Name: string;
  Fecha: string;
  Descripcion: string;
  Added: Entrada[];
  Changed: Entrada[]
  Deprecated: Entrada[]
  Fixed: Entrada[]
  Removed: Entrada[]
  Security: Entrada[]
}
export interface Entrada {
  Content: string;
  Permisos: string;
}

@Component({
  selector: 'app-nuevaentrada',
  templateUrl: './nuevaentrada.component.html',
  styleUrls: ['./nuevaentrada.component.css']
})
export class NuevaentradaComponent implements OnInit {
  @Input() permisos:string[]
  @Input() actualLog = "";
  @Input() versiones:Version[];
  @Output() saveData = new EventEmitter();
  @Output() actPermit = new EventEmitter();
  @Output() actLog = new EventEmitter();

  cambios = ["Added", "Changed", "Deprecated", "Fixed", "Removed", "Security"];
  release = ""; name = ""; fecha = ""; descripcion = ""; cambio:string=""; comment = "";
  entrada:Entrada={} as Entrada;
  constructor() {
  }
  ngOnInit(): void {

  }
  actualizarPermisosEfectivos(permisos:string[]) {
    this.actPermit.emit(permisos)}

  updateLog( cadena:string) {
      this.actLog.emit(cadena);
    }

  addEntry() {
    if (this.actualLog != "") { 
      if(this.versiones.length>0){
        let entrada:Entrada={} as Entrada;
        let version:any;
        entrada.Content = this.comment;
        entrada.Permisos = JSON.stringify(this.permisos);
        version=this.versiones.pop() ;
        version[this.cambio].push(entrada)
        this.versiones.push(version);

        this.saveData.emit(this.versiones);}
    }
    this.cambio = ""
    this.comment = "";
  }
  addVersion() {
    if (this.actualLog != "") {
     let version={} as Version
     version.Released=this.release;
     version.Name=this.name;
     version.Fecha=this.getFecha();
     version.Descripcion=this.descripcion;
     version.Added=[]
     version.Changed=[]
     version.Deprecated=[];
     version.Fixed=[];
     version.Removed=[];
     version.Security=[]; 
     this.versiones.push(version);
     this.saveData.emit(this.versiones);
     this.name = ""; this.release = ""; this.fecha = ""; this.descripcion = "";
    }
  }
  getFecha():string{
    let data=new Date();
   // return data.getDay()+"/"+(data.getMonth()+1)+"/"+data.getFullYear();
    return data.toLocaleDateString();
  }
}