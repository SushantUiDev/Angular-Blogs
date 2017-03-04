//imponent component
import {Component} from '@angular/core' ;
/*Decorate component*/
	@Component({
		selector:"appdeals-register",
		templateUrl:"./register.component.html"
		})
//export component
export class RegisterComponent{
     constructor(){

	 }
	 //creating user object which having all properties of register component
	 user:Object={
		 email:'sushantpaikrao1990@gmail.com'
	 }
	 create(){
        console.log(this.user);
	 }
}