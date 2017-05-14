import { Component, OnInit } from '@angular/core';
class ContactMessage{
	name:string;
	lastName:string;
	email:string;
	about:string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	message:ContactMessage=new ContactMessage;

  constructor() { }

  ngOnInit() {
  }

}
