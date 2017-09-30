import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  loading = false;

  contacts:Contact[];

  inputName = "";
  inputPhone = "";



  constructor(private contactsService:ContactsService) { }

  ngOnInit() {

    this.loading = true;

  this.contactsService.getContacts().subscribe(contacts => {

      this.contacts = contacts;
      this.loading = false;
    });

  }


   delete(contact) {

     this.contactsService.deleteContact(contact).subscribe(c => {

       let index = this.contacts.indexOf(contact);
       this.contacts.splice(index, 1);
     });
   }

   insertContact() {

     let contact:Contact = {
       name: this.inputName,
       phone: this.inputPhone
     };

     this.contactsService.saveContact(contact).subscribe(c => {

       this.contacts.push(c);
     });

     this.clearForm();
   }


   clearForm() {
     this.inputName = "";
     this.inputPhone = "";
   }


}
