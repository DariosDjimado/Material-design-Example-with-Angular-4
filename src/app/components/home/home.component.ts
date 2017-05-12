import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	homeImgOpacity:number=0.9;
	homeScale:number=1;
  	constructor() { }

	ngOnInit() {
		window.addEventListener('scroll',(e:any)=>{
			let scrollPositionY=window.scrollY;

			if (scrollPositionY<400){
				this.homeImgOpacity=1-scrollPositionY*0.9/400;
				this.homeScale=1+scrollPositionY*0.9/400;
			}
			
		})
	}

}
