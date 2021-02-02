import { Component, Input, OnInit } from "@angular/core";
import { Version } from "../nuevaentrada/nuevaentrada.component";

@Component({
  selector: "app-nuevaversion",
  templateUrl: "./nuevaversion.component.html",
  styleUrls: ["./nuevaversion.component.css"],
})
export class NuevaversionComponent implements OnInit {
  @Input() versiones: Version[];
  @Input() actualLog: string;
  constructor() {}

  ngOnInit(): void {}
  downloadFile(event: any) {
    if (this.actualLog != "") {
      let elto = document.getElementById("downloader");
      if (elto != null) {
        elto.setAttribute(
          "href",
          "data:text/plain;charset=utf-8," +
            encodeURIComponent(JSON.stringify(this.versiones))
        );
        elto.click();
      }
    }
  }
}
