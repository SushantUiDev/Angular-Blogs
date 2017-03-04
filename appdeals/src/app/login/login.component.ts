//imponent component
import {Component} from '@angular/core' ;
/*Decorate component*/
	@Component({
		selector:"appdeals-login",
		templateUrl:"./login.component.html"
		})
//export component
export class LoginComponent{
	user:Object={

	}
	create(){
		console.log(this.user);
	}
}