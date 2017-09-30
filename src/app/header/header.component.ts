import { Component, OnInit, Input } from '@angular/core';  //<-- Observar o Input adicionado...

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:string = "";//"Meu novo título";



  constructor() { }

  ngOnInit() {
  }

}
