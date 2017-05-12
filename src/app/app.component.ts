import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  	homeImgOpacity:number=0.9;
  	pageProgress:number=0;
	ngOnInit(){
		let body = document.body;
		let html = document.documentElement;
		let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
		console.log(height);
		window.addEventListener('scroll',(e:any)=>{
			let scrollPositionY=window.scrollY;

			let x=window.innerHeight;
			let y=document.documentElement.scrollTop || document.body.scrollTop;
			let z=document.body.scrollHeight;

			this.pageProgress=(x+y)*100/z;

			if (scrollPositionY<400){
				this.homeImgOpacity=1-scrollPositionY*0.9/400;
			}
			
		})
	}

}
