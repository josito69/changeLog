
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.css']
})
export class LectorComponent implements OnInit {
  newLog:string="";
  logs:string[]=[];
  @Output() actLog = new EventEmitter();

  constructor() { 
    let tmp: string | null = localStorage.getItem('logs');
    if (tmp != null) 
      this.logs = JSON.parse(tmp);}

  ngOnInit(): void {}

  reloadLog(event: Event, log:String){
    this.actLog.emit(log);}

  addLog(){ 
    if (this.newLog != "" &&  this.logs.indexOf(this.newLog)==-1) {   
      localStorage.setItem(this.newLog,JSON.stringify(JSON.parse("[]")));
      this.logs.push(this.newLog)
      localStorage.setItem("logs", JSON.stringify(this.logs));
      this.newLog = "";}}

  delLog(event: Event,log:string){
    this.logs.splice(this.logs.indexOf(log), 1);
    localStorage.setItem("logs", JSON.stringify(this.logs));
    localStorage.removeItem(log);
    this.actLog.emit("");}
}
