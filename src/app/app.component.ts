import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  	pageProgress:number=0;
  	showSeachBar:boolean=false;
  	constructor(){}

	ngOnInit(){		
		window.addEventListener('scroll',(e:any)=>{
			let x=window.innerHeight;
			let y=document.documentElement.scrollTop || document.body.scrollTop;
			let z=document.body.scrollHeight;
			this.pageProgress=(x+y)*100/z;
		})
	}

}
