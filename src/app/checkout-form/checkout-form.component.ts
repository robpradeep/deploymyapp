import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  Contact = new Contact();
  msg:String ="gmail.com"
  lname!: string;
  submitted=false;


  constructor() { }

  ngOnInit(): void {
  }
  submit(form)
  {
    this.Contact.firstName=form.finame;
    this.Contact.lastName=form.laname;
    this.Contact.email=form.email;
    window.alert("cart is sucessfully ordered by "  +  this.Contact.firstName );
    console.log(form);
    this.submitted=true;
  }

}
