import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact } from './contact.model';

@Injectable()
export class ContactsService {


  url = "https://nodejs-todolist-api.herokuapp.com/contacts/aps";

  constructor(private http: Http) { }


  getContacts() {
  //Fazemos um get na nossa url e o resultado é mapeado em formato JSON
  return this.http.get(this.url)
    .map(response => response.json());
}

//POST
saveContact(contact){
  //Como nossa API recebe os dados em formato JSON, aqui usamos os objetos
  //Headers e RequestOptions para setar o content-type da nossa requisição
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  //Fazemos um post na url, passando o contact em formato json, e os options
  //criados no passo anterior. O resultado também vem em json.
  return this.http.post(this.url, JSON.stringify(contact), options)
    .map(res => res.json());
}

//DELETE
deleteContact(contact){
  //Aqui concatenamos a nossa url original com o id do contato recebido
  //e fazemos uma request http DELETE
  return this.http.delete(`${this.url}/${contact._id}`)
    .map(res => res.json());
}

  // getContacts()
  // {
  // 	return this.contacts;
  // }
  //
  // contacts:Contact[] = [
  //  		{
  //  			name: "Anderson",
  //  			phone: "99999999"
  //  		},
  //  		{
  //  			name: "Dani",
  //  			phone: "888888888"
  //  		},
  //  		{
  //  			name: "Erika",
  //  			phone: "777777777"
  //  		}
  //  ]


}
