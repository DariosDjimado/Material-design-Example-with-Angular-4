import { Component, OnInit } from '@angular/core';

class ContactMessage {
  name: string;
  lastName: string;
  email: string;
  about: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  message: ContactMessage = new ContactMessage;
  constructor() { }

  ngOnInit() {
  }

}
