import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {

	@Input() contact = {    /*parametro passado em contact.component.html no trecho <app-contact2 [contact] = "contact">
                          </app-contact2>*/
		name: "",
		phone: ""
	} 

  @Output() contactDeleted = new EventEmitter();


  remove(){
   // alert(`REMOVER ${this.contact.name}`);
    this.contactDeleted.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
