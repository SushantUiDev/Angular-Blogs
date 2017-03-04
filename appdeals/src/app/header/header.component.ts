//imponent component
import {Component} from '@angular/core' ;
/*Decorate component*/
	@Component({
		selector:"appheader-root",
		templateUrl:"./header.component.html"
		})
//export component
export class HeaderComponent{

    contentType:"";
    loadContent(item){
	this.contentType=item ;
        
    }
}