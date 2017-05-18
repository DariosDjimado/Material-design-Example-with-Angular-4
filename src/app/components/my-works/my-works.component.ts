import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent implements OnInit {
	html:string = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Awesome</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">  
</head>
<body>
	<header id="header">The Lion King</header>
	<main>
		<section>
			<p>In the Pride Lands of Africa, a lion rules over the animal kingdom from Pride Rock. 
			King Mufasa's newborn son, Simba, is presented to the assembled animals by Rafiki,
			a mandrill who serves as shaman and advisor</p>
		</section>
	</main>
	<footer>© 2047 | The last Alien</footer>
</body>
</html>`;
	css=`
*{
    box-sizing: border-box;
}
html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 16px;
    background: #3F51B5;
}
body,header,main,footer{
    display: flex;
}
body{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-align: center;
}
header,main,footer{
    min-height: 4rem;
    padding: 1.25rem;
    justify-content: center;
    align-items: center;
    
}
header{
    background-color: #FF5722;
}
footer{
    background-color: #FF5722;
}`;
script=`
let header=document.querySelector('#header');

setTimeout(()=>{

    header.innerHTML='The last Alien';

},2000)
`
    options:any = {maxLines: 1000, printMargin: false};

	constructor(private snackBar:MdSnackBar) { }

	ngOnInit() {
		this.snackBar.open('Welcome back Mister', 'Thank',{
			duration: 5000
		})
	}

}
